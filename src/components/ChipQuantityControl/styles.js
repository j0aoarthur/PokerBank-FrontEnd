import styled from "styled-components";

export const QuantityInputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--primary-color-dark);
`;

export const QuantityButton = styled.button.attrs({
    onMouseDown: (e) => e.preventDefault()
})`
    font-size: var(--text-xl);
    font-weight: var(--font-normal);
    height: calc(2 * var(--space-4)); 
    width: calc(2 * var(--space-4));  
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--rounded-full);
    background-color: var(--primary-color-dark);
    color: var(--white-color); 
    border: none;
    cursor: pointer;
    transition: background-color 0.15s, color 0.15s;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        background-color: var(--secondary-color-gray);
    }
    &:active {
        background-color: var(--black-color);
    }
`;

export const QuantityInput = styled.input`
    width: calc(16 * var(--space-unit)); 
    border-radius: var(--rounded-lg);
    border: 1px solid var(--panel-border-color);
    background-color: var(--background-color);
    padding: var(--space-2);
    text-align: center;
    color: var(--primary-color-dark);
    appearance: textfield;
    font-size: var(--text-base);
    font-weight: var(--font-normal);
    
    
    &:focus {
        outline: none;
        border: 1px solid var(--primary-color-dark);
    }
    
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
    }
`;