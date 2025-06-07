import styled from "styled-components";

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin: var(--remove-margin);
  padding: var(--space-4);
  background-color: var(--panel-background-color);
  
  & > h3 {
    color: var(--primary-color-dark);
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
  }
`

export const FormFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4); 
`;

export const Label = styled.label`
  display: block;
  color: var(--secondary-color-gray);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  padding-bottom: var(--space-1); 
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

const commonInputStyles = `
  display: flex;
  width: 100%;
  min-width: 0;
  flex: 1;
  resize: none;
  overflow: hidden;
  border-radius: var(--rounded-lg);
  color: var(--primary-color-dark);
  border: 1px solid var(--panel-border-color);
  background-color: var(--white-color);
  height: calc(12 * var(--space-unit)); 
  padding: 0 var(--space-3); 
  font-size: var(--text-base);
  font-weight: var(--font-normal); 
  line-height: var(--leading-normal);

  &::placeholder {
    color: var(--secondary-color-gray);
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color-dark); 

  }
`;

export const SelectInput = styled.select`
  ${commonInputStyles}
  appearance: none; 

  option {
    padding: var(--space-2) var(--space-3);
    background-color: var(--white-color);
    color: var(--primary-color-dark);
  }

  option[value=""] {
    color: var(--secondary-color-gray);
  }

  option[disabled] {
    color: var(--secondary-color-gray);
  }
`;

export const SelectArrow = styled.div`
  pointer-events: none;
  position: absolute;
  inset-inline-end: 0; 
  inset-block-start: 0; 
  inset-block-end: 0; 
  display: flex;
  align-items: center;
  padding: 0 var(--space-2); 
  color: var(--secondary-color-gray);
`;

export const NumberInputStyled = styled.input`
  ${commonInputStyles}
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
`;