import {usePlayerForm} from "./usePlayerForm.js";
import {PlayerSelectSection} from "../../components/PlayerSelectSection/PlayerSelectSection.jsx";
import {ChipsSelectSection} from "../../components/ChipsSelectSection/ChipsSelectSection.jsx";
import {ButtonsContainer, NewPlayerForm, NewPlayerPageContainer} from "./styles.js";
import {Button} from "../../components/Button/Button.jsx";
import {PageTitle} from "../../components/PageTitle/PageTitle.jsx";
import {MainHeader} from "../../components/MainHeader/MainHeader.jsx";
import {useTitle} from "../../utils/useTitle.js";

export function AddPlayerToGamePage({ title }) {
    const { formData, handleInputChange, handleSubmit, isAddingPlayer } = usePlayerForm();
    useTitle(title);

    return (
        <NewPlayerPageContainer>
            <MainHeader />
            <NewPlayerForm>
                <PageTitle text={"Adicionar Jogador"} />
                <PlayerSelectSection onChange={handleInputChange} playerId={formData.playerId} initialCash={formData.initialCash} />
                <ChipsSelectSection onChange={handleInputChange} chipsData={formData.chips}/>
                <ButtonsContainer>
                    <Button
                        onClick={() => handleSubmit(true)}
                        disabled={isAddingPlayer}
                    >
                        {isAddingPlayer ? "Adicionando..." : "Finalizar e Ver Partida"}
                    </Button>
                    <Button
                        onClick={() => handleSubmit(false)}
                        disabled={isAddingPlayer}
                    >
                        {isAddingPlayer ? "Adicionando..." : "Adicionar Outro Jogador"}
                    </Button>
                </ButtonsContainer>
            </NewPlayerForm>
        </NewPlayerPageContainer>
    );
}