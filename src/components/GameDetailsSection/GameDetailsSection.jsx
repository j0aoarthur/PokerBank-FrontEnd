import {GameDetailsWrapper, InfoItem, InfoList} from "./styles.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";

export function GameDetailsSection({game}) {

    return (
        <GameDetailsWrapper>
            <h2>Informações</h2>
            <InfoList>
                <InfoItem>
                    <p>Partida Finalizada</p>
                    <h3>{game.isFinished ? "Sim" : "Não"}</h3>
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
