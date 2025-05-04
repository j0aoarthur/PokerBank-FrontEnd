import styled from "styled-components";

export const GameSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`

export const GameList = styled.div`
    display: flex;
    max-height: 200px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
`

export const GameItem = styled.div`
    display: flex;
    padding: 15px 18px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background: var(--white-color);
    border-radius: 15px;
    
    &:active {
        filter: brightness(0.9);
    }
`

export const GameItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 6px;
    
    & > h3 {
        color: var(--text-black-color);
        leading-trim: both;
        text-edge: cap;
        font-size: 16px;
        font-weight: 600;
    }
    
    & > p {
        color: var(--text-light-gray-color);
        leading-trim: both;
        text-edge: cap;
        font-size: 11px;
        font-weight: 400;
    }
`