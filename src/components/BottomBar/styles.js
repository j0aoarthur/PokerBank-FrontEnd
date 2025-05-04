import styled from "styled-components";

export const BottomBarContainer = styled.div`
    display: flex;
    width: 85%;
    height: 49px;
    padding: 15px 25px;
    justify-content: space-between;
    align-items: center;
    align-self: center;

    position: fixed;
    bottom: 20px;

    border-radius: 20px;
    background: var(--black-color);
    box-shadow: 0 4px 4px 0 var(--shadow-color);
`;

export const IconWrapper = styled.div.attrs(() => ({}))`
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & > * {
        font-size: 25px;
        color: var(--text-white-color);
        cursor: pointer;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: white;
        opacity: ${({ $active }) => ($active ? 1 : 0)};
        transition: opacity 0.3s ease;
    }
`;

