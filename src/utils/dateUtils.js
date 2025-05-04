// function to format date
export function formatDate(dateString) {
    const [year, month, day] = dateString.split('-'); // Assuming dateString is in "YYYY-MM-DD" format
    const date = new Date(year, month - 1, day); // Month is zero-based
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('pt-BR', options);
}

// function to get day of the week
export function getDayOfWeek(dateString) {
    const [year, month, day] = dateString.split('-'); // Assuming dateString is in "YYYY-MM-DD" format
    const date = new Date(year, month - 1, day); // Month is zero-based
    const options = { weekday: 'long' };
    const dayOfWeek = date.toLocaleDateString('pt-BR', options);
    return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
}