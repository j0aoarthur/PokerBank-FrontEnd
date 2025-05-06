import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import Medal1 from "../../assets/images/medal1.png";
import Medal2 from "../../assets/images/medal2.png";
import Medal3 from "../../assets/images/medal3.png";
import {RankingPageContainer} from "./styles.js";
import {Title} from "../../components/Title/Title.jsx";
import {getRanking} from "../../services/apiService.js";
import {useTitle} from "../../utils/useTitle.js";
import {BottomBar} from "../../components/BottomBar/BottomBar.jsx";
import {Header} from "../../components/Header/Header.jsx";
import {
    RankingInfo,
    RankingItem,
    RankingList,
    RankingNumber,
    RankingText,
    RankingValue
} from "../../components/RankingSection/styles.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";

export function RankingPage({title}) {
    useTitle(title);
    const [ranking, setRanking] = useState([]);

    const {data} = useQuery({
        queryKey: ["fullRanking"],
        queryFn: () => getRanking(),
    });

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
        <RankingPageContainer>
            <Header/>
            <Title text={"Ranking Completo"}/>
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
            <BottomBar activePage={"ranking"}/>
        </RankingPageContainer>
    );
}