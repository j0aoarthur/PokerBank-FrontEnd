// src/pages/LoginPage/LoginPage.jsx
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {Select} from 'antd';
import {PageTitle} from '../../components/PageTitle/PageTitle.jsx';
import {getAllPlayers} from '../../services/apiService.js';
import {useTitle} from '../../utils/useTitle.js';
import {LoginForm, LoginPageContainer, LoginSection} from './styles.js';
import {Button} from '../../components/Button/Button.jsx';
import {LoginHeader} from "../../components/LoginHeader/LoginHeader.jsx";

export function LoginPage({ title }) {
    useTitle(title);
    const navigate = useNavigate();
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);
    const [allPlayers, setAllPlayers] = useState([]);

    const { data: playersData, isLoading: isLoadingPlayers, error: playersError } = useQuery({
        queryKey: ['allPlayersForLogin'],
        queryFn: getAllPlayers,
    });

    useEffect(() => {
        if (playersData) {
            setAllPlayers(playersData);
        }
    }, [playersData]);

    const handlePlayerSelect = (value) => {
        setSelectedPlayerId(value);
    };

    const handleLogin = () => {
        if (selectedPlayerId) {
            const selectedPlayer = allPlayers.find(p => p.id === selectedPlayerId);
            if (selectedPlayer) {
                localStorage.setItem('loggedInUser', JSON.stringify(selectedPlayer));
                window.dispatchEvent(new Event('userChanged')); // Notify header and nav bar
                navigate('/');
            }
        } else {
            alert("Por favor, selecione um jogador.");
        }
    };

    useEffect(() => {
        if (localStorage.getItem('loggedInUser')) {
            navigate('/');
        }
    }, [navigate]);


    return (
        <LoginPageContainer>
            <LoginHeader />
            <LoginSection>
                <PageTitle text="Login" subtitle="Selecione seu nome para continuar" />
                <LoginForm>
                    {!isLoadingPlayers && !playersError && (
                        <>
                            <label>Jogador</label>
                            <Select
                                showSearch
                                style={{ width: '100%', marginBottom: '20px' }}
                                placeholder="Selecione um jogador"
                                onChange={handlePlayerSelect}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={allPlayers.map(player => ({
                                    value: player.id,
                                    label: player.name,
                                }))}
                                size="large"
                                value={selectedPlayerId}
                            />
                        </>
                    )}
                </LoginForm>
                <Button onClick={handleLogin} disabled={!selectedPlayerId || isLoadingPlayers}>
                    Log In
                </Button>
            </LoginSection>
        </LoginPageContainer>
    );
}