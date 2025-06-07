import styled from "styled-components";

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100dvh;
    padding: 0 var(--space-4) 0;
    
    & > :first-child {
        align-self: stretch;
        flex-grow: 1;
    }
`