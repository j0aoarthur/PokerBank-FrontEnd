import {useQuery} from "@tanstack/react-query";
import React from "react";
import {
    FullRankingPageContainer,
    GamesPlayedText,
    ListItemPlayerName,
    ListItemRank,
    ListItemWinnings,
    ListRankingsContainer,
    MainContent,
    MedalIcon,
    PlayerInfoGroup,
    PlayerName,
    PlayerStatsRow,
    RankCard,
    RankCardHeader,
    RankNumberText,
    RankPositionText,
    StatItem,
    StatLabel,
    StatValue,
    TopRankingsContainer
} from "./styles.js";
import {getRanking} from "../../services/apiService.js";
import {useTitle} from "../../utils/useTitle.js";
import {PageHeader} from "../../components/PageHeader/PageHeader.jsx";
import {MdEmojiEvents} from "react-icons/md";
import {formatNumberToBRL} from "../../utils/numberUtils.js";

export function RankingPage({title}) {
    useTitle(title);

    const {data: allPlayersRanking = [] } = useQuery({
        queryKey: ["fullRanking"],
        queryFn: () => getRanking(),
    });

    const getMedal = (position) => {
        if (position === 1) return "#FFD700";
        if (position === 2) return "#C0C0C0";
        if (position === 3) return "#CD7F32";
    };

    const top3Players = allPlayersRanking.slice(0, 3);
    const otherPlayers = allPlayersRanking.slice(3);


    return (
        <FullRankingPageContainer>
            <PageHeader title={"Ranking global"}/>
            <MainContent>
                <TopRankingsContainer>
                    {top3Players.map(player => (
                        <RankCard key={player.playerId}>
                            <RankCardHeader>
                                <RankPositionText>{player.rank}º</RankPositionText>
                                <MedalIcon color={getMedal(player.rank)}>
                                    <MdEmojiEvents />
                                </MedalIcon>
                            </RankCardHeader>
                            <PlayerName>{player.playerName}</PlayerName>
                            <PlayerStatsRow>
                                <StatItem>
                                    <StatLabel>Partidas Jogadas</StatLabel>
                                    <StatValue>{player.gamesPlayed}</StatValue>
                                </StatItem>
                                <StatItem $alignRight>
                                    <StatLabel>Saldo</StatLabel>
                                    <StatValue>{formatNumberToBRL(player.netBalance)}</StatValue>
                                </StatItem>
                            </PlayerStatsRow>
                        </RankCard>
                    ))}
                </TopRankingsContainer>

                <ListRankingsContainer>
                    {otherPlayers.map(player => (
                        <ListItemRank key={player.playerId}>
                            <RankNumberText>{player.rank}</RankNumberText>
                            <PlayerInfoGroup>
                                <ListItemPlayerName>{player.playerName}</ListItemPlayerName>
                                <GamesPlayedText>
                                    <span className="label">Partidas jogadas: </span>
                                    <span className="value">{player.gamesPlayed}</span>
                                </GamesPlayedText>
                            </PlayerInfoGroup>
                            <ListItemWinnings $color={player.netBalance >= 0}>{formatNumberToBRL(player.netBalance)}</ListItemWinnings>
                        </ListItemRank>
                    ))}
                </ListRankingsContainer>
            </MainContent>
        </FullRankingPageContainer>
    );
}