import {StyledLink} from "./styles.js";

export function Button({ children, onClick, to, backgroundColor, color}) {
    return (
        <StyledLink onClick={onClick} to={to} $backgroundColor={backgroundColor} $color={color}>
            {children}
        </StyledLink>
    );
}