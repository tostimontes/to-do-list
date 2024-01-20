import { format, getYear, getDate, getMonth } from "date-fns";

const now = new Date();
function convertStringToDateAndTime(str) {
  const [hours, minutes, day, month, year] = str.split("-").map(Number);

  let time;
  let date;
  if (hours !== 99 && minutes !== 99) {
    time = new Date(year, month, day, hours, minutes);
    time = format(time, "H:mm");
  }

  date = new Date(year + 2000, month - 1, day);
  date = format(date, "dd MMM yy");
  format(now, "yy") === date.slice(-2) ? (date = date.slice(0, -3)) : null;
  format(now, "dd MMM") === date ? (date = "Today") : null;
  date.charAt(0) === "0" ? (date = date.slice(1)) : null;

  time !== undefined ? (date = `${time}, ${date}`) : null;

  return date;
}

function convertInputValueToDueDateString(input) {
  const date = new Date(input);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().substr(-2);

  return `${hours}-${minutes}-${day}-${month}-${year}`;
}

export { convertStringToDateAndTime, convertInputValueToDueDateString };
