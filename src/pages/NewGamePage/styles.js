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

// Wrapper for the Ant Design DatePicker for consistent margin
export const DatePickerWrapper = styled.div`
    margin-bottom: var(--space-6);
    /* Antd DatePicker default height is ~32px for default size, ~40px for large.
       The previous custom input was h-14 (56px).
       If a specific height is crucial, it might require more specific antd overrides or sizing.
       For now, we use size="large" which is closer to common mobile tap targets.
    */
    .ant-picker {
        width: 100%;
        height: calc(14 * var(--space-unit)); /* Try to match h-14 from previous custom input: 56px */
        border-radius: var(--rounded-xl);
        border-color: var(--panel-border-color, #E2E8F0);
        background-color: var(--panel-background-color, #F7F9FC);
    }
    .ant-picker-input > input {
        color: var(--primary-color-dark);
        font-size: var(--text-base);
        &::placeholder {
            color: var(--secondary-color-gray, #A0AEC0);
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

    svg { // Changed from .material-icons... to svg for react-icons
        margin-right: var(--space-2);
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: var(--primary-color-dark);
    color: var(--white-color);
    font-size: ${props => props.$fontSize || 'var(--text-base)'};
    &:hover {
        background-color: var(--primary-button-hover-bg, #1A202C);
    }
`;

export const CreateGameButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-self: flex-end;
    align-content: flex-end;
    padding: var(--space-4) 0;
`;