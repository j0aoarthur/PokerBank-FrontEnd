import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Container} from "./components/Container/Container.jsx";
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {NewGamePage} from "./pages/NewGamePage/NewGamePage.jsx";
import {AddPlayerPage} from "./pages/AddPlayerPage/AddPlayerPage.jsx";
import {GameDetailsPage} from "./pages/GameDetailsPage/GameDetailsPage.jsx";
import {RankingPage} from "./pages/RankingPage/RankingPage.jsx";

const router = createHashRouter([
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
                        path:"/game",
                        element: <NewGamePage title={"Nova Partida"}/>,
                    },
                    {
                        path:"/game/:gameId",
                        element: <GameDetailsPage title={"Partida"}/>
                    },
                    {
                        path:"/game/:gameId/player",
                        element: <AddPlayerPage title={"Adicionar Jogador"}/>,
                    },
                    {
                        path:"/ranking",
                        element: <RankingPage title={"Ranking"}/>,
                    },

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
