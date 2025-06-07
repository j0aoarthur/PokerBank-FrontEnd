import {useTitle} from "../../utils/useTitle.js";
import {HomePageContainer} from "./styles.js";
import {RankingSection} from "../../components/RankingSection/RankingSection.jsx";
import {GameSection} from "../../components/GameSection/GameSection.jsx";
import {useEffect, useState} from "react";
import {HomeHeader} from "../../components/HomeHeader/HomeHeader.jsx";
import {WelcomeSection} from "../../components/WelcomeSection/WelcomeSection.jsx";

export function HomePage({title}) {
    const [userName, setUserName] = useState("Usuário");
    useTitle(title)

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
        <HomePageContainer>
            <HomeHeader/>
            <WelcomeSection userName={userName} />
            <GameSection />
            <RankingSection/>
        </HomePageContainer>
    )
}