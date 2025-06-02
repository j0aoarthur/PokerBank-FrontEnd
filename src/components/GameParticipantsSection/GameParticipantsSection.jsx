import {SectionTitle} from "../SectionTitle/SectionTitle.jsx";
import {FaRegCircleXmark} from "react-icons/fa6";
import {InfoContainer, InfoWrapper, ParticipantItem, ParticipantsList, ParticipantsSectionContainer} from "./styles.js";
import {LuCircleMinus, LuCirclePlus} from "react-icons/lu";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getPlayersOfGame} from "../../services/apiService.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import {FaRegCheckCircle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

export function GameParticipantsSection({gameId}) {
    const [participants, setParticipants] = useState([]);
    const navigate = useNavigate();

    const {data} = useQuery({
        queryKey: ["participants"],
        queryFn: () =>  getPlayersOfGame(gameId),
        enabled: !!gameId,
    })

    // Função para navegar para a edição do jogador na partida
    const handleParticipantClick = (participantId) => {
        navigate(`/game/${gameId}/player/${participantId.playerId}/edit`);
    };

    useEffect(() => {
        if (data) {
            setParticipants(data);
        }
    }, [data]);


    return (
        <ParticipantsSectionContainer>
            <SectionTitle title={"Jogadores"} subtitle={"Adicionar jogador"} subtitleTo={`/game/${gameId}/player`}/>
            <ParticipantsList>
                {participants.map(participant => {
                    const IconComponent = participant.paymentSituation === "PAY" ? LuCircleMinus : LuCirclePlus;
                    const iconColor = participant.paymentSituation === "PAY" ? "var(--red-color)" : "var(--green-color)";
                    return (
                        <ParticipantItem key={participant.playerId} onClick={() => handleParticipantClick(participant)}
                                         style={{cursor: 'pointer'}}>
                            <InfoContainer>
                                <IconComponent color={iconColor} />
                                <InfoWrapper $paymentSituation={participant.paymentSituation}>
                                    <h3>{participant.playerName}</h3>
                                    <p>Saldo: <span>{formatNumberToBRL(participant.balance)}</span></p>
                                </InfoWrapper>
                            </InfoContainer>
                            {participant.paid ? <FaRegCheckCircle size={20}/> : <FaRegCircleXmark size={20}/>}
                        </ParticipantItem>
                    )
                })}

            </ParticipantsList>
        </ParticipantsSectionContainer>
    )
}
