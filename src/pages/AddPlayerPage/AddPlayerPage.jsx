import {usePlayerForm} from "./usePlayerForm.js";
import {PlayerSelectSection} from "../../components/PlayerSelectSection/PlayerSelectSection.jsx";
import {ChipsSelectSection} from "../../components/ChipsSelectSection/ChipsSelectSection.jsx";
import {ButtonsContainer, NewPlayerForm, NewPlayerPageContainer} from "./styles.js";
import {Button} from "../../components/Button/Button.jsx";
import {Title} from "../../components/Title/Title.jsx";
import {Header} from "../../components/Header/Header.jsx";
import {useTitle} from "../../utils/useTitle.js";
import {addPlayerToGame} from "../../services/apiService.js";
import {useNavigate} from "react-router-dom";

export function AddPlayerPage({ title }) {
    const { formData, handleInputChange } = usePlayerForm();
    const navigate = useNavigate();
    useTitle(title);

    const handleSubmit = async (redirect = false) => {
        try {
            await addPlayerToGame(formData);
            if (redirect) {
                navigate(`/game/${formData.gameId}`);
            } else {
                window.location.reload();
            }
        } catch (error) {
            console.error("Erro ao adicionar jogador:", error);
        }
    };

    return (
        <NewPlayerPageContainer>
            <Header />
            <NewPlayerForm>
                <Title text={"Adicionar Jogador"} />
                <PlayerSelectSection onChange={handleInputChange} />
                <ChipsSelectSection onChange={handleInputChange} />
                <ButtonsContainer>
                    <Button
                        onClick={() => handleSubmit(true)}
                    >
                        Adicionar Jogador
                    </Button>
                    <Button
                        onClick={handleSubmit}
                    >
                        Adicionar Novo Jogador
                    </Button>
                </ButtonsContainer>
            </NewPlayerForm>
        </NewPlayerPageContainer>
    );
}