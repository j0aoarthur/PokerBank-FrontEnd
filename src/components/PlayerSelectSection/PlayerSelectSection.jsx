import {
    FormFieldsContainer,
    FormSection,
    Label,
    NumberInputStyled,
    SelectArrow,
    SelectInput,
    SelectWrapper
} from "./styles.js";
import React, {useEffect, useId, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getPlayersNotInGame} from "../../services/apiService.js";
import {useParams} from "react-router-dom";
import {MdExpandMore} from "react-icons/md";

export function PlayerSelectSection({onChange, playerIdValue, initialCashValue, isEditMode, currentPlayerName}) {
    const {gameId} = useParams()
    const id = useId();
    const [maskedValue, setMaskedValue] = useState("");
    const [players, setPlayers] = useState([]);

    const {data: playersNotInGame, isLoading: isLoadingPlayersNotINGame} = useQuery({
        queryKey: ["playersNotInGame", gameId],
        queryFn: () =>  getPlayersNotInGame(gameId),
        enabled: !isEditMode,
    })

    useEffect(() => {
        if (!isEditMode && playersNotInGame) {
            setPlayers(playersNotInGame);
        } else if (isEditMode && playerIdValue && currentPlayerName) {
            setPlayers([{id: playerIdValue, name: currentPlayerName}]);
        }
    }, [playersNotInGame, isEditMode, playerIdValue, currentPlayerName]);

    useEffect(() => {
        if (initialCashValue !== null && initialCashValue !== undefined) {
            setMaskedValue(Number(initialCashValue).toFixed(2));
        } else {
            setMaskedValue("");
        }
    }, [initialCashValue])

    const handleBalanceChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        if (value) {
            const formattedValue = (parseInt(value, 10) / 100).toFixed(2);
            setMaskedValue(formattedValue);
            onChange(event.target.name, formattedValue);
        } else {
            setMaskedValue("");
            onChange(event.target.name, "");
        }
    };

    return (
        (!isLoadingPlayersNotINGame || isEditMode) && (
            <FormSection>
                <h3>Adição de Jogador</h3>
                <FormFieldsContainer>
                    <div>
                        <Label htmlFor={id + '-player-select'}>Selecione Jogador</Label>
                        <SelectWrapper>
                            <SelectInput
                                id={id + '-player-select'}
                                placeholder="Selecionar Jogador"
                                onChange={(event) => onChange("playerId", event.target.value)}
                                value={playerIdValue}
                                disabled={isEditMode}
                            >
                                <option value="" disabled>Selecione Jogador</option>
                                {players.map(player => (
                                    <option key={player.id} value={player.id}>{player.name}</option>
                                ))}
                            </SelectInput>
                            <SelectArrow>
                                <MdExpandMore size={24} />
                            </SelectArrow>
                        </SelectWrapper>

                    </div>
                    <div>
                        <Label htmlFor={id + '-player-balance'}>Banca Inicial (R$)</Label>
                        <NumberInputStyled
                            name={"initialCash"}
                            inputMode={"decimal"}
                            id={id + '-player-balance'}
                            placeholder={"Digite o valor da banca inicial"}
                            value={maskedValue}
                            onChange={handleBalanceChange}
                        />
                    </div>
                </FormFieldsContainer>
            </FormSection>
        )

    )
}

// <FormSection>
//     <Label>
//         <LabelText>Player</LabelText>
//         <SelectInput value={selectedPlayer} onChange={e => setSelectedPlayer(e.target.value)}>
//             <option value="">Select Player</option>
//             {dummyPlayerData.players.map(player => (
//                 <option key={player.id} value={player.id}>{player.name}</option>
//             ))}
//         </SelectInput>
//     </Label>
//     <Label>
//         <LabelText>Initial Balance</LabelText>
//         <NumberInputStyled
//             type="number"
//             placeholder="Enter initial balance"
//             value={initialBalance}
//             onChange={e => setInitialBalance(e.target.value)}
//         />
//     </Label>
// </FormSection>