import styled from "styled-components";

export const PaymentSuggestionItemCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  background-color: var(--panel-background-color); 
  padding: var(--space-4); 
  border-radius: var(--rounded-lg); 
  border: 1px solid var(--panel-border-color); 
`;

export const PaymentSuggestionInfo = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-3);  
    svg { 
        color: var(--secondary-color-gray); 
        font-size: var(--text-2xl-icon); 
    }
`;

export const PaymentText = styled.p`
  font-size: var(--text-sm); 
  font-weight: var(--font-medium); 
  color: var(--primary-color-dark); 

  span { 
    font-weight: var(--font-semibold); 
  }
`;

export const PaymentAmount = styled.p`
  font-size: var(--text-base); 
  font-weight: var(--font-semibold); 
  color: var(--primary-color-dark);
`;

export const PaymentArrow = styled.span`
  margin: 0 4px;
  font-weight: bold;
`;