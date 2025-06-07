import styled from "styled-components";

export const WelcomeMessage = styled.h2`
  font-size: calc(0.85 * var(--text-3xl)); 
  font-weight: var(--font-bold); // font-bold
  color: var(--primary-color-dark); // text-[#2D3748]
  margin-bottom: var(--space-4); // mb-4
`;

export const ActionButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); // grid-cols-2
  gap: var(--space-4); // gap-4
  margin-bottom: var(--space-8); // Corresponds to section mb-8
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2); // gap-2
  height: calc(3 * var(--space-4)); // h-12
  padding: 0 var(--space-4); // px-4
  background-color: var(--primary-color-dark); // bg-[#2D3748]
  color: var(--white-color); // text-[#FFFFFF]
  font-size:calc(0.9 * var(--text-base));
  font-weight: var(--font-bold); // font-bold
  border-radius: var(--rounded-lg); // rounded-lg
  box-shadow: var(--shadow-md-custom); // shadow-md
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(45, 55, 72, 0.9); // hover:bg-opacity-90 for #2D3748
  }

  .material-icons, svg {
    font-size: var(--text-2xl); // Approx size for icons in buttons
  }
`;