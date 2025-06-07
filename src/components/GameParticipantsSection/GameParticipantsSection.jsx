import {PlayerBalance, PlayerDetails, PlayerInfo, PlayerItemCard, PlayerList} from "./styles.js";
import React, {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getPlayersOfGame} from "../../services/apiService.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import {useNavigate} from "react-router-dom";
import {Section} from "../Section/Section.jsx";

export function GameParticipantsSection({gameId}) {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    const {data} = useQuery({
        queryKey: ["participants"],
        queryFn: () =>  getPlayersOfGame(gameId),
        enabled: !!gameId,
    })

    // Função para navegar para a edição do jogador na partida
    const handleParticipantClick = (player) => {
        navigate(`/game/${gameId}/player/${player.playerId}/edit`);
    };

    useEffect(() => {
        if (data) {
            setPlayers(data);
        }
    }, [data]);


    return (
        <Section title={`Jogadores (${players.length})`} subtitle={"Adicionar jogador"} subtitleTo={`/game/${gameId}/player`}>
            <PlayerList>
                {players.map((player, index) => {
                    return (
                        <PlayerItemCard key={index} onClick={() => handleParticipantClick(player)}>
                            <PlayerInfo>
                                <PlayerDetails $paid={player.paid}>
                                    <p>{player.playerName}</p>
                                    <p>{player.paid ? "Pago" : "Não Pago"}</p>
                                </PlayerDetails>
                            </PlayerInfo>
                            <PlayerBalance
                                $paymentSituation={player.paymentSituation}>{formatNumberToBRL(player.balance)}</PlayerBalance>
                        </PlayerItemCard>
                    )
                })}
            </PlayerList>
        </Section>
    )
}
