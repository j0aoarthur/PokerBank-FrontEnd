import styled from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    width: 100%;
    margin-bottom: var(--space-8);
`

export const SectionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const SectionTitle = styled.h3`
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--primary-color-dark);
`

export const SectionSubtitle = styled.a`
    font-size: var(--text-sm);
    color: var(--secondary-color-gray);
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`