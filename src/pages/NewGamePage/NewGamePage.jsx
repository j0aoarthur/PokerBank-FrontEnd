import {Button} from "../../components/Button/Button.jsx";
import {DatePicker} from 'antd';
import {Header} from "../../components/Header/Header.jsx";
import {Title} from "../../components/Title/Title.jsx";
import {GameForm, InfoWrapper, NewGamePageWrapper} from "./styles.js";
import dayjs from 'dayjs';
import {BottomBar} from "../../components/BottomBar/BottomBar.jsx";
import {useTitle} from "../../utils/useTitle.js";
import {addGame} from "../../services/apiService.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function NewGamePage({title}) {
    useTitle(title);

    const [selectedDate, setSelectedDate] = useState(dayjs());
    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAddGame = async (redirectToPlayers = false) => {
        const gameData = { date: selectedDate.format("YYYY-MM-DD") };
        try {
            const response = await addGame(gameData);
            console.log("Partida criada com sucesso", response);

            if (redirectToPlayers) {
                navigate(`/game/${response.id}/player`);
            } else {
                navigate(`/game/${response.id}`);
            }
        } catch (error) {
            console.error("Erro ao criar partida:", error);
        }
    };

    return (
        <NewGamePageWrapper>
            <Header/>
            <InfoWrapper>
                <Title text={"Nova Partida"}/>
                <GameForm>
                    <DatePicker
                        style={{ width: '100%' }}
                        size={"large"}
                        defaultValue={selectedDate}
                        format={"DD/MM/YYYY"}
                        inputReadOnly
                        onChange={handleDateChange}
                    />
                    <Button
                        onClick={() => handleAddGame(true)}
                    >
                        Adicionar Jogador à partida
                    </Button>
                    <Button
                        onClick={() => handleAddGame(false)}
                    >
                        Criar Partida
                    </Button>
                </GameForm>
            </InfoWrapper>
            <BottomBar activePage={"game"}/>
        </NewGamePageWrapper>
    );
}