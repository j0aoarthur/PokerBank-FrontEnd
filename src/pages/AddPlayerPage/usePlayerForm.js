import {useState} from "react";
import {useParams} from "react-router-dom";

export function usePlayerForm() {
    const { gameId } = useParams();
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
                    // Update existing chip
                    const updatedChips = [...prevState.chips];
                    updatedChips[existingChipIndex] = { ...updatedChips[existingChipIndex], quantity: value };
                    return { ...prevState, chips: updatedChips };
                } else {
                    // Add new chip
                    return { ...prevState, chips: [...prevState.chips, { chipId: field, quantity: value }] };
                }
            }
            return prevState;
        });
    };

    return { formData, handleInputChange };
}