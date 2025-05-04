import {HeaderLogo, HeaderProfile, HeaderWrapper} from "./styles.js";
import Logo1 from "../../assets/images/logo1.png";
import {Link, useNavigate} from "react-router-dom";

export function Header() {
    const navigate = useNavigate()
    return (
        <HeaderWrapper>
            <HeaderLogo onClick={() => navigate("/")} src={Logo1} alt={"Logomarca do PokerBank"}/>
            <HeaderProfile>
                <h5>Bem vindo,</h5>
                <h2>Usuário</h2>
            </HeaderProfile>
        </HeaderWrapper>
    )
}