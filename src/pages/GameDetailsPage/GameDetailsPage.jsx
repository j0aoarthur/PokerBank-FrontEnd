import {Header} from "../../components/Header/Header.jsx";
import {Title} from "../../components/Title/Title.jsx";
import {formatDate, getDayOfWeek} from "../../utils/dateUtils.js";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getGameDetails} from "../../services/apiService.js";
import {useParams} from "react-router-dom";
import {GameDetailsPageWrapper} from "./styles.js";
import {ParticipantsSection} from "../../components/ParticipantsSection/ParticipantsSection.jsx";
import {GameDetailsSection} from "../../components/GameDetailsSection/GameDetailsSection.jsx";
import {useTitle} from "../../utils/useTitle.js";
import {BottomBar} from "../../components/BottomBar/BottomBar.jsx";

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
                <Header/>
                <Title text="Partida" subtitle={`Dia ${formatDate(game.date)} (${getDayOfWeek(game.date)})`}/>
                <GameDetailsSection game={game}/>
                <ParticipantsSection gameId={gameId}/>
                <BottomBar/>
            </GameDetailsPageWrapper>
        )
    )
}
