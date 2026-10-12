const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) return 'th';

    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Formats an ISO date string like "2024-03-14T15:09:26.000Z"
// into "March 14th at 3:09pm" (in the user's local time).
export function formatDate(isoString) {
    const date = new Date(isoString);

    const month = MONTHS[date.getMonth()];
    const day = date.getDate();

    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const period = hours24 < 12 ? 'am' : 'pm';

    return `${month} ${day}${getOrdinalSuffix(day)} at ${hours12}:${minutes}${period}`;
}
