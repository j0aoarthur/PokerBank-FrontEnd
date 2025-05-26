import React from 'react';

export function Spinner({ size = 48 }) {
    // Converte o tamanho para uma string CSS válida (ex: 24 -> "24px", "2em" -> "2em")
    const spinnerSize = typeof size === 'number' ? `${size}px` : size;

    // Calcula a largura da borda dinamicamente com base no tamanho.
    // Usa a função CSS max() para garantir uma largura mínima de 1px.
    const borderWidth = `max(1px, calc(${spinnerSize} / 8))`;

    const style = {
        display: 'inline-block',
        width: spinnerSize,
        height: spinnerSize,
        borderWidth: borderWidth,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.1)', // Cor da "trilha" do spinner (cinza claro)
        borderTopColor: 'var(--black-color)', // Cor da parte ativa do spinner (usa a variável CSS)
        borderRadius: '50%',
        animation: 'spinner-spin 1s linear infinite', // Nome da animação definida no CSS global
        boxSizing: 'border-box', // Garante que a borda não aumente o tamanho total
    };

    return (
        <div
            style={style}
            role="status"
            aria-live="polite"
            aria-label="Carregando" // Para acessibilidade
        >
        </div>
    );
}