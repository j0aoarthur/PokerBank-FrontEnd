import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    padding: 12px 25px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 1px 2px 0 var(--shadow-color);
    font-size: 16px;
    font-weight: 500;

    background-color: ${props => props.$backgroundColor || "var(--black-color)"};
    color: ${props => props.$color || "var(--text-white-color)"};
    
    &:active{
        filter: brightness(1.5);
    }

    &:disabled {
        cursor: not-allowed;
    }
`