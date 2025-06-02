import styled from "styled-components";

export const MakePaymentPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    align-self: stretch;
    width: 100%;
    padding-bottom: 80px; /* Adjusted for NavigationBar */
`;

export const PaymentsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    background-color: var(--white-color);
    border-radius: 15px;
    align-self: stretch;
    box-shadow: 0 2px 4px var(--shadow-color);
    margin-top: 10px; /* Added some margin from PageTitle */
`;

export const PaymentListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    border-radius: 8px;
    background-color: var(--background-color);
    box-shadow: 0 1px 2px var(--light-gray-color);
`;

export const SuggestionInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-grow: 1;
    margin-right: 10px; /* Space before the button */

    & > span {
        font-size: 14px;
        color: var(--text-black-color);

        & .label {
            font-weight: 500;
            color: var(--text-gray-color);
        }

        & .name {
            font-weight: 600;
        }
        
        & .amount {
            font-weight: 700;
            color: var(--green-color);
        }
    }
`;

export const NoSuggestionsMessage = styled.p`
    text-align: center;
    color: var(--text-gray-color);
    margin-top: 20px;
    font-size: 16px;
`;