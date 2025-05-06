import styled from "styled-components";

export const RankingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    width: 100%;
    
`
export const RankingSectionTitle = styled.div`
    
`
export const PlayerRankingList = styled.div`
    display: flex;
    padding: 10px 18px;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-self: stretch;

    border-radius: 15px;
    background: var(--white-color);
`

export const PlayerRankingItem = styled.div`
    display: flex;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

`

export const PlayerInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const PlayerPosition = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    
    & > img {
        width: 100%;
        height: 100%;
    }
    
    & > h3 {
        color: var(--text-light-gray-color);
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
    }
    
    
    
`

export const PlayerDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    
    & > h3 {
        color: var(--text-black-color);
        font-size: 14px;
        font-weight: 600;
    }
    
    & > p{
        color: var(--text-light-gray-color);
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
    }
`


export const PlayerNetBalance = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
`