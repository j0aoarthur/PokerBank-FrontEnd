// src/pages/AllGamesPage/styles.js
import styled from "styled-components";

export const AllGamesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 25px;
  width: 100%;
`;

export const GamesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; // Espaçamento entre os itens da lista
  align-self: stretch;
  width: 100%;
  padding: 0 5px; // Pequeno padding lateral se necessário
`;

export const GameItemStyled = styled.div`
  display: flex;
  padding: 15px 18px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: var(--white-color);
  border-radius: 15px;
  box-shadow: 0 2px 4px var(--shadow-color); // Sombra sutil como em outros elementos
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    filter: brightness(0.9);
  }
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;

  h3 {
    color: var(--text-black-color);
    font-size: 16px;
    font-weight: 600;
  }

  p {
    color: var(--text-light-gray-color);
    font-size: 12px;
    font-weight: 400;
  }
`;

export const GameStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    font-size: 12px;
    color: var(--text-gray-color);

    .total-prize {
        font-weight: 500;
        color: var(--green-color);
    }
`;