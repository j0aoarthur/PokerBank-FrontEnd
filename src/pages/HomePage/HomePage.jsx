import {useTitle} from "../../utils/useTitle.js";
import {HomePageContainer} from "./styles.js";
import {RankingSection} from "../../components/RankingSection/RankingSection.jsx";
import {GameSection} from "../../components/GameSection/GameSection.jsx";
import {HomeHeader} from "../../components/HomeHeader/HomeHeader.jsx";
import {WelcomeSection} from "../../components/WelcomeSection/WelcomeSection.jsx";

export function HomePage({title}) {
    useTitle(title)

    return (
        <HomePageContainer>
            <HomeHeader onSettingsClick={() => alert("Funcionalidade ainda não implementada!")}/>
            <WelcomeSection userName={"Usuário"} />
            <GameSection />
            <RankingSection/>
        </HomePageContainer>
    )
}