import styled from "styled-components";

export const AdminPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    align-self: stretch;
    width: 100%;
    padding-bottom: 70px;
`; //

export const AdminSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: stretch;
    width: 100%;
    padding: 20px;
    background-color: var(--white-color);
    border-radius: 15px;
    box-shadow: 0 2px 4px var(--shadow-color);
`; //

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-self: stretch;
`; //

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;

    & > label {
        color: var(--text-black-color);
        font-size: 14px;
        font-weight: 500;

        & > span {
            color: var(--red-color);
        }
    }
`;

export const ChipListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
    padding: 10px;
    background-color: var(--background-color); //
    border-radius: 8px;
`;

export const ChipListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    background-color: var(--white-color); //
    border-radius: 6px;
    box-shadow: 0 1px 2px var(--light-gray-color); //

    & > span:first-child {
        font-weight: 600;
    }
`;