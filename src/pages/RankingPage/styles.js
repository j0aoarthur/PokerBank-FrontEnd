import styled from "styled-components";

export const FullRankingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    gap: 25px;
`;

export const MainContent = styled.main`
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    align-self: stretch;
    flex-direction: column;
    gap: var(--space-4);
`;

export const TopRankingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
`;

export const RankCard = styled.div`
    background-color: var(--panel-background-color);
    border-radius: var(--rounded-md);
    border: 1px solid var(--panel-border-color);
    padding: var(--space-3);
`;

export const RankCardHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--space-1);
`;

export const RankPositionText = styled.span`
    font-size: var(--text-lg);
    font-weight: var(--font-bold);
    color: var(--primary-color-dark);
    margin-right: var(--space-1);
`;

export const MedalIcon = styled.span`
    font-size: var(--text-2xl);
    display: flex;
    align-items: center;
    color: ${props => props.color || 'var(--primary-color-dark)'};
`;

export const PlayerName = styled.p`
    font-size: var(--text-base);
    font-weight: var(--font-bold);
    color: var(--primary-color-dark);
    margin-bottom: var(--space-1);
`;

export const PlayerStatsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StatItem = styled.div`
    text-align: ${props => props.$alignRight ? 'right' : 'left'};
`;

export const StatLabel = styled.p`
    font-size: var(--text-xs);
    color: var(--secondary-color-gray);
`;

export const StatValue = styled.p`
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    color: var(--primary-color-dark);
`;

export const ListRankingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white-color);
`;

export const ListItemRank = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-3) var(--space-2);
    border-bottom: 1px solid var(--panel-border-color);
    &:last-child {
        border-bottom: none;
    }
`;

export const RankNumberText = styled.span`
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    color: var(--secondary-color-gray);
    width: var(--space-8); 
    text-align: center;
    flex-shrink: 0;
    padding-top: var(--space-1);
`;

export const ListItemPlayerName = styled.p`
    color: var(--primary-color-dark);
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    line-height: var(--leading-normal);
`;

export const ListItemWinnings = styled.p`
    color: ${props => props.$color ? 'var(--primary-color-dark)' : 'var(--accent-red-color)'};
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    line-height: var(--leading-normal);
    width: calc(4 * var(--space-6));
    text-align: right;
    flex-shrink: 0;
    padding-top: var(--space-1);
`;

export const PlayerInfoGroup = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const GamesPlayedText = styled.p`
    font-size: var(--text-xs);
    line-height: var(--leading-normal);
    
    .label {
        color: var(--secondary-color-gray);
    }
    .value {
        color: var(--primary-color-dark);
        font-weight: var(--font-semibold);
    }
`;