import styled from "styled-components";

export const InfoList = styled.div`
  background-color: var(--panel-background-color); // Tailwind: bg-[#F7F9FC]
  border-radius: var(--rounded-lg); // Tailwind: rounded-lg
  padding: var(--space-4); // Tailwind: p-4
  border: 1px solid var(--panel-border-color); // Tailwind: border border-[#E8EDF2]
  display: flex;
  flex-direction: column;
  gap: var(--space-4); // Approximating space-y-4. Tailwind's space-y applies margin.
                      // Using gap is more modern for flex/grid.
                      // If direct child margins are needed: & > * + * { margin-top: var(--space-4); }
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--space-2); // Tailwind: py-2 (part of it, only bottom for border)
  border-bottom: 1px solid var(--panel-border-color); // Tailwind: border-b border-b-[#E8EDF2]

  &:last-child {
    border-bottom: none;
    padding-bottom: 0; // Tailwind: pt-2 for last item implies no pb
  }
  
  p:first-child { // Text for label
    font-size: var(--text-sm); // Tailwind: text-sm
    color: var(--secondary-color-gray); // Tailwind: text-[#5A6A7B]
  }
  
  p:last-child { // Text for value
    font-size: var(--text-sm); // Tailwind: text-sm
    color: var(--primary-color-dark); // Tailwind: text-[#2D3748]
  }
`;

export const InfoItemWideValue = styled(InfoItem)`
  align-items: flex-start; // For notes section
   p:last-child {
    text-align: right; // Tailwind: text-right
  }
`;


export const StatusBadge = styled.span`
    display: inline-flex;
    align-items: center;
    padding: var(--space-0-5) var(--space-3); // Tailwind: px-3 py-0.5
    border-radius: var(--rounded-full); // Tailwind: rounded-full
    font-size: var(--text-xs); // Tailwind: text-xs
    font-weight: var(--font-medium); // Tailwind: font-medium
    color: var(--white-color); // Tailwind: text-white
    background-color: ${({ $status }) => {
        switch ($status) {
            case 'finished':
                return 'var(--secondary-color-gray, #6c757d)'; // Cor cinza, fallback se a variável não estiver definida
            case 'overdue':
                return 'var(--accent-red-color, #dc3545)';    // Cor vermelha, fallback
            case 'inProgress':
            default:
                return 'var(--accent-green-color, #28a745)'; // Cor verde, fallback
        }
    }};
`;

export const ValueText = styled.p`
  font-size: var(--text-sm);
  color: var(--primary-color-dark);
  ${props => props.$positive && `color: var(--accent-green-color); font-weight: var(--font-semibold);`}
  ${props => props.$negative && `color: var(--accent-red-color); font-weight: var(--font-semibold);`}
`;