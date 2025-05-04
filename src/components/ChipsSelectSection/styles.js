import styled from "styled-components";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    
    & > h2 {
        color: var(--text-black-color);
        text-align: center;
        font-size: 20px;
        font-weight: 600;
    }
`

export const ChipsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
`

export const ChipSelect = styled.div`
    display: flex;
    width: 130px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    & > h3 {
        color: var(--text-black-color);
        text-align: center;

        font-size: 14px;
        font-weight: 500;
    }
`