import styled from "styled-components";

export const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(0.75 * var(--space-4)); 
`;

export const CardItem = styled.div`
    background-color: var(--panel-background-color); 
    padding: var(--space-4); 
    border-radius: var(--rounded-lg); 
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--shadow-md-custom); 
    border: 1px solid var(--panel-border-color); 
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
        background-color: var(--panel-border-color); 
    }

    .material-icons, svg {
        color: var(--primary-color-dark); 
        font-size: var(--text-2xl);
    }
`;

export const ItemTextMain = styled.p`
  color: var(--primary-color-dark); 
  font-weight: var(--font-medium); 
`;

export const ItemTextSecondary = styled.p`
  color: var(--secondary-color-gray); 
  font-size: var(--text-sm);
`;

