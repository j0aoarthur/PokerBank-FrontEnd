import styled from "styled-components";

export const FooterNav = styled.nav`
    display: flex;
    margin: var(--remove-margin);
    gap: var(--space-2);
    background-color: var(--primary-color-dark);
    padding: var(--space-2) var(--space-2) env(safe-area-inset-bottom, 0.75rem);
`;

export const NavLink = styled.a`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: calc(0.5 * var(--space-unit));
    padding: var(--space-1) 0;
    border-radius: var(--rounded-lg);
    text-decoration: none;
    transition: background-color 0.15s;
    color: ${props => props.$active ? 'var(--white-color)' : 'var(--secondary-color-gray, #5A6A7B)'};
    background-color: ${props => props.$active ? 'var(--nav-active-bg, rgba(74, 85, 104, 0.5))' : 'transparent'};

    &:hover {
        background-color: ${props => props.$active ? 'var(--nav-active-hover-bg, rgba(74, 85, 104, 0.7))' : 'var(--nav-active-bg, rgba(74, 85, 104, 0.5))'};
    }

    svg { 
        font-size: 24px;
    }

    p {
        font-size: var(--text-xs);
        font-weight: var(--font-medium);
        line-height: var(--leading-normal);
    }
`;

