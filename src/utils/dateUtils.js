// function to get day of the week
export function getDayOfWeek(dateString) {
    const [year, month, day] = dateString.split('-'); // Assuming dateString is in "YYYY-MM-DD" format
    const date = new Date(year, month - 1, day); // Month is zero-based
    const options = { weekday: 'long' };
    const dayOfWeek = date.toLocaleDateString('pt-BR', options);
    return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
}

// function to get the like Jul 15 from a date string
export function getMonthAndDay(dateString) {
    const [year, month, day] = dateString.split('-'); // Assuming dateString is in "YYYY-MM-DD" format
    const date = new Date(year, month - 1, day); // Month is zero-based
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

export function formatFullDate(dateString) {
    const [year, month, day] = dateString.split('-'); // Assuming dateString is in "YYYY-MM-DD" format
    const date = new Date(year, parseInt(month) - 1, day); // Month is zero-based
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('pt-BR', options);

    // Capitalize the first letter of the weekday and month
    const parts = formattedDate.split(', ');
    const dayOfWeek = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    const restOfDate = parts[1].split(' de ');
    const dayOfMonth = restOfDate[0];
    const monthName = restOfDate[1].charAt(0).toUpperCase() + restOfDate[1].slice(1);

    return `${dayOfWeek}, ${dayOfMonth} de ${monthName}`;
}

export function getLongDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}


