import {HeaderWrapper, LogoImage, PageTitle, SettingsButton} from "./styles.js";
import logo3 from "../../assets/images/logo3.png";
import {TbLogout} from "react-icons/tb";

export function HomeHeader({onSettingsClick}) {
    return (
        <HeaderWrapper>
            <LogoImage alt="PokerBank Logo" src={logo3} />
            <PageTitle>PokerBank</PageTitle>
            <SettingsButton onClick={onSettingsClick} aria-label="Settings">
                <TbLogout size={32} />
            </SettingsButton>
        </HeaderWrapper>
    )
}
