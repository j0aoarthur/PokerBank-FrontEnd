import {FormWrapper, InputWrapper} from "./styles.js";
import {Input, Select} from "antd";
import {useEffect, useId, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getPlayersNotInGame} from "../../services/apiService.js";
import {useParams} from "react-router-dom";

export function PlayerSelectSection({onChange, playerIdValue, initialCashValue, isEditMode, currentPlayerName}) {
    const {gameId} = useParams()
    const selectPlayerId = useId();
    const balanceId = useId();
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
            <FormWrapper>
                <InputWrapper>
                    <label htmlFor={selectPlayerId}>Jogador<span> *</span></label>
                    <Select
                        id={selectPlayerId}
                        placeholder="Selecionar Jogador"
                        onChange={(selectedPlayerId) => onChange("playerId", selectedPlayerId)}
                        style={{ width: '100%' }}
                        notFoundContent={isEditMode ? "" : "Todos jogadores já estão na partida ou nenhum jogador cadastrado!"}
                        options={players.map(player => ({
                            label: player.name,
                            value: player.id,
                        }))}
                        value={playerIdValue}
                        disabled={isEditMode}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor={balanceId}>Banca Inicial<span> *</span></label>
                    <Input
                        name={"initialCash"}
                        inputMode={"decimal"}
                        id={balanceId}
                        addonBefore="R$"
                        placeholder={"10.00"}
                        value={maskedValue}
                        onChange={handleBalanceChange}
                    />
                </InputWrapper>
            </FormWrapper>
        )

    )
}
