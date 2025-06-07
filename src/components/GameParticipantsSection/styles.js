import styled from "styled-components";

export const PlayerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(0.75 * var(--space-4));
`;

export const PlayerItemCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4); 
    background-color: var(--panel-background-color); 
    padding: var(--space-3); 
    border-radius: var(--rounded-lg); 
    border: 1px solid var(--panel-border-color); 
    transition: background-color 0.2s ease-in-out; 
    cursor: pointer;

    &:hover {
        background-color: var(--panel-border-color); 
    }
`;

export const PlayerInfo = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-3); 
`;

export const PlayerDetails = styled.div`
    p:first-child { 
        font-size: var(--text-base); 
        font-weight: var(--font-medium); 
        color: var(--primary-color-dark); 
    }
    p:last-child { 
        font-size: calc(0.75 * var(--text-sm));
        color: ${props => props.$paid ?  'var(--secondary-color-gray)' : 'var(--accent-red-color)'};
    }
`;

export const PlayerBalance = styled.p`
  font-size: var(--text-base); 
  font-weight: var(--font-semibold);
  color: ${({ $paymentSituation }) => ($paymentSituation === "PAY" ? 'var(--accent-red-color)' : 'var(--accent-green-color)')};
`;