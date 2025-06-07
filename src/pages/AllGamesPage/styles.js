// src/pages/AllGamesPage/styles.js
import styled from "styled-components";

export const AllGamesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
`;

export const MainContent = styled.main`
  align-self: stretch;
`;

export const PageTitle = styled.h1`
  color: var(--primary-color-dark); // .text-main
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em; // tracking-tight
  margin-bottom: var(--space-1);
`;

export const PageSubtitle = styled.p`
  color: var(--secondary-color-gray); // .text-secondary
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-8);
`;

export const GamesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4); // space-y-4
`;

export const GameItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  background-color: var(--panel-background-color, #f7f9fc); // .bg-secondary
  padding: var(--space-4);
  border-radius: var(--rounded-xl);
  border: 1px solid var(--panel-border-color, #e8edf2); // .border-divider
  box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0,0,0,0.05));
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`;

export const GameInfo = styled.div`
  flex: 1;
`;

export const GameDateText = styled.p`
  color: var(--primary-color-dark); // .text-main
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
`;

export const GameStatusText = styled.p`
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: ${props => props.$status ? 'var(--accent-red-color)' : 'var(--primary-color-dark)'};
`;

export const ChevronIcon = styled.span`
  color: var(--primary-color-dark); // .text-main
  opacity: 0.75;
  transition: opacity 0.15s ease-in-out;

  ${GameItemCard}:hover & {
    opacity: 1;
  }

  svg { // For react-icons
    font-size: var(--text-3xl, 1.875rem) !important; // Ensure size for Material Symbols
    display: block;
  }
`;

export const GamesSection = styled.section`
  margin-bottom: var(--space-8);
  &:last-of-type {
    margin-bottom: 0;
  }
`;

// Styles for Ant Design Pagination wrapper
export const PaginationWrapper = styled.div`
  margin-top: var(--space-8);
  display: flex;
  justify-content: center;
  align-items: center;
  
  // Minor adjustments to antd pagination if needed, but generally rely on antd's styling.
  // Example: customizing active page color (use antd's ConfigProvider for deeper themeing)
  .ant-pagination-item-active {
    background-color: var(--primary-color-dark, #2D3748);
    border-color: var(--primary-color-dark, #2D3748);
    a {
      color: var(--white-color, #FFFFFF);
    }
  }
  .ant-pagination-item-active:hover {
    background-color: var(--primary-button-hover-bg, #1A202C);
    border-color: var(--primary-button-hover-bg, #1A202C);
    a {
      color: var(--white-color, #FFFFFF);
    }
  }
`;

export const HrDivider = styled.div`
  border-top: 1px solid var(--panel-border-color, #E8EDF2);
  margin: var(--space-8) 0; // my-8
`;