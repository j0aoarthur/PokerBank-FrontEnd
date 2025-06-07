import {QuantityButton, QuantityInput, QuantityInputGroup} from "./styles.js";
import React, {useEffect, useState} from "react";

export function ChipQuantityControl({initial, min = 0, max = 100, onChange}) {
    const [value, setValue] = useState(initial);

    useEffect(() => {
        setValue(initial);
    }, [initial]);

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
        const parsed = raw === "" ? setValue(min) : parseInt(raw, 10);
        if (parsed === "" || !isNaN(parsed)) {
            if (parsed < min || parsed > max) return ;
            setValue(parsed);
        }
    };

    return (
        <QuantityInputGroup>
            <QuantityButton onClick={handleDecrement}>-</QuantityButton>
            <QuantityInput
                inputMode={"numeric"}
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
            />
            <QuantityButton onClick={handleIncrement}>+</QuantityButton>
        </QuantityInputGroup>
    );
}