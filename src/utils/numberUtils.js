// function to get a number and return it as BRL
export function formatNumberToBRL(number) {
    const numberFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return numberFormat.format(number);
}