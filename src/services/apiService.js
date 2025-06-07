import {axiosInstance} from "./axiosInstance.js";

export const getRanking = async () => {
    const response = await axiosInstance.get("/ranking")
    return response.data
}

export const getTopRanking = async () => {
    const response = await axiosInstance.get("/ranking/top")
    return response.data
}

export const getAllGames = async ({page, size}) => {
    const response = await axiosInstance.get("/games", {
        params: {
            page,
            size,
        }
    });
    return response.data
}

export const getExpiredGames = async () => {
    const response = await axiosInstance.get("/payment/expired-games")
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

export const getPaymentSuggestion = async (gameId) => {
    const response = await axiosInstance.get(`/payment/suggestion/${gameId}`)
    return response.data
}

export const createPlayer = async (playerData) => {
    const response = await axiosInstance.post("/players", playerData);
    return response.data;
}

export const addChip = async (chipData) => {
    const response = await axiosInstance.post("/chips", chipData);
    return response.data;
}

export const getChips = async () => {
    const response = await axiosInstance.get("/chips");
    return response.data;
}

export const makePayment = async (paymentData) => {
    const response = await axiosInstance.post("/payment", paymentData);
    return response.data;
};

export const getPlayerGameDetails = async (gameId, playerId) => {
    const response = await axiosInstance.get(`/games/${gameId}/players/${playerId}`);
    return response.data;
};

export const updatePlayerInGame = async (gameId, playerId, playerGameData) => {
    const response = await axiosInstance.put(`/games/${gameId}/players/${playerId}`, playerGameData);
    return response.data;
}