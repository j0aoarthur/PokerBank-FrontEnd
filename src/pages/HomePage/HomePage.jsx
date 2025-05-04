import {useTitle} from "../../utils/useTitle.js";
import {Header} from "../../components/Header/Header.jsx";
import {ButtonsContainer, HomePageContainer} from "./styles.js";
import {RankingSection} from "../../components/RankingSection/RankingSection.jsx";
import {Button} from "../../components/Button/Button.jsx";
import {BottomBar} from "../../components/BottomBar/BottomBar.jsx";
import {GameSection} from "../../components/GameSection/GameSection.jsx";

export function HomePage({title}) {
    useTitle(title)

    return (
        <HomePageContainer>
            <Header/>
            <ButtonsContainer>
                <Button to="/game" >Nova Partida</Button>
                <Button to="/">Pagar Dívida</Button>
            </ButtonsContainer>
            <GameSection />
            <RankingSection/>
            <BottomBar activePage={"home"}/>


        </HomePageContainer>
    )
}