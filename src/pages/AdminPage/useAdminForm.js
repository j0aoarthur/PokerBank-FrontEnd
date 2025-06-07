import {useId, useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {addChip, createPlayer, getAllPlayers, getChips} from "../../services/apiService.js";

export function useAdminForm() {
    const id = useId();
    const [newPlayerName, setNewPlayerName] = useState("");
    const [newChipName, setNewChipName] = useState("");
    const [newChipColor, setNewChipColor] = useState("");
    const [newChipValue, setNewChipValue] = useState("");

    const { data: existingChips } = useQuery({
        queryKey: ["chipsData"],
        queryFn: getChips,
    });

    const {data: existingPlayers} = useQuery({
        queryKey: ["allPlayers"],
        queryFn: getAllPlayers,
    });

    const { mutate: createPlayerMutate, isPending: isCreatingPlayer } = useMutation({
        mutationFn: createPlayer,
        onSuccess: () => {
            alert("Jogador cadastrado com sucesso!");
            window.location.reload();
        },
        onError: (error) => {
            console.error("Erro ao cadastrar jogador:", error);
            alert(`Erro ao cadastrar jogador: ${error.message || "Verifique o console."}`);
        }
    });

    const { mutate: addChipMutate, isPending: isAddingChip } = useMutation({
        mutationFn: addChip,
        onSuccess: () => {
            alert("Ficha adicionada com sucesso!");
            window.location.reload();
        },
        onError: (error) => {
            console.error("Erro ao adicionar ficha:", error);
            alert(`Erro ao adicionar ficha: ${error.message || "Verifique o console."}`);
        }
    });

    const handlePlayerNameChange = (event) => {
        setNewPlayerName(event.target.value);
    };

    const handleNewChipNameChange = (event) => {
        setNewChipName(event.target.value);
    };

    const handleNewChipValueChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        if (value) {
            const formattedValue = (parseInt(value, 10) / 100).toFixed(2);
            setNewChipValue(formattedValue);
        } else {
            setNewChipValue("");
        }
    };

    const handleNewChipColorChange = (event) => {
        const value = event.target.value;
        setNewChipColor(value);
    };

    const handleAddPlayer = (event) => {
        event.preventDefault();
        if (!newPlayerName.trim()) {
            alert("Por favor, insira o nome do jogador.");
            return;
        }
        createPlayerMutate({ name: newPlayerName });
    };

    const handleAddChip = (event) => {
        event.preventDefault();
        if (!newChipName.trim() || !newChipValue.trim() || !newChipColor.trim()) {
            alert("Por favor, preencha o nome, o valor e a cor da ficha.");
            return;
        }
        const value = parseFloat(newChipValue);
        if (isNaN(value) || value <= 0) {
            alert("Por favor, insira um valor numérico positivo para a ficha.");
            return;
        }
        if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(newChipColor.trim())) {
            alert("Por favor, insira uma cor válida no formato hexadecimal (ex: #FF0000, #FFF).");
            return;
        }

        addChipMutate({ color: newChipName, value, colorHex: newChipColor });
    };

    return {
        id,
        newPlayerName,
        handlePlayerNameChange,
        newChipName,
        newChipValue,
        newChipColor,
        handleNewChipNameChange,
        handleNewChipValueChange,
        handleNewChipColorChange,
        existingChips,
        existingPlayers,
        handleAddPlayer,
        isCreatingPlayer,
        handleAddChip,
        isAddingChip,
    };
}