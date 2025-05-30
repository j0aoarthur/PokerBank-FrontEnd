import {useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {addChip, createPlayer, getChips} from "../../services/apiService.js";

export function useAdminForm() {
    const [newPlayerName, setNewPlayerName] = useState("");
    const [newChipName, setNewChipName] = useState("");
    const [newChipValue, setNewChipValue] = useState("");

    const { data: existingChips } = useQuery({
        queryKey: ["chipsData"],
        queryFn: getChips,
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

    const handleAddPlayerSubmit = (event) => {
        event.preventDefault();
        if (!newPlayerName.trim()) {
            alert("Por favor, insira o nome do jogador.");
            return;
        }
        createPlayerMutate({ name: newPlayerName });
    };

    const handleAddChipSubmit = (event) => {
        event.preventDefault();
        if (!newChipName.trim() || !newChipValue.trim()) {
            alert("Por favor, preencha o nome da cor e o valor da ficha.");
            return;
        }
        const value = parseFloat(newChipValue);
        if (isNaN(value) || value <= 0) {
            alert("Por favor, insira um valor numérico positivo para a ficha.");
            return;
        }
        addChipMutate({ color: newChipName, value });
    };

    return {
        newPlayerName,
        handlePlayerNameChange,
        newChipName,
        newChipValue,
        handleNewChipNameChange,
        handleNewChipValueChange,
        existingChips,
        handleAddPlayerSubmit,
        isCreatingPlayer,
        handleAddChipSubmit,
        isAddingChip
    };
}