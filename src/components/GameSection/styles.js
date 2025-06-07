import styled from "styled-components";

export const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(0.75 * var(--space-4)); // space-y-3 (0.75rem)
`;

export const CardItem = styled.div`
    background-color: var(--panel-background-color); // bg-[#F7F9FC]
    padding: var(--space-4); // p-4
    border-radius: var(--rounded-lg); // rounded-lg
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--shadow-md-custom); // shadow-md
    border: 1px solid var(--panel-border-color); // border border-[#E8EDF2]
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
        background-color: var(--panel-border-color); // hover:bg-[#E8EDF2]
    }

    .material-icons, svg {
        color: var(--primary-color-dark); // text-[#2D3748]
        font-size: var(--text-2xl);
    }
`;

export const ItemTextMain = styled.p`
  color: var(--primary-color-dark); // text-[#2D3748]
  font-weight: var(--font-medium); // font-medium
`;

export const ItemTextSecondary = styled.p`
  color: var(--secondary-color-gray); // text-[#5A6A7B]
  font-size: var(--text-sm); // text-sm
`;

