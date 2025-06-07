import styled from "styled-components";

export const NewPlayerPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
`;

export const ActionButtonsContainer = styled.div`
  align-self: stretch;
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: var(--space-3); 
    padding: var(--space-4) 0; 
`;

const BaseActionButton = styled.button`
  flex: 1;
  width: 100%;
  min-width: 84px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: var(--rounded-lg); 
  min-height: calc(10 * var(--space-unit)); 
  padding: 0 var(--space-5); 
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  line-height: var(--leading-normal);
  letter-spacing: 0.015em; 
  transition: background-color 0.15s, border-color 0.15s, opacity 0.15s;
  box-sizing: border-box;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const PrimaryButton = styled(BaseActionButton)`
  background-color: var(--primary-color-dark); 
  color: var(--white-color); 
  border: 1px solid var(--primary-color-dark); 

  &:hover {
    opacity: 0.9; 
  }
`;

export const SecondaryButton = styled(BaseActionButton)`
  background-color: var(--panel-background-color); 
  color: var(--primary-color-dark); 
  border: 1px solid var(--panel-border-color); 

  &:hover {
    background-color: var(--panel-border-color);
  }
`;