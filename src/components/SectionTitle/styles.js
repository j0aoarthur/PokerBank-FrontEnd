import styled from "styled-components";

export const SectionTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    & > h2 {
        color: var(--text-black-color);
        leading-trim: both;
        text-edge: cap;
        font-size: 18px;
        font-weight: 700;
    }

    & > h5 {
        color: var(--text-light-gray-color);
        leading-trim: both;
        text-edge: cap;
        font-size: 12px;
        font-weight: 400;
        
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`