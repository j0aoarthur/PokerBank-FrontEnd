import styled from "styled-components";
import {Link} from "react-router-dom";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2); /* gap-2 */
    height: 3rem; /* h-12 */
    padding: 0 1rem; /* px-4 */
    background-color: var(--black-color);
    color: var(--white-color);
    font-size: var(--text-base); 
    line-height: 1.5rem;
    font-weight: var(--font-bold); 
    border-radius: var(--rounded-lg);
    box-shadow: var(--shadow-default);
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); /* transition-colors */
`

export const MainTitle = styled.h1`
    font-size: var(--text-3xl);
    line-height: 2.25rem;
    font-weight: var(--font-bold); 
    color: var(--primary-color-dark);
    margin-bottom: var(--space-4);
`

