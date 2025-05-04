import {
    RankingInfo,
    RankingItem,
    RankingList,
    RankingNumber,
    RankingText,
    RankingValue,
    RankingWrapper
} from "./styles.js";
import Medal1 from "../../assets/images/Medal1.png";
import Medal2 from "../../assets/images/Medal2.png";
import Medal3 from "../../assets/images/Medal3.png";
import {SectionTitle} from "../SectionTitle/SectionTitle.jsx";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getTopRanking} from "../../services/apiService.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";

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

    const getMedal = (position) => {
        if (position === 1) return <img src={Medal1} alt={"medal"}/>;
        if (position === 2) return <img src={Medal2} alt={"medal"}/>;
        if (position === 3) return <img src={Medal3} alt={"medal"}/>;
        return <h3>{position}º</h3>;
    };

    return (
        <RankingWrapper>
            <SectionTitle title={"Ranking"} subtitle={"Ver todos"} subtitleTo={"/ranking"}/>
            <RankingList>
                {ranking.map((player, index) => (
                    <RankingItem key={player.playerId}>
                        <RankingInfo>
                            <RankingNumber>
                                {getMedal(index + 1)}
                            </RankingNumber>
                            <RankingText>
                                <h3>{player.playerName}</h3>
                                <p>Partidas jogadas: {player.gamesPlayed}</p>
                            </RankingText>
                        </RankingInfo>
                        <RankingValue style={{ color: player.netBalance >= 0 ? "var(--green-color)" : "var(--red-color)" }}>
                            {formatNumberToBRL(player.netBalance)}
                        </RankingValue>
                    </RankingItem>
                ))}
            </RankingList>
        </RankingWrapper>
    );
}