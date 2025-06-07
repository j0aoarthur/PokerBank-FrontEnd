import React from 'react';

export function Spinner({ size = 48 }) {
    const spinnerSize = typeof size === 'number' ? `${size}px` : size;
    const borderWidth = `max(1px, calc(${spinnerSize} / 8))`;

    const style = {
        display: 'inline-block',
        width: spinnerSize,
        height: spinnerSize,
        borderWidth: borderWidth,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.1)', // Cor da "trilha" do spinner
        borderTopColor: 'var(--black-color)', // Cor da parte ativa do spinner
        borderRadius: '50%',
        animation: 'spinner-spin 1s linear infinite', // Nome da animação definida no CSS global
    };

    return (
        <div
            style={style}
            role="status"
            aria-live="polite"
            aria-label="Carregando"
        >
        </div>
    );
}