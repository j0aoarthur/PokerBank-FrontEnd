import {SectionTitle} from "../SectionTitle/SectionTitle.jsx";
import {FaAngleRight} from "react-icons/fa6";
import {InfoContainer, InfoWrapper, ParticipantItem, ParticipantsList, ParticipantsWrapper} from "./styles.js";
import {LuCircleMinus, LuCirclePlus} from "react-icons/lu";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getPlayersOfGame} from "../../services/apiService.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";

export function ParticipantsSection({gameId}) {
    const [participants, setParticipants] = useState([]);

    const {data} = useQuery({
        queryKey: ["participants"],
        queryFn: () =>  getPlayersOfGame(gameId),
    })

    useEffect(() => {
        if (data) {
            setParticipants(data);
        }
    }, [data]);


    return (
        <ParticipantsWrapper>
            <SectionTitle title={"Jogadores"} subtitle={"Adicionar jogador"} subtitleTo={`/game/${gameId}/player`}/>
            <ParticipantsList>
                {participants.map((participant) => (
                    <ParticipantItem key={participant.playerId}>
                        <InfoContainer>
                            {participant.paymentSituation === "PAY" ? (
                                <LuCircleMinus color="var(--red-color)" />
                            ) : (
                                <LuCirclePlus color="var(--green-color)" />
                            )}
                            <InfoWrapper $paymentSituation={participant.paymentSituation}>
                                <h3>{participant.playerName}</h3>
                                <p>Saldo: <span>{formatNumberToBRL(participant.balance)}</span></p>
                            </InfoWrapper>
                        </InfoContainer>

                        <FaAngleRight opacity={0.2}/>
                    </ParticipantItem>
                ))}

            </ParticipantsList>
        </ParticipantsWrapper>
    )
}
