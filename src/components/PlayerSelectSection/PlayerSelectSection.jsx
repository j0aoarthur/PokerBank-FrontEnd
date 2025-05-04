import {FormWrapper, InputWrapper} from "./styles.js";
import {Input, Select} from "antd";
import {useEffect, useId, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getPlayersNotInGame} from "../../services/apiService.js";
import {useParams} from "react-router-dom";

export function PlayerSelectSection({onChange}) {
    const {gameId} = useParams()
    const {playerId} = useId()
    const {balanceId} = useId()
    const [maskedValue, setMaskedValue] = useState("");
    const [players, setPlayers] = useState([]);

    const {data} = useQuery({
        queryKey: ["players"],
        queryFn: () =>  getPlayersNotInGame(gameId),
    })

    useEffect(() => {
        if (data) {
            setPlayers(data);
        }
    }, [data]);

    const handleBalanceChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        if (value) {
            const formattedValue = (parseInt(value, 10) / 100).toFixed(2);
            setMaskedValue(formattedValue);
            onChange(event.target.name, formattedValue); // Use formattedValue directly
        } else {
            setMaskedValue("");
            onChange(event.target.name, ""); // Pass an empty string if no value
        }
    };

    return (
        players && (
            <FormWrapper>
                <InputWrapper>
                    <label htmlFor={playerId}>Jogador<span> *</span></label>
                    <Select
                        id={playerId}
                        placeholder="Selecionar Jogador"
                        onChange={(playerId) => onChange("playerId", playerId)}
                        style={{ width: '100%' }}
                        notFoundContent={"Todos jogadores presentes na partida!"}
                        options={players.map(player => ({
                            label: player.name,
                            value: player.id,
                        }))}
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
