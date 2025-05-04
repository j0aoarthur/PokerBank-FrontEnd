import {CircleButton, NumberDisplay, NumberInputContainer} from "./styles.js";
import {useEffect, useState} from "react";
import {FiMinus, FiPlus} from "react-icons/fi";

export function NumberInput({initial = 0, min = 0, max = 100, onChange}) {
    const [value, setValue] = useState(initial);

    // Notify parent of value changes
    useEffect(() => {
        if (onChange) {
            onChange(value);
        }
    }, [value]);

    const handleIncrement = () => {
        setValue(prev => {
            const next = prev + 1;
            if (next > max) return prev;
            return next;
        });
    };

    const handleDecrement = () => {
        setValue(prev => {
            const next = prev - 1;
            if (next < min) return prev;
            return next;
        });
    };

    const handleChange = (e) => {
        const raw = e.target.value;
        const parsed = raw === "" ? "" : parseInt(raw, 10);
        if (parsed === "" || !isNaN(parsed)) {
            if (parsed < min || parsed > max) return;
            setValue(parsed);
        }
    };

    return (
        <NumberInputContainer>
            <CircleButton onClick={handleDecrement}>
                <FiMinus/>
            </CircleButton>
            <NumberDisplay
                inputMode="numeric"
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
            />
            <CircleButton onClick={handleIncrement}>
                <FiPlus/>
            </CircleButton>
        </NumberInputContainer>
    );
}