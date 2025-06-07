import {ActionButton, ActionButtonsGrid, WelcomeMessage} from "./styles.js";
import {MdAddCircleOutline, MdAdminPanelSettings} from "react-icons/md";
import React from "react";
import {useNavigate} from "react-router-dom";


export function WelcomeSection({ userName }) {
    const navigate = useNavigate();

    return (
        <div>
            <WelcomeMessage>Bem-vindo, {userName}</WelcomeMessage>
            <ActionButtonsGrid>
                <ActionButton onClick={() => navigate("/game/")}>
                    <MdAddCircleOutline />
                    <span>Nova Partida</span>
                </ActionButton>
                <ActionButton onClick={() => navigate("/admin/")}>
                    <MdAdminPanelSettings />
                    <span>Administração</span>
                </ActionButton>
            </ActionButtonsGrid>
        </div>
    )
}
