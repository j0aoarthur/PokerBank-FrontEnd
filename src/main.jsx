import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Container} from "./components/Container/Container.jsx";
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {NewGamePage} from "./pages/NewGamePage/NewGamePage.jsx";
import {AddPlayerToGamePage} from "./pages/AddPlayerToGamePage/AddPlayerToGamePage.jsx";
import {GameDetailsPage} from "./pages/GameDetailsPage/GameDetailsPage.jsx";
import {RankingPage} from "./pages/RankingPage/RankingPage.jsx";
import {AdminPage} from "./pages/AdminPage/AdminPage.jsx";
import {MakePaymentPage} from "./pages/MakePaymentPage/MakePaymentPage.jsx";
import {PlayerGameDetailsPage} from "./pages/PlayerGameDetailsPage/PlayerGameDetailsPage.jsx";
import {AllGamesPage} from "./pages/AllGamesPage/AllGamesPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Container/>,
                children: [
                    {
                        path:"",
                        element: <HomePage title={"Página Principal"}/>,
                    },
                    {
                        path:"game",
                        element: <NewGamePage title={"Nova Partida"}/>,
                    },
                    {
                        path:"game/:gameId",
                        element: <GameDetailsPage title={"Partida"}/>
                    },
                    {
                        path:"game/:gameId/player",
                        element: <AddPlayerToGamePage title={"Adicionar Jogador"}/>,
                    },
                    {
                        path:"game/:gameId/player/:playerId/edit",
                        element: <AddPlayerToGamePage />,
                    },
                    {
                        path:"game/:gameId/player/:playerId",
                        element: <PlayerGameDetailsPage />,
                    },
                    {
                        path:"game/:gameId/payment",
                        element: <MakePaymentPage title={"Realizar Pagamento"} />,
                    },
                    {
                        path:"ranking",
                        element: <RankingPage title={"Ranking"}/>,
                    },
                    {
                        path: "games",
                        element: <AllGamesPage title={"Todas as Partidas"} />
                    },
                    {
                        path:"admin",
                        element: <AdminPage title={"Administração"} />,
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)