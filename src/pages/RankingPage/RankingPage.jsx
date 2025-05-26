import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import Medal1 from "../../assets/images/medal1.png";
import Medal2 from "../../assets/images/medal2.png";
import Medal3 from "../../assets/images/medal3.png";
import {FullRankingPageContainer} from "./styles.js";
import {PageTitle} from "../../components/PageTitle/PageTitle.jsx";
import {getRanking} from "../../services/apiService.js";
import {useTitle} from "../../utils/useTitle.js";
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.jsx";
import {MainHeader} from "../../components/MainHeader/MainHeader.jsx";
import {
    PlayerDetails,
    PlayerInfo,
    PlayerNetBalance,
    PlayerPosition,
    PlayerRankingItem,
    PlayerRankingList
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
        <FullRankingPageContainer>
            <MainHeader/>
            <PageTitle text={"Ranking Completo"}/>
            <PlayerRankingList>
                {ranking.map((player, index) => (
                    <PlayerRankingItem key={player.playerId}>
                        <PlayerInfo>
                            <PlayerPosition>
                                {getMedal(index + 1)}
                            </PlayerPosition>
                            <PlayerDetails>
                                <h3>{player.playerName}</h3>
                                <p>Partidas jogadas: {player.gamesPlayed}</p>
                            </PlayerDetails>
                        </PlayerInfo>
                        <PlayerNetBalance style={{ color: player.netBalance >= 0 ? "var(--green-color)" : "var(--red-color)" }}>
                            {formatNumberToBRL(player.netBalance)}
                        </PlayerNetBalance>
                    </PlayerRankingItem>
                ))}
            </PlayerRankingList>
            <NavigationBar activePage={"ranking"}/>
        </FullRankingPageContainer>
    );
}