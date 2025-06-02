import {usePlayerForm} from "./usePlayerForm.js";
import {PlayerSelectSection} from "../../components/PlayerSelectSection/PlayerSelectSection.jsx";
import {ChipsSelectSection} from "../../components/ChipsSelectSection/ChipsSelectSection.jsx";
import {ButtonsContainer, NewPlayerForm, NewPlayerPageContainer} from "./styles.js";
import {Button} from "../../components/Button/Button.jsx";
import {PageTitle} from "../../components/PageTitle/PageTitle.jsx";
import {MainHeader} from "../../components/MainHeader/MainHeader.jsx";
import {useTitle} from "../../utils/useTitle.js";
import {useNavigate, useParams} from "react-router-dom";

export function AddPlayerToGamePage() {
    const { gameId, playerId: playerIdFromParams } = useParams();
    const isEditMode = !!playerIdFromParams;
    const navigate = useNavigate();

    useTitle(isEditMode ? "Editar Jogador na Partida" : "Adicionar Jogador");

    const {formData, handleInputChange, handleSubmit, isSubmitting, currentPlayerName} = usePlayerForm();

    return (
        <NewPlayerPageContainer>
            <MainHeader />
            <NewPlayerForm>
                <PageTitle text={isEditMode ? "Editar Jogador na Partida" : "Adicionar Jogador"} />
                <PlayerSelectSection
                    onChange={handleInputChange}
                    playerIdValue={formData.playerId}
                    initialCashValue={formData.initialCash}
                    isEditMode={isEditMode}
                    currentPlayerName={isEditMode ? currentPlayerName : ""}
                />
                <ChipsSelectSection onChange={handleInputChange} chipsData={formData.chips}/>
                <ButtonsContainer>
                    {isEditMode ? (
                        <>
                            <Button
                                onClick={() => handleSubmit(true)}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Salvando..." : "Salvar Edição"}
                            </Button>
                            <Button
                                onClick={() => navigate(`/game/${gameId}`)}
                            >
                                Voltar
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() => handleSubmit(true)}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Adicionando..." : "Finalizar e Ver Partida"}
                            </Button>

                            <Button
                                onClick={() => handleSubmit(false)}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Adicionando..." : "Adicionar Outro Jogador"}
                            </Button>

                        </>
                    )}
                </ButtonsContainer>
            </NewPlayerForm>
        </NewPlayerPageContainer>
    );
}