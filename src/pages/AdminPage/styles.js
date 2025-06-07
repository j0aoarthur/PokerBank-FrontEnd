import styled from "styled-components";

export const AdminPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    align-self: stretch;
    width: 100%;
`;

export const MainContent = styled.main`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: var(--space-5); 
`;

export const Card = styled.div`
    background-color: var(--white-color);
    padding: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    border-radius: var(--rounded-lg);
    border: 1px solid var(--panel-border-color);
`;

export const Label = styled.label`
    display: block;
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--secondary-color-gray);
    margin-bottom: var(--space-1);
`;

export const InputField = styled.input`
    width: 100%;
    border-radius: var(--rounded-md); 
    border: 1px solid var(--panel-border-color);
    background-color: var(--white-color);
    color: var(--primary-color-dark);
    padding: var(--space-2) var(--space-3); 
    font-size: var(--text-sm);
    line-height: 1.5; 

    &::placeholder {
        color: var(--secondary-color-gray);
    }

    &:focus {
        border-color: var(--primary-color-dark);
        box-shadow: 0 0 0 1px var(--primary-color-dark);
        outline: none;
    }

    &[type=number]::-webkit-outer-spin-button,
    &[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    background-color: var(--primary-color-dark);
    color: var(--white-color);
    padding: var(--space-3) var(--space-4);
    border-radius: var(--rounded-md);
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    border: none;
    cursor: pointer;
    transition: background-color 0.15s;

    &:hover {
        background-color: rgba(45, 55, 72, 0.9); 
    }
`;

export const ListHeader = styled.h3`
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--primary-color-dark);
  margin-bottom: var(--space-2);
`;

export const ItemList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0; 
    max-height: calc(8 * var(--space-6)); 
    overflow-y: auto; 
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3) 0;
    border-bottom: 1px solid var(--panel-border-color);
    &:last-child {
        border-bottom: none;
    }
`;

export const ItemText = styled.span`
  color: var(--primary-color-dark);
  font-size: var(--text-sm);
`;

export const ChipInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

export const ChipColorSwatch = styled.div`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--rounded-full);
  background-color: ${props => props.color || '#ccc'};
  border: 1px solid var(--light-gray-color);
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid var(--panel-border-color);
`;