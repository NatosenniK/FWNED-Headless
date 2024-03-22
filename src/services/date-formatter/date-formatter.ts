// In dateUtils.js or formatDateService.js
export function formatDate(isoDateString: string): string {
    const date = new Date(isoDateString); // WordPress date in UTC
    const now = new Date(); // Current time

    // Calculate difference in milliseconds
    const difference = now.getTime() - date.getTime();

    // Calculate days, hours, and minutes from difference
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    // Return formatted string based on the difference
    if (days > 0 && days < 365) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (days >= 365) {
        // Formatting the date for display, assuming you want local time display
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `Just now`;
    }
}
