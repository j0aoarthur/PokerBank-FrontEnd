import styled from "styled-components";

export const MakePaymentPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    align-self: stretch;
    width: 100%;
`;

export const MainContent = styled.div`
    flex-grow: 1;
    align-self: stretch;
`;

export const PageTitle = styled.h1`
    color: var(--primary-color-dark);
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    flex: 1;
`;

export const PageSubtitle = styled.h2`
    color: var(--secondary-color-gray);
    font-size: var(--text-lg);
    font-weight: var(--font-medium);
    margin-bottom: var(--space-6);
`;

export const PaymentCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-4); 
`;

export const PaymentCard = styled.div`
    background-color: var(--panel-background-color, #F7F9FC);
    border-radius: var(--rounded-xl);
    padding: var(--space-4);
    border: 1px solid var(--panel-border-color, #E8EDF2);
`;

export const PaymentCardInfo = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: flex-start; 
    margin-bottom: var(--space-2);
    
    p {
        color: var(--primary-color-dark);
        font-size: var(--text-sm);
        line-height: 1.5;
    span {
        font-weight: var(--font-semibold);
    }
    }
`;

export const PaymentCardActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AmountText = styled.p`
    color: var(--primary-color-dark);
    font-size: var(--text-base);
    
    span {
        font-weight: var(--font-bold);
        font-size: var(--text-lg);
    }
`;

export const PayButton = styled.button`
    background-color: var(--primary-color-dark);
    color: var(--white-color);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    padding: var(--space-2) var(--space-6);
    border-radius: var(--rounded-full);
    border: none;
    cursor: pointer;
    transition: opacity 0.15s;
    
    &:hover {
        opacity: 0.9;
    }
`;

export const StickyFooter = styled.div`
    position: sticky;
    bottom: 0;
    padding: var(--space-5) var(--space-2);
    display: flex;
    align-self: stretch;    
    flex-direction: column;
`;

export const FullWidthButton = styled.button`
    background-color: var(--primary-color-dark);
    color: var(--white-color);
    font-size: var(--text-base);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: var(--rounded-xl);
    min-height: calc(12 * var(--space-unit));
    padding: 0 var(--space-5);
    font-weight: var(--font-bold);
    letter-spacing: 0.015em;
    transition: background-color 0.15s, border-color 0.15s, opacity 0.15s;

    &:hover {
        opacity: 0.9;
    }
`;