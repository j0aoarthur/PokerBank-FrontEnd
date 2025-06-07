import styled from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
`

export const GameTitleSummary = styled.div`
  margin-bottom: var(--space-6);
`;

export const GameName = styled.h1`
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight); 
  letter-spacing: -0.025em;
  color: var(--primary-color-dark);
`;

export const GameDate = styled.p`
  font-size: var(--text-sm);
  color: var(--secondary-color-gray);
`;