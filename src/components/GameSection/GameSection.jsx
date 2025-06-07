import {CardItem, ItemList, ItemTextMain, ItemTextSecondary} from "./styles.js";
import {useQuery} from "@tanstack/react-query";
import {getLatestGames} from "../../services/apiService.js";
import React, {useEffect, useState} from "react";
import {getDayOfWeek, getLongDate} from "../../utils/dateUtils.js";
import {useNavigate} from "react-router-dom";
import {Section} from "../Section/Section.jsx";
import {MdChevronRight} from "react-icons/md";

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
        <Section title={"Últimas partidas"} subtitle={"Ver todas"} subtitleTo={"/games"}>
            <ItemList>
                {games.map(game => (
                    <CardItem key={game.id} onClick={() => navigate(`/game/${game.id}/`)}>
                        <div>
                            <ItemTextMain>{getDayOfWeek(game.date)}</ItemTextMain>
                            <ItemTextSecondary>{getLongDate(game.date)}</ItemTextSecondary>
                        </div>
                        <MdChevronRight />
                    </CardItem>
                ))}
            </ItemList>
        </Section>
    )
}

