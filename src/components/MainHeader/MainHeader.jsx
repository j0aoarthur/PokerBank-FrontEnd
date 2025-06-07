import {HeaderLogo, HeaderProfile, HeaderWrapper} from "./styles.js";
import Logo1 from "../../assets/images/logo1.png";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function MainHeader() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("Usuário");

    useEffect(() => {
        const handleUserChange = () => {
            const storedUser = localStorage.getItem('loggedInUser');
            if (storedUser) {
                try {
                    const user = JSON.parse(storedUser);
                    setUserName(user.name);
                } catch (e) {
                    console.error("Failed to parse stored user:", e);
                    localStorage.removeItem('loggedInUser'); // Clear corrupted data
                    setUserName("Usuário");
                }
            } else {
                setUserName("Usuário"); // Default if no user is logged in
            }
        };

        handleUserChange(); // Initial check

        window.addEventListener('userChanged', handleUserChange);
        return () => {
            window.removeEventListener('userChanged', handleUserChange);
        };
    }, []);


    return (
        <HeaderWrapper>
            <HeaderLogo onClick={() => navigate("/")} src={Logo1} alt={"Logomarca do PokerBank"}/>
            <HeaderProfile>
                <h5>Olá,</h5>
                <h2>{userName}</h2>
            </HeaderProfile>
        </HeaderWrapper>
    )
}