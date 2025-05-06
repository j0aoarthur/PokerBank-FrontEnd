import {Button} from "../../components/Button/Button.jsx";
import {DatePicker} from 'antd';
import {MainHeader} from "../../components/MainHeader/MainHeader.jsx";
import {PageTitle} from "../../components/PageTitle/PageTitle.jsx";
import {CreateGameForm, GameInfoSection, CreateGamePageContainer} from "./styles.js";
import dayjs from 'dayjs';
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.jsx";
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
        <CreateGamePageContainer>
            <MainHeader/>
            <GameInfoSection>
                <PageTitle text={"Nova Partida"}/>
                <CreateGameForm>
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
                </CreateGameForm>
            </GameInfoSection>
            <NavigationBar activePage={"game"}/>
        </CreateGamePageContainer>
    );
}