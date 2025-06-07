import styled from "styled-components";

export const ChipsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(0.75 * var(--space-4)); 
`

export const ChipSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
    background-color: var(--panel-background-color);
    padding: var(--space-4);
    border-radius: var(--rounded-lg);
    box-shadow: var(--shadow-default);
`

export const ChipInfo = styled.div`
  display: flex;
  align-items: center;
  gap: calc(0.75 * var(--space-4)); 
`;

export const ChipColorIndicator = styled.div`
  width: calc(0.75 * var(--space-4)); 
  height: calc(2 * var(--space-4));   
  border-radius: var(--rounded-full);
  background-color: ${props => props.color || 'var(--dark-text-primary)'};
`;

export const ChipName = styled.p`
  color: var(--primary-color-dark);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
`;

export const ChipValue = styled.p`
  color: var(--secondary-color-gray);
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
`;