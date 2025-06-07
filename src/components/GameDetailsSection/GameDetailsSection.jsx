import {InfoItem, InfoItemWideValue, InfoList, StatusBadge, ValueText} from "./styles.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import {getMonthAndDay} from "../../utils/dateUtils.js";
import React from "react";
import {Section} from "../Section/Section.jsx";

export function GameDetailsSection({game}) {
    const isDueDatePast = new Date(game.dueDate) < new Date();

    let statusText;
    let statusType; // 'finished', 'overdue', 'inProgress'

    if (game.isFinished) {
        statusText = "Finalizado";
        statusType = "finished";
    } else if (isDueDatePast) {
        statusText = "Vencida";
        statusType = "overdue";
    } else {
        statusText = "Em progresso";
        statusType = "inProgress";
    }

    return (
        <Section title={"Informações da Partida"}>
            <InfoList>
                <InfoItem>
                    <p>Status</p>
                    <StatusBadge $status={statusType}>{statusText}</StatusBadge>
                </InfoItem>
                <InfoItem>
                    <p>Data de Vencimento</p>
                    <ValueText>
                        {getMonthAndDay(game.dueDate)}
                    </ValueText>
                </InfoItem>
                <InfoItem>
                    <p>Saldo Geral</p>
                    <ValueText>{formatNumberToBRL(game.totalBalance)}</ValueText>
                </InfoItem>
                <InfoItem>
                    <p>Prêmio Total</p>
                    <ValueText>
                        {formatNumberToBRL(game.totalPrize)}
                    </ValueText>
                </InfoItem>
                <InfoItem>
                    <p>Jogadores</p>
                    <ValueText>
                        {game.totalPlayers}
                    </ValueText>
                </InfoItem>
                <InfoItemWideValue>
                    <p>Observação</p>
                    <ValueText>{game.observation}</ValueText>
                </InfoItemWideValue>
            </InfoList>
        </Section>
    )
}
