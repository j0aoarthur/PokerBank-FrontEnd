import {FiHome, FiLogIn, FiLogOut} from "react-icons/fi";
import {PiPokerChip, PiRanking} from "react-icons/pi";
import {GiPokerHand} from "react-icons/gi";
import {RiAdminLine} from "react-icons/ri";
import {BottomBarContainer, IconWrapper} from "./styles.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function NavigationBar({ activePage }) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = () => {
            setIsLoggedIn(!!localStorage.getItem('loggedInUser'));
        };
        checkLoginStatus();
        window.addEventListener('userChanged', checkLoginStatus);
        return () => {
            window.removeEventListener('userChanged', checkLoginStatus);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        window.dispatchEvent(new Event('userChanged'));
        navigate("/login");
    };

    const handleLoginNavigation = () => {
        navigate("/login");
    };

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
            <IconWrapper $active={activePage === 'games'} onClick={() => navigate("/games")}>
                <PiPokerChip />
            </IconWrapper>
            <IconWrapper $active={activePage === 'admin'} onClick={() => navigate("/admin")}>
                <RiAdminLine />
            </IconWrapper>
            {isLoggedIn ? (
                <IconWrapper $active={activePage === 'logout'} onClick={handleLogout}>
                    <FiLogOut />
                </IconWrapper>
            ) : (
                <IconWrapper $active={activePage === 'login'} onClick={handleLoginNavigation}>
                    <FiLogIn />
                </IconWrapper>
            )}
        </BottomBarContainer>
    );
}