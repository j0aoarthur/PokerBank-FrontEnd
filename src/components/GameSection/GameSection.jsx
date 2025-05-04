import {SectionTitle} from "../SectionTitle/SectionTitle.jsx";
import {FaAngleRight} from "react-icons/fa6";
import {GameItem, GameItemInfo, GameList, GameSectionContainer} from "./styles.js";
import {useQuery} from "@tanstack/react-query";
import {getLatestGames} from "../../services/apiService.js";
import {useEffect, useState} from "react";
import {formatDate, getDayOfWeek} from "../../utils/dateUtils.js";
import {useNavigate} from "react-router-dom";

export function GameSection() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    const {data} = useQuery({
        queryKey: ["games"],
        queryFn: () =>  getLatestGames(),
    })

    useEffect(() => {
        if (data) {
            setGames(data);
        }
    }, [data]);




    return (
        <GameSectionContainer>
            <SectionTitle title={"Últimas partidas"} subtitle={"Ver todas"}/>
            <GameList>
                {games.map((game) => (
                    <GameItem key={game.id} onClick={() => navigate(`/game/${game.id}`)} >
                        <GameItemInfo>
                            <h3>{getDayOfWeek(game.date)}</h3>
                            <p>{formatDate(game.date)}</p>
                        </GameItemInfo>
                        <FaAngleRight opacity={0.2}/>
                    </GameItem>
                ))}

            </GameList>
        </GameSectionContainer>
    )
}
