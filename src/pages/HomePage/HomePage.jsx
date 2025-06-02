import {useTitle} from "../../utils/useTitle.js";
import {MainHeader} from "../../components/MainHeader/MainHeader.jsx";
import {ButtonsContainer, HomePageContainer} from "./styles.js";
import {RankingSection} from "../../components/RankingSection/RankingSection.jsx";
import {Button} from "../../components/Button/Button.jsx";
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.jsx";
import {GameSection} from "../../components/GameSection/GameSection.jsx";

export function HomePage({title}) {
    useTitle(title)

    return (
        <HomePageContainer>
            <MainHeader/>
            <ButtonsContainer>
                <Button to="/game" >Nova Partida</Button>
                <Button to="/admin">Administração</Button>
            </ButtonsContainer>
            <GameSection />
            <RankingSection/>
            <NavigationBar activePage={"home"}/>
        </HomePageContainer>
    )
}