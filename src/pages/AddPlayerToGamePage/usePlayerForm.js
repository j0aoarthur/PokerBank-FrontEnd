import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {addPlayerToGame, getPlayerGameDetails, updatePlayerInGame} from "../../services/apiService.js";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

export function usePlayerForm() {
    const { gameId, playerId: playerIdFromParams } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!playerIdFromParams;
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        gameId: gameId,
        playerId: isEditMode ? playerIdFromParams : "",
        initialCash: null,
        chips: [],
    });
    const [currentPlayerName, setCurrentPlayerName] = useState("");

    // Detalhes do jogador na partida se estiver em modo de edição
    const { data: playerGameDetails, isLoading: isLoadingPlayerGameDetails } = useQuery({
        queryKey: ["playerGameDetails", gameId, playerIdFromParams],
        queryFn: () => getPlayerGameDetails(gameId, playerIdFromParams),
        enabled: isEditMode && !!gameId && !!playerIdFromParams,
    });

    useEffect(() => {
        if (isEditMode && playerGameDetails) {
            setFormData({
                gameId: gameId,
                playerId: playerIdFromParams,
                initialCash: playerGameDetails.initialCash.toString(),
                chips: playerGameDetails.chips ? playerGameDetails.chips.map(chip => ({
                    chipId: chip.chipId,
                    quantity: chip.quantity || 0,
                })) : [],
            });
            setCurrentPlayerName(playerGameDetails.playerName)
        }
    }, [isEditMode, playerGameDetails, gameId, playerIdFromParams]);


    const handleInputChange = (field, value) => {
        setFormData((prevState) => {
            if (field === "playerId" || field === "initialCash") {
                return {
                    ...prevState,
                    [field]: value,
                };
            } else if (typeof field === "number" || (typeof field === 'string' && !isNaN(parseInt(field)) ) ) { // Chip IDs can be numbers or strings from keys
                const chipIdAsNumber = parseInt(field);
                const existingChipIndex = prevState.chips.findIndex((chip) => chip.chipId === chipIdAsNumber);
                let updatedChips;
                if (existingChipIndex !== -1) {
                    updatedChips = [...prevState.chips];
                    updatedChips[existingChipIndex] = { ...updatedChips[existingChipIndex], quantity: parseInt(value) };
                } else {
                    updatedChips = prevState.chips.map(ch => ch.chipId === chipIdAsNumber ? {...ch, quantity: parseInt(value)} : ch);
                    if (!updatedChips.find(ch => ch.chipId === chipIdAsNumber)) {
                        updatedChips.push({ chipId: chipIdAsNumber, quantity: parseInt(value) });
                    }
                }
                return { ...prevState, chips: updatedChips };
            }
            return prevState;
        });
    };

    const { mutate: addOrUpdatePlayerMutate, isPending: isSubmitting } = useMutation({
        mutationFn: async (variables) => {
            if (variables.isEditMode) {
                const { gameId: currentSubGameId, playerId: currentSubPlayerId, initialCash, chips } = variables.playerGameData;
                return updatePlayerInGame(currentSubGameId, currentSubPlayerId, { initialCash, chips });
            } else {
                return addPlayerToGame(variables.playerGameData);
            }
        },
        onSuccess: (data, variables) => {
            const message = variables.isEditMode ? "Jogador atualizado com sucesso!" : "Jogador adicionado com sucesso!";
            alert(message);
            queryClient.invalidateQueries({queryKey: ["playersNotInGame", gameId]})
            setCurrentPlayerName("")
            if (variables.redirect) {
                navigate(`/game/${formData.gameId}`);
            } else {
                if (variables.isEditMode) {
                    navigate(`/game/${formData.gameId}`);
                } else {
                    setFormData({
                        gameId: gameId,
                        playerId: null,
                        initialCash: null,
                        chips: [],
                    });
                }
            }
        },
        onError: (error) => {
            const action = isEditMode ? "atualizar" : "adicionar";
            console.error(`Erro ao ${action} jogador:`, error);
            alert(`Erro ao ${action} jogador: ${error.message || "Verifique o console."}`);
        }
    });

    const handleSubmit = (redirect = false) => {
        if (!formData.playerId) {
            alert("Por favor, selecione um jogador.");
            return;
        }

        if (!formData.initialCash || parseFloat(formData.initialCash) <= 0) {
            alert("Por favor, insira uma banca inicial válida.");
            return;
        }

        const chipsToSubmit = formData.chips.map(chip => ({
            chipId: chip.chipId,
            quantity: chip.quantity || 0
        }));

        const submissionData = {
            ...formData,
            chips: chipsToSubmit,
            initialCash: parseFloat(formData.initialCash)
        };

        addOrUpdatePlayerMutate({
            playerGameData: submissionData,
            redirect,
            isEditMode
        });
    };

    return {
        formData,
        handleInputChange,
        handleSubmit,
        isSubmitting,
        isEditMode,
        currentPlayerName,
        isLoadingData: isEditMode && (isLoadingPlayerGameDetails),
    };
}