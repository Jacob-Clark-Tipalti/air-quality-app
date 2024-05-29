// expected date format yyyy-mm-ddThh:mm
export const getTwelveHourTime = (fullDate: string): string => {
    let hourString = fullDate.slice(-5, -3);
    let hourNumber = parseInt(hourString, 10);

    if (hourNumber > 12) {
        hourNumber -= 12;
        hourString += 'pm';
    } else if (hourNumber === 12) {
        hourString = '12pm';
    } else if (hourNumber === 0) {
        hourString = '12am'
    } else {
        hourString += 'am';
    }

    return hourString.replace(/^0+/, "");
};
