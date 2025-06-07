import {DatePicker} from 'antd';
import {
    CreateGameButtonContainer,
    CreateGamePageContainer,
    DatePickerWrapper,
    MainContent,
    PrimaryButton
} from "./styles.js";
import dayjs from 'dayjs';
import {useTitle} from "../../utils/useTitle.js";
import {addGame} from "../../services/apiService.js";
import React, {useId, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PageHeader} from "../../components/PageHeader/PageHeader.jsx";
import {MdPersonAdd} from "react-icons/md";

export function NewGamePage({title}) {
    useTitle(title);

    const [selectedDate, setSelectedDate] = useState(dayjs());
    const {dateId} = useId();
    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAddGame = async (redirectToPlayers = false) => {
        const gameData = { date: selectedDate.format("YYYY-MM-DD") };
        try {
            const response = await addGame(gameData);

            if (redirectToPlayers) {
                navigate(`/game/${response.id}/player`);
            } else {
                navigate(`/game/${response.id}`);
            }
        } catch (error) {
            alert("Erro ao criar partida. Por favor, tente novamente.");
            console.error("Erro ao criar partida:", error);
        }
    };

    return (
        <CreateGamePageContainer>
            <div>
                <PageHeader title={"Nova Partida"}/>
                <MainContent>
                    <h1>Nova Partida</h1>

                    <DatePickerWrapper>
                        <label htmlFor={dateId}>Data da Partida</label>
                        <DatePicker
                            id={dateId}
                            value={selectedDate}
                            onChange={handleDateChange}
                            format="DD/MM/YYYY"
                            size="large"
                            inputReadOnly
                        />
                    </DatePickerWrapper>

                    <PrimaryButton onClick={() => handleAddGame(true)}>
                        <MdPersonAdd size={22} />
                        <span>Adicionar Jogador à partida</span>
                    </PrimaryButton>
                </MainContent>
            </div>
            <CreateGameButtonContainer>
                <PrimaryButton
                    onClick={() => handleAddGame(false)}
                    $px="var(--space-5)"
                    $fontSize="var(--text-lg)"
                    $fontWeight="var(--font-bold)"
                >
                    <span>Criar Partida</span>
                </PrimaryButton>
            </CreateGameButtonContainer>
        </CreateGamePageContainer>
    );
}