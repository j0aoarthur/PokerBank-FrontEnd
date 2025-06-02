// src/pages/AllGamesPage/AllGamesPage.jsx
import React, {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {MainHeader} from "../../components/MainHeader/MainHeader.jsx";
import {PageTitle} from "../../components/PageTitle/PageTitle.jsx";
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.jsx";
import {getAllGames} from "../../services/apiService.js";
import {useTitle} from "../../utils/useTitle.js";
import {formatDate, getDayOfWeek} from "../../utils/dateUtils.js";
import {AllGamesPageContainer, GameInfo, GameItemStyled, GamesList} from "./styles.js";
import {FaAngleRight} from "react-icons/fa6";

export function AllGamesPage({ title }) {
    useTitle(title);
    const navigate = useNavigate();
    const [games, setGames] = useState([]);

    const { data: fetchedGames, isLoading, error } = useQuery({
        queryKey: ["allGames"],
        queryFn: getAllGames,
    });

    useEffect(() => {
        if (fetchedGames) {
            // Ordenar por data, mais recentes primeiro, se a API não o fizer
            const sortedGames = [...fetchedGames].sort((a, b) => new Date(b.date) - new Date(a.date));
            setGames(sortedGames);
        }
    }, [fetchedGames]);

    if (error) {
        return (
            <AllGamesPageContainer>
                <MainHeader />
                <PageTitle text="Todas as Partidas" />
                <p style={{ color: 'var(--red-color)', textAlign: 'center' }}>
                    Erro ao carregar as partidas: {error.message}
                </p>
                <NavigationBar activePage="game" />
            </AllGamesPageContainer>
        );
    }

    return (
        <AllGamesPageContainer>
            <MainHeader />
            <PageTitle text="Todas as Partidas" subtitle={games.length > 0 ? `${games.length} partida(s) encontrada(s)` : ""} />

            {games.length === 0 && !isLoading && (
                <p style={{ textAlign: 'center', marginTop: '20px' }}>Nenhuma partida encontrada.</p>
            )}

            <GamesList>
                {games.map((game) => (
                    <GameItemStyled key={game.id} onClick={() => navigate(`/game/${game.id}`)}>
                        <GameInfo>
                            <h3>{getDayOfWeek(game.date)}</h3>
                            <p>{formatDate(game.date)}</p>
                            <p>Status: {game.isFinished === true ? "Finalizada" : (new Date(game.dueDate) < new Date() ? "Vencida" : "Em aberto")}</p>
                        </GameInfo>
                        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                            <FaAngleRight opacity={0.3} size={20} />
                        </div>
                    </GameItemStyled>
                ))}
            </GamesList>
            <NavigationBar activePage="games" />
        </AllGamesPageContainer>
    );
}