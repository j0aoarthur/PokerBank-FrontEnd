import styled from "styled-components";

export const PlayerRankingList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: calc(0.75 * var(--space-4));
`

export const CardItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--panel-background-color); 
    padding: var(--space-3); 
    border-radius: var(--rounded-lg); 
    border: 1px solid var(--panel-border-color); 
    box-shadow: var(--shadow-md-custom); 
    width: 100%;
`

export const PlayerInfo = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-3);
`

export const PlayerPosition = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    
    & > svg {
        font-size: var(--text-2xl-icon);
    }
    
    & > h3 {
        color: var(--text-light-gray-color);
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
    }
`

export const PlayerNetBalance = styled.p`
    font-size: var(--text-sm);
    font-weight: var(--font-bold);
    color: ${props => props.$color ? 'var(--accent-green-color)' : 'var(--accent-red-color)'};
`

export const ItemTextMain = styled.p`
    color: var(--primary-color-dark); 
    font-weight: var(--font-medium);
`;

export const ItemTextSecondary = styled.p`
    font-size: var(--text-xs);
    color: var(--secondary-color-gray);
    
`