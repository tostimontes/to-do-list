import { format, getYear, getDate, getMonth } from "date-fns";

const now = new Date();
function convertStringToDateAndTime(str) {
    const [ hours, minutes, day, month, year ] = str.split("-").map(Number);
    
    let time;
    let date;
    if (hours !== 99 && minutes !== 99) {
        time = new Date(year, month, day, hours, minutes);
        time = format(time, "H:mm");
    }

    date = new Date(year + 2000, month -1, day);
    date = format(date, "dd MMM yy");
    format(now, "yy") === date.slice(-2) ? date = date.slice(0, -3): null;
    format(now, "dd MMM") === date ? date = "Today": null;
    date.charAt(0) === "0" ? date = date.slice(1): null;

    time !== undefined ? date = `${time}, ${date}`: null;

    return date;
}


// let string = "99-99-04-12-24"
// let todayDate = "09-43-19-01-24"
// let randomDate = "04-00-01-01-24";

// console.log(convertStringToDateAndTime(string));
// console.log(convertStringToDateAndTime(todayDate));
// console.log(convertStringToDateAndTime(randomDate));
// console.log(format(now, "yy"));

// create function to parse string for object from date

export default convertStringToDateAndTime;