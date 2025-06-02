// src/components/PaymentSuggestionSection/styles.js
import styled from "styled-components";

export const PaymentSuggestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
`

export const PaymentSuggestionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    background-color: var(--white-color);
    border-radius: 15px;
`;

export const PaymentSuggestionItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--background-color);
`;

export const SuggestionText = styled.p`
    font-size: 14px;
    color: var(--text-black-color);
    display: flex;
    align-items: center;
    text-align: center;
    gap: 0.3em;

    span.amount {
        font-weight: 600;
        color: var(--green-color);
    }
`;

export const PayerReceiverName = styled.strong`
  font-weight: 600;
`;

export const PaymentArrow = styled.span`
  margin: 0 4px;
  font-weight: bold;
`;