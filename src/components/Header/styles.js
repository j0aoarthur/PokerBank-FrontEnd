import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const HeaderLogo = styled.img`
    width: 120px
`

export const HeaderProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 5px;
    align-self: stretch;
    
    & > h5 {
        color: var(--text-gray-color);
        text-align: center;
        leading-trim: both;
        text-edge: cap;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
    }
    
    & > h2 {
        color: var(--text-black-color);
        text-align: center;
        leading-trim: both;
        text-edge: cap;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
    }
`