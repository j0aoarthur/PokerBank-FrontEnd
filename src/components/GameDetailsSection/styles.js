import styled from "styled-components";

export const InfoList = styled.div`
  background-color: var(--panel-background-color); 
  border-radius: var(--rounded-lg); 
  padding: var(--space-4); 
  border: 1px solid var(--panel-border-color); 
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--panel-border-color);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  p:first-child { 
    font-size: var(--text-sm); 
    color: var(--secondary-color-gray); 
  }
  
  p:last-child { 
    font-size: var(--text-sm); 
    color: var(--primary-color-dark); 
  }
`;

export const InfoItemWideValue = styled(InfoItem)`
  align-items: flex-start; 
   p:last-child {
    text-align: right; 
  }
`;


export const StatusBadge = styled.span`
    display: inline-flex;
    align-items: center;
    padding: var(--space-0-5) var(--space-3); 
    border-radius: var(--rounded-full); 
    font-size: var(--text-xs); 
    font-weight: var(--font-medium); 
    color: var(--white-color); 
    background-color: ${({ $status }) => {
        switch ($status) {
            case 'finished':
                return 'var(--secondary-color-gray, #6c757d)'; 
            case 'overdue':
                return 'var(--accent-red-color, #dc3545)';    
            case 'inProgress':
            default:
                return 'var(--accent-green-color, #28a745)'; 
        }
    }};
`;

export const ValueText = styled.p`
  font-size: var(--text-sm);
  color: var(--primary-color-dark);
  ${props => props.$positive && `color: var(--accent-green-color); font-weight: var(--font-semibold);`}
  ${props => props.$negative && `color: var(--accent-red-color); font-weight: var(--font-semibold);`}
`;