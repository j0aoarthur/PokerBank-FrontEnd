import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 calc(-1 * var(--space-4)) 0;
    padding: var(--space-4) var(--space-6); 
`;

export const LogoImage = styled.img`
  height: calc(3 * var(--space-4)); 
  width: auto;
`;

export const PageTitle = styled.h1`
  font-size: var(--text-2xl); 
  font-weight: var(--font-bold); 
  color: var(--primary-color-dark); 
`;

export const SettingsButton = styled.button`
  color: var(--primary-color-dark); 
  padding: var(--space-2); 
  border-radius: var(--rounded-full); 
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--panel-background-color); 
  }
`;