import Logo2 from "../../assets/images/Logo2.png";
import {HeaderLogo, HeaderWrapper} from "./styles.js";

export function LoginHeader() {
    return (
        <HeaderWrapper>
            <HeaderLogo onClick={() => navigate("/")} src={Logo2} alt={"Logomarca do PokerBank"}/>
        </HeaderWrapper>
    )
}
