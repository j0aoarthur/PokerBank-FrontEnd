import styled from "styled-components";

export const GameDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    & > h2 {
        color: var(--text-black-color);
        text-align: center;
        font-size: 20px;
        font-weight: 700;
    }
`

export const InfoList = styled.div`
    display: flex;
    align-self: stretch;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    row-gap: 15px;
    flex-wrap: wrap;
`

export const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3px;
    
    & > p {
        color: var(--text-light-gray-color);
        font-size: 9px;
        font-weight: 600;
    }
    
    & > h3 {
        color: var(--text-black-color);
        font-size: 12px;
        font-weight: 600;
    }
`