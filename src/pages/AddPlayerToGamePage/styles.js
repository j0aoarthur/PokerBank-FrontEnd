import styled from "styled-components";

export const NewPlayerPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
`;

// Action Buttons Section
export const ActionButtonsContainer = styled.div`
  align-self: stretch;
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: var(--space-3); // space-y-3 (actually gap for flex)
    padding: var(--space-4) 0; // p-4
`;

const BaseActionButton = styled.button`
  flex: 1; // For when in a row, but here it's full width
  width: 100%;
  min-width: 84px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: var(--rounded-lg); // rounded-lg
  min-height: calc(10 * var(--space-unit)); // h-12
  padding: 0 var(--space-5); // px-5 (assuming var(--space-5) is 1.25rem)
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  line-height: var(--leading-normal);
  letter-spacing: 0.015em; // tracking-[0.015em]
  transition: background-color 0.15s, border-color 0.15s, opacity 0.15s;
  box-sizing: border-box;

  span { // truncate
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const PrimaryButton = styled(BaseActionButton)`
  background-color: var(--primary-color-dark); // bg-[#2D3748]
  color: var(--white-color); // text-[#FFFFFF]
  border: 1px solid var(--primary-color-dark); // ensure border for consistency if needed

  &:hover {
    opacity: 0.9; // hover:bg-opacity-90 (approx)
  }
`;

export const SecondaryButton = styled(BaseActionButton)`
  background-color: var(--panel-background-color); // bg-[#F7F9FC]
  color: var(--primary-color-dark); // text-[#2D3748]
  border: 1px solid var(--panel-border-color); // border border-[#E8EDF2]

  &:hover {
    background-color: var(--panel-border-color); // hover:bg-[#E8EDF2]
  }
`;