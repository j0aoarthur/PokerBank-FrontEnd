import {axiosInstance} from "./axiosInstance.js";

export const getRanking = async () => {
    const response = await axiosInstance.get("/ranking")
    return response.data
}

export const getTopRanking = async () => {
    const response = await axiosInstance.get("/ranking/top")
    return response.data
}

export const getAllGames = async () => {
    const response = await axiosInstance.get("/games")
    return response.data
}

export const getLatestGames = async () => {
    const response = await axiosInstance.get("/games/latest")
    return response.data
}

export const addGame = async (gameData) => {
    const response = await axiosInstance.post("/games", gameData)
    return response.data
}

export const addPlayerToGame = async (playerGameData) => {
    const response = await axiosInstance.post("/games/add-player", playerGameData)
    return response.data
}

export const getPlayersOfGame = async (gameId) => {
    const response = await axiosInstance.get(`/games/${gameId}/players`)
    return response.data
}

export const getPlayerDetails = async (gameId, playerId) => {
    const response = await axiosInstance.get(`/games/${gameId}/players/${playerId}`)
    return response.data
}

export const getGameDetails = async (gameId) => {
    const response = await axiosInstance.get(`/games/${gameId}`)
    return response.data
}

export const getAllPlayers = async () => {
    const response = await axiosInstance.get("/players")
    return response.data
}

export const getPlayersNotInGame = async (gameId) => {
    const response = await axiosInstance.get(`/players/not-in-game/${gameId}`)
    return response.data
}
