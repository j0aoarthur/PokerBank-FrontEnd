import styled from "styled-components";

export const AppHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--white-color);
    box-shadow: var(--shadow-sm);
    margin: var(--remove-margin);
    align-self: stretch;
    border-bottom: 1px solid var(--panel-border-color, #e8edf2);
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4);
`;

export const HeaderButton = styled.button`
    color: var(--primary-color-dark); // Tailwind: text-[#2D3748]
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-1);
  
    &:hover {
        opacity: 0.8;
    }
`;

export const HeaderTitle = styled.h2`
  flex: 1;
  text-align: center;
  font-size: var(--text-xl); // Tailwind: text-xl
  font-weight: var(--font-semibold); // Tailwind: font-semibold
  color: var(--primary-color-dark); // Tailwind: text-[#2D3748]
`;