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

    return (
        <HomePageContainer>
            <HomeHeader/>
            <WelcomeSection userName={userName} />
            <GameSection />
            <RankingSection/>
        </HomePageContainer>
    )
}