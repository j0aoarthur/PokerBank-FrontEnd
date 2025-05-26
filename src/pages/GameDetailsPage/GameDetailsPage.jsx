import {MainHeader} from "../../components/MainHeader/MainHeader.jsx";
import {PageTitle} from "../../components/PageTitle/PageTitle.jsx";
import {formatDate, getDayOfWeek} from "../../utils/dateUtils.js";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getGameDetails} from "../../services/apiService.js";
import {useParams} from "react-router-dom";
import {GameDetailsPageWrapper} from "./styles.js";
import {GameParticipantsSection} from "../../components/GameParticipantsSection/GameParticipantsSection.jsx";
import {GameDetailsSection} from "../../components/GameDetailsSection/GameDetailsSection.jsx";
import {useTitle} from "../../utils/useTitle.js";
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.jsx";
import {PaymentSuggestionSection} from "../../components/PaymentSuggestionSection/PaymentSuggestionSection.jsx";

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
            <GameDetailsPageWrapper>
                <MainHeader/>
                <PageTitle text="Partida" subtitle={`Dia ${formatDate(game.date)} (${getDayOfWeek(game.date)})`}/>
                <GameDetailsSection game={game}/>
                <GameParticipantsSection gameId={gameId}/>
                <PaymentSuggestionSection gameId={gameId}/>
                <NavigationBar/>
            </GameDetailsPageWrapper>
        )
    )
}
