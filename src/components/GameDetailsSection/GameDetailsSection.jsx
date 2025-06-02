import {GameDetailsWrapper, InfoItem, InfoList} from "./styles.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import {formatDate} from "../../utils/dateUtils.js";

export function GameDetailsSection({game}) {
    const isDueDateInFuture = new Date(game.dueDate) > new Date();
    const dueDateStyle = {
        color: isDueDateInFuture ? 'inherit' : 'red'
    };


    return (
        <GameDetailsWrapper>
            <h2>Informações</h2>
            <InfoList>
                <InfoItem>
                    <p>Partida Finalizada</p>
                    <h3>{game.isFinished ? "Sim" : "Não"}</h3>
                </InfoItem>
                <InfoItem>
                    <p>Data de Vencimento</p>
                    <h3 style={dueDateStyle}>{formatDate(game.dueDate)}</h3>
                </InfoItem>
                <InfoItem>
                    <p>Saldo geral:</p>
                    <h3>{game.totalBalance}</h3>
                </InfoItem>
                <InfoItem>
                    <p>Prêmio Total</p>
                    <h3>{formatNumberToBRL(game.totalPrize)}</h3>
                </InfoItem>
                <InfoItem>
                    <p>Participantes</p>
                    <h3>{game.totalPlayers}</h3>
                </InfoItem>
                <InfoItem>
                    <p>Observações</p>
                    <h3>{game.observation}</h3>
                </InfoItem>
            </InfoList>
        </GameDetailsWrapper>
    )
}
