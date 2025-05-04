import styled from "styled-components";

export const ParticipantsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    & > h2 {
        color: var(--text-black-color);
        text-align: center;
        font-size: 20px;
        font-weight: 700;
    }
`

export const ParticipantsList = styled.div`
    display: flex;
    align-self: stretch;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const ParticipantItem = styled.div`
    display: flex;
    padding: 15px 18px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    border-radius: 10px;
    background: var(--white-color);
    box-shadow: 2px 2px 5px -1px var(--shadow-color);
`

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`


export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
    
    & > h3 {
        color: var(--text-black-color);
        font-size: 14px;
        font-weight: 700;
    }
    
    & > p {
        color: var(--text-gray-color);
        font-size: 12px;
        font-weight: 500;

        & > span {
            color: ${({ $paymentSituation }) => ($paymentSituation === "PAY" ? "red" : "green")};
        }
    }
`