import React, {useState} from 'react';
import {Pagination} from 'antd';
import {MdOutlineChevronRight} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';

import {
    AllGamesPageContainer,
    ChevronIcon,
    GameDateText,
    GameInfo,
    GameItemCard,
    GamesListContainer,
    GamesSection,
    GameStatusText,
    HrDivider,
    MainContent,
    PageSubtitle,
    PageTitle,
    PaginationWrapper
} from './styles';
import {PageHeader} from "../../components/PageHeader/PageHeader.jsx";
import {getAllGames, getExpiredGames} from "../../services/apiService.js";
import {formatFullDate} from "../../utils/dateUtils.js";
import {useTitle} from '../../utils/useTitle.js';
import {Section} from "../../components/Section/Section.jsx";

const GameItem = ({ game }) => {
    const navigate = useNavigate();
    let statusText;

    if (game.isFinished) {
        statusText = "Finalizada";
    } else if (new Date(game.dueDate) < new Date() && !game.isFinished) {
        statusText = "Vencida";
    } else {
        statusText = "Em aberto";
    }

    return (
        <GameItemCard onClick={() => navigate(`/game/${game.id}`)}>
            <GameInfo>
                <GameDateText>{formatFullDate(game.date)}</GameDateText>
                <GameStatusText $status={statusText === "Vencida"}>{statusText}</GameStatusText>
            </GameInfo>
            <ChevronIcon>
                <MdOutlineChevronRight />
            </ChevronIcon>
        </GameItemCard>
    );
};

export function AllGamesPage({ title }) {
    useTitle(title);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const { data: apiResponse, error: errorAllGames } = useQuery({
        queryKey: ['allGames', currentPage, pageSize],
        queryFn: () => getAllGames({ page: currentPage - 1, size: pageSize }),
        keepPreviousData: true,
    });

    const { data: expiredGamesData, error: errorExpired } = useQuery({
        queryKey: ['expiredGames'],
        queryFn: getExpiredGames,
    });

    const allGames = apiResponse?.content || [];
    const totalPages = apiResponse?.totalPages || 0;
    const totalGames = apiResponse?.totalElements || 0;
    const expiredGames = expiredGamesData || [];

    const handlePageChange = (page, newPageSize) => {
        setCurrentPage(page);
        if (newPageSize && newPageSize !== pageSize) {
            setPageSize(newPageSize);
        }
    };

    const getShowingRange = () => {
        if (totalGames === 0) return "Nenhuma partida encontrada";
        const startItem = (currentPage - 1) * pageSize + 1;
        const endItem = Math.min(currentPage * pageSize, totalGames);
        return `Mostrando ${startItem}-${endItem} de ${totalGames} partida(s)`;
    };

    return (
        <AllGamesPageContainer>
            <PageHeader title={"PokerBank"} />
            <MainContent>
                <GamesSection>
                    <PageTitle>{title}</PageTitle>
                    <PageSubtitle>
                        {!errorAllGames ? getShowingRange() : ""}
                    </PageSubtitle>

                    {errorAllGames && <p style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>Erro ao carregar partidas.</p>}

                    {!errorAllGames && allGames.length > 0 && (
                        <GamesListContainer>
                            {allGames.map(game => (
                                <GameItem key={game.id} game={game} />
                            ))}
                        </GamesListContainer>
                    )}
                    {!errorAllGames && allGames.length === 0 && totalGames === 0 && (
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>Nenhuma partida encontrada.</p>
                    )}

                    {!errorAllGames && totalPages > 1 && (
                        <PaginationWrapper>
                            <Pagination
                                current={currentPage}
                                pageSize={pageSize}
                                total={totalGames}
                                onChange={handlePageChange}
                            />
                        </PaginationWrapper>
                    )}
                </GamesSection>

                <HrDivider />

                <Section title={"Partidas Vencidas"}>
                    {errorExpired && <p style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>Erro ao carregar partidas vencidas.</p>}
                    {!errorExpired && expiredGames.length > 0 && (
                        <GamesListContainer>
                            {expiredGames.map(game => <GameItem key={`expired-${game.id}`} game={game} />)}
                        </GamesListContainer>
                    )}
                    {!errorExpired && expiredGames.length === 0 && (
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>Nenhuma partida vencida encontrada.</p>
                    )}
                </Section>
            </MainContent>
        </AllGamesPageContainer>
    );
}