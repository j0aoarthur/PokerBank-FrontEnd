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
    gap: var(--space-4); // Tailwind: gap-4
    background-color: var(--panel-background-color); // Tailwind: bg-[#F7F9FC]
    padding: var(--space-3); // Tailwind: p-3
    border-radius: var(--rounded-lg); // Tailwind: rounded-lg
    border: 1px solid var(--panel-border-color); // Tailwind: border border-[#E8EDF2]
    transition: background-color 0.2s ease-in-out; // Tailwind: transition-colors
    cursor: pointer;

    &:hover {
        background-color: var(--panel-border-color); // Tailwind: hover:bg-[#E8EDF2]
    }
`;

export const PlayerInfo = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-3); // Tailwind: gap-3
`;

export const PlayerDetails = styled.div`
    p:first-child { // Player Name
        font-size: var(--text-base); // Tailwind: text-base
        font-weight: var(--font-medium); // Tailwind: font-medium
        color: var(--primary-color-dark); // Tailwind: text-[#2D3748]
    }
    p:last-child { // Player Status (Paid/Unpaid)
        font-size: calc(0.75 * var(--text-sm));
        color: ${props => props.$paid ?  'var(--secondary-color-gray)' : 'var(--accent-red-color)'};
    }
`;

export const PlayerBalance = styled.p`
  font-size: var(--text-base); // Tailwind: text-base
  font-weight: var(--font-semibold); // Tailwind: font-semibold
  color: ${({ $paymentSituation }) => ($paymentSituation === "PAY" ? 'var(--accent-red-color)' : 'var(--accent-green-color)')};
`;