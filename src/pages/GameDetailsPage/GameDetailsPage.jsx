import React, {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getGameDetails} from "../../services/apiService.js";
import {useParams} from "react-router-dom";
import {GameDate, GameName, GameTitleSummary, PageWrapper} from "./styles.js";
import {GameParticipantsSection} from "../../components/GameParticipantsSection/GameParticipantsSection.jsx";
import {GameDetailsSection} from "../../components/GameDetailsSection/GameDetailsSection.jsx";
import {useTitle} from "../../utils/useTitle.js";
import {PaymentSuggestionSection} from "../../components/PaymentSuggestionSection/PaymentSuggestionSection.jsx";
import {PageHeader} from "../../components/PageHeader/PageHeader.jsx";
import {formatFullDate} from "../../utils/dateUtils.js";

export function GameDetailsPage({title}) {
    useTitle(title)
    const { gameId } = useParams();
    const [game, setGame] = useState();

    const {data} = useQuery({
        queryKey: ["game"],
        queryFn: () =>  getGameDetails(gameId),
    })

    useEffect(() => {
        if (data) {
            setGame(data);
        }
    }, [data]);

    return (
        game && (
            <PageWrapper>
                <PageHeader title="Detalhes da Partida" />
                <main>
                    <GameTitleSummary>
                        <GameName>Partida</GameName>
                        <GameDate>{formatFullDate(game.date)}</GameDate>
                    </GameTitleSummary>
                    <GameDetailsSection game={game}/>
                    <GameParticipantsSection gameId={gameId}/>
                    <PaymentSuggestionSection gameId={gameId}/>
                </main>
            </PageWrapper>
        )
    )
}
