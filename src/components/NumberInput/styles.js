import styled from "styled-components";

export const NumberInputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const CircleButton = styled.button.attrs({
    onMouseDown: (e) => e.preventDefault()
})`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background-color: var(--white-color);
    color: var(--text-black-color);
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;

    /* Prevent text selection for rapid clicks */
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    
    &:active {
        filter: brightness(0.8);
    }
    
`;

export const NumberDisplay = styled.input`
    width: 40px;
    text-align: center;
    font-size: 18px;
    border-radius: 8px;
    background: none;
    border: none;

    &:focus {
        outline: none;
    }
`;