import styled from "styled-components";

export const CreateGamePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

export const MainContent = styled.main`
    padding-top: var(--space-6);
    & > h1 {
        color: var(--primary-color-dark);
        font-size: var(--text-2xl);
        font-weight: var(--font-bold);
        line-height: var(--leading-tight);
        letter-spacing: -0.01em;
        text-align: left;
        margin-bottom: var(--space-6);
    }
`;

export const DatePickerWrapper = styled.div`
    margin-bottom: var(--space-6);
    
    .ant-picker {
        width: 100%;
        height: calc(14 * var(--space-unit));
        border-radius: var(--rounded-xl);
        border-color: var(--panel-border-color);
        background-color: var(--panel-background-color);
    }
    .ant-picker-input > input {
        color: var(--primary-color-dark);
        font-size: var(--text-base);
        &::placeholder {
            color: var(--secondary-color-gray);
        }
    }
    .ant-picker-focused {
        border-color: var(--primary-color-dark);
        box-shadow: 0 0 0 2px var(--primary-color-dark);
    }
`;

const BaseButton = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: var(--rounded-xl);
    height: ${props => props.$height || 'calc(12 * var(--space-unit))'};
    padding: 0 ${props => props.$px || 'var(--space-4)'};
    font-weight: ${props => props.$fontWeight || 'var(--font-semibold)'};
    line-height: var(--leading-normal);
    letter-spacing: 0.025em;
    transition: background-color 0.15s ease-in-out;
    border: none;
    cursor: pointer;

    svg { 
        margin-right: var(--space-2);
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: var(--primary-color-dark);
    color: var(--white-color);
    font-size: ${props => props.$fontSize || 'var(--text-base)'};
    &:hover {
        background-color: #1A202C;
    }
`;

export const CreateGameButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-self: flex-end;
    align-content: flex-end;
    padding: var(--space-4) 0;
`;