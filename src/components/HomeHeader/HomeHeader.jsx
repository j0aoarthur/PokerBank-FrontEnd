import {HeaderWrapper, LogoImage, PageTitle, SettingsButton} from "./styles.js";
import {MdSettings} from "react-icons/md";
import logo3 from "../../assets/images/logo3.png";

export function HomeHeader({onSettingsClick}) {
    return (
        <HeaderWrapper>
            <LogoImage alt="PokerBank Logo" src={logo3} />
            <PageTitle>PokerBank</PageTitle>
            <SettingsButton onClick={onSettingsClick} aria-label="Settings">
                <MdSettings size={24} />
            </SettingsButton>
        </HeaderWrapper>
    )
}
