// expected date format yyyy-mm-ddThh:mm
export const getTwelveHourTime = (fullDate: string): string => {
    let hourString = fullDate.slice(-5, -3);
    let hourNumber = parseInt(hourString, 10);

    if (hourNumber > 12) {
        hourNumber -= 12;
        hourString = 'pm';
    } else if (hourNumber === 12) {
        hourString = 'pm';
    } else if (hourNumber === 0) {
        hourString = 'am'
    } else {
        hourString = 'am';
    }

    return hourNumber + hourString.replace(/^0+/, "");
};
