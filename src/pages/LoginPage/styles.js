// src/pages/LoginPage/styles.js
import styled from 'styled-components';

export const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
    align-self: stretch;
    width: 100%;
    min-height: 100vh;
`;

export const LoginSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
    width: 100%;
    max-width: 400px; /* Limit form width for better readability */
    padding: 25px;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    border-radius: 15px;
    
    & > label {
        font-size: 14px;
        color: var(--text-light-gray-color);
        font-weight: bold;
        
    }
`;