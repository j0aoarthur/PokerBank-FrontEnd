// src/components/PaymentSuggestionSection/styles.js
import styled from "styled-components";

export const PaymentSuggestionItemCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4); // Tailwind: gap-4
  background-color: var(--panel-background-color); // Tailwind: bg-[#F7F9FC]
  padding: var(--space-4); // Tailwind: p-4
  border-radius: var(--rounded-lg); // Tailwind: rounded-lg
  border: 1px solid var(--panel-border-color); // Tailwind: border border-[#E8EDF2]
`;

export const PaymentSuggestionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3); // Tailwind: gap-3

  .material-icons, svg { // For react-icons
    color: var(--secondary-color-gray); // Tailwind: text-[#5A6A7B]
    font-size: var(--text-2xl-icon); // Tailwind: text-2xl
  }
`;

export const PaymentText = styled.p`
  font-size: var(--text-sm); // Tailwind: text-sm
  font-weight: var(--font-medium); // Tailwind: font-medium
  color: var(--primary-color-dark); // Tailwind: text-[#2D3748]

  span { // For names
    font-weight: var(--font-semibold); // Tailwind: font-semibold
  }
`;

export const PaymentAmount = styled.p`
  font-size: var(--text-base); // Tailwind: text-base
  font-weight: var(--font-semibold); // Tailwind: font-semibold
  color: var(--primary-color-dark); // Tailwind: text-[#2D3748]
`;

export const PaymentArrow = styled.span`
  margin: 0 4px;
  font-weight: bold;
`;