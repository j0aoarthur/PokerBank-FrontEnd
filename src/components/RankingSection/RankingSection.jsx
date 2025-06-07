import {
    CardItem,
    ItemTextMain,
    ItemTextSecondary,
    PlayerInfo,
    PlayerNetBalance,
    PlayerPosition,
    PlayerRankingList
} from "./styles.js";
import React, {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getTopRanking} from "../../services/apiService.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import {Section} from "../Section/Section.jsx";
import {MdEmojiEvents} from "react-icons/md";

export function PlayerRankingItem({ player }) {
    const getMedal = (position) => {
        if (position === 1) return "#FFD700";
        if (position === 2) return "#C0C0C0";
        if (position === 3) return "#CD7F32";
    };

    return (
        <CardItem key={player.playerId}>
            <PlayerInfo>
                <PlayerPosition>
                    {player.rank <= 3 ? (
                        <MdEmojiEvents color={getMedal(player.rank)} />
                    ) : (
                        <h3>{player.rank}º</h3>
                    )}


                </PlayerPosition>
                <div>
                    <ItemTextMain>{player.playerName}</ItemTextMain>
                    <ItemTextSecondary>Partidas jogadas: {player.gamesPlayed}</ItemTextSecondary>
                </div>
            </PlayerInfo>
            <PlayerNetBalance $color={player.netBalance >= 0}>
                {formatNumberToBRL(player.netBalance)}
            </PlayerNetBalance>
        </CardItem>
    )
}

export function RankingSection() {
    const [ranking, setRanking] = useState([]);

    const {data} = useQuery({
        queryKey: ["TopRanking"],
        queryFn: () =>  getTopRanking(),
    })

    useEffect(() => {
        if (data) {
            setRanking(data);
        }
    }, [data]);

    return (
        <Section title={"Ranking"} subtitle={"Ver todos"} subtitleTo={"/ranking"}>
            <PlayerRankingList>
                {ranking.map((player, index) => (
                    <PlayerRankingItem key={index} player={player} position={index + 1} />
                ))}
            </PlayerRankingList>
        </Section>
    );
}

// <ItemList>
//     {ranking.map((player, index) => (
//         <CardItem key={index} onClick={() => window.location.href = player.href}>
//             <RankingPlayerInfo>
//                 <RankNumber $isTop={(index + 1) === 1}>{index + 1}.</RankNumber>
//                 <div>
//                     <ItemTextMain>{player.name}</ItemTextMain>
//                     <ItemTextSecondary>{player.points}</ItemTextSecondary>
//                 </div>
//             </RankingPlayerInfo>
//             <MdChevronRight />
//         </CardItem>
//     ))}
// </ItemList>