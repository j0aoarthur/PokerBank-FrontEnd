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
  color: var(--primary-color-dark); 
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em; 
  margin-bottom: var(--space-1);
`;

export const PageSubtitle = styled.p`
  color: var(--secondary-color-gray); 
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-8);
`;

export const GamesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4); 
`;

export const GameItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  background-color: var(--panel-background-color); 
  padding: var(--space-4);
  border-radius: var(--rounded-xl);
  border: 1px solid var(--panel-border-color); 
  box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0,0,0,0.05));
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`;

export const GameInfo = styled.div`
  flex: 1;
`;

export const GameDateText = styled.p`
  color: var(--primary-color-dark); 
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
  color: var(--primary-color-dark); 
  opacity: 0.75;
  transition: opacity 0.15s ease-in-out;

  ${GameItemCard}:hover & {
    opacity: 1;
  }

  svg { 
    font-size: var(--text-3xl, 1.875rem) !important; 
    display: block;
  }
`;

export const GamesSection = styled.section`
  margin-bottom: var(--space-8);
  &:last-of-type {
    margin-bottom: 0;
  }
`;


export const PaginationWrapper = styled.div`
  margin-top: var(--space-8);
  display: flex;
  justify-content: center;
  align-items: center;
  
  .ant-pagination-item-active {
    background-color: var(--primary-color-dark);
    border-color: var(--primary-color-dark);
    a {
      color: var(--white-color);
    }
  }
  .ant-pagination-item-active:hover {
    background-color: #1A202C;
    border-color: #1A202C;
    a {
      color: var(--white-color);
    }
  }
`;

export const HrDivider = styled.div`
  border-top: 1px solid var(--panel-border-color);
  margin: var(--space-8) 0; 
`;