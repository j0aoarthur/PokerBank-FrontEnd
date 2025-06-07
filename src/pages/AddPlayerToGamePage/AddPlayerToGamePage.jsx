import {usePlayerForm} from "./usePlayerForm.js";
import {PlayerSelectSection} from "../../components/PlayerSelectSection/PlayerSelectSection.jsx";
import {ChipsSelectSection} from "../../components/ChipsSelectSection/ChipsSelectSection.jsx";
import {ActionButtonsContainer, MainContent, NewPlayerPageContainer, PrimaryButton, SecondaryButton} from "./styles.js";
import {useTitle} from "../../utils/useTitle.js";
import {useNavigate, useParams} from "react-router-dom";
import {PageHeader} from "../../components/PageHeader/PageHeader.jsx";
import React from "react";

export function AddPlayerToGamePage() {
    const { gameId, playerId: playerIdFromParams } = useParams();
    const isEditMode = !!playerIdFromParams;
    const navigate = useNavigate();

    useTitle(isEditMode ? "Editar Jogador na Partida" : "Adicionar Jogador");

    const {formData, handleInputChange, handleSubmit, isSubmitting, currentPlayerName} = usePlayerForm();

    return (
        <NewPlayerPageContainer>
            <PageHeader title={"Adicionar Jogador"}/>
            <MainContent>
                <PlayerSelectSection
                    onChange={handleInputChange}
                    playerIdValue={formData.playerId}
                    initialCashValue={formData.initialCash}
                    isEditMode={isEditMode}
                    currentPlayerName={isEditMode ? currentPlayerName : ""}
                />
                <ChipsSelectSection chipsData={formData.chips} onChange={handleInputChange} />
                <ActionButtonsContainer>
                    { isEditMode ? (
                        <>
                            <PrimaryButton onClick={() => handleSubmit(true)} disabled={isSubmitting}>
                                <span>Salvar Edição</span>
                            </PrimaryButton>
                            <SecondaryButton onClick={() => navigate(`/game/${gameId}`)} disabled={isSubmitting}>
                                <span>Voltar</span>
                            </SecondaryButton>
                        </>
                    ) : (
                        <>
                            <PrimaryButton onClick={() => handleSubmit(true)} disabled={isSubmitting}>
                                <span>{isSubmitting ? "Adicionando..." : "Adicionar e Ver Partida"}</span>
                            </PrimaryButton>
                            <SecondaryButton onClick={() => handleSubmit(false)} disabled={isSubmitting}>
                                <span>{isSubmitting ? "Adicionando..." : "Adicionar Outro Jogador"}</span>
                            </SecondaryButton>
                        </>
                    )}

                </ActionButtonsContainer>
            </MainContent>
        </NewPlayerPageContainer>
    );
}