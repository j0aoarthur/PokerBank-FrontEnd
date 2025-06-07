import Logo2 from "../../assets/images/Logo2.png";
import {HeaderLogo, HeaderWrapper} from "./styles.js";
import {useNavigate} from "react-router-dom";

export function LoginHeader() {
    const navigate = useNavigate();
    return (
        <HeaderWrapper>
            <HeaderLogo onClick={() => navigate("/")} src={Logo2} alt={"Logomarca do PokerBank"}/>
        </HeaderWrapper>
    )
}

