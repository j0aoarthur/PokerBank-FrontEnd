import styled from "styled-components";

export const WelcomeMessage = styled.h2`
  font-size: calc(0.85 * var(--text-3xl)); 
  font-weight: var(--font-bold); 
  color: var(--primary-color-dark); 
  margin-bottom: var(--space-4); 
`;

export const ActionButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); 
  gap: var(--space-4); 
  margin-bottom: var(--space-8); 
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2); 
  height: calc(3 * var(--space-4)); 
  padding: 0 var(--space-4); 
  background-color: var(--primary-color-dark); 
  color: var(--white-color); 
  font-size:calc(0.9 * var(--text-base));
  font-weight: var(--font-bold); 
  border-radius: var(--rounded-lg); 
  box-shadow: var(--shadow-md-custom); 
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(45, 55, 72, 0.9); 
  }

  .material-icons, svg {
    font-size: var(--text-2xl); 
  }
`;