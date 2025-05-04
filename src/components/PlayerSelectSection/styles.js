import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-self: stretch;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    
    & > label {
        color: var(--text-black-color);
        font-size: 14px;
        font-weight: 500;
        
        & > span {
            color: var(--red-color);
        }
    }
`