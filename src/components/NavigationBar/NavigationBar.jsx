import {FiHome, FiLogOut} from "react-icons/fi";
import {PiRanking} from "react-icons/pi";
import {GiPokerHand} from "react-icons/gi";
import {BottomBarContainer, IconWrapper} from "./styles.js";
import {useNavigate} from "react-router-dom";

export function NavigationBar({ activePage }) {
    const navigate = useNavigate();

    return (
        <BottomBarContainer>
            <IconWrapper $active={activePage === 'home'} onClick={() => navigate("/")}>
                <FiHome />
            </IconWrapper>
            <IconWrapper $active={activePage === 'game'} onClick={() => navigate("/game")}>
                <GiPokerHand />
            </IconWrapper>
            <IconWrapper $active={activePage === 'ranking'} onClick={() => navigate("/ranking")}>
                <PiRanking />
            </IconWrapper>
            <IconWrapper $active={activePage === 'logout'} onClick={() => navigate("/")}>
                <FiLogOut />
            </IconWrapper>
        </BottomBarContainer>
    );
}
