import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {addPlayerToGame} from "../../services/apiService.js";
import {useMutation} from "@tanstack/react-query";

export function usePlayerForm() {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        gameId: gameId,
        playerId: null,
        initialCash: null,
        chips: [],
    });

    const handleInputChange = (field, value) => {
        setFormData((prevState) => {
            if (field === "playerId" || field === "initialCash") {
                return {
                    ...prevState,
                    [field]: value,
                };
            } else if (typeof field === "number") {
                const existingChipIndex = prevState.chips.findIndex((chip) => chip.chipId === field);
                if (existingChipIndex !== -1) {
                    const updatedChips = [...prevState.chips];
                    updatedChips[existingChipIndex] = { ...updatedChips[existingChipIndex], quantity: value };
                    return { ...prevState, chips: updatedChips };
                } else {
                    return { ...prevState, chips: [...prevState.chips, { chipId: field, quantity: value }] };
                }
            }
            return prevState;
        });
    };

    const { mutate: addPlayerMutate, isPending: isAddingPlayer } = useMutation({
        mutationFn: addPlayerToGame,
        onSuccess: (data, variables) => {
            if (variables.redirect) {
                navigate(`/game/${formData.gameId}`);
            } else {
                alert("Jogador adicionado com sucesso!");
                window.location.reload();
            }
        },
        onError: (error) => {
            console.error("Erro ao adicionar jogador:", error);
            alert(`Erro ao adicionar jogador: ${error.message || "Verifique o console."}`);
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

        addPlayerMutate({ ...formData, redirect });
    };

    return { formData, handleInputChange, handleSubmit, isAddingPlayer };
}