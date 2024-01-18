import {
  format,
  addDays,
  subDays,
  differenceInDays,
  isAfter,
  isBefore,
  parseISO,
} from "date-fns";

const todoItem = {
  title: "title",
  decription: "description",
  "due date": "date",
  priority: "high/medium/low/optional",
  project: "",
  category: "",
};

// setTodoItem only creates, separate editing function, which should findIndex

// ITEM
function setTodoItem(
  object
) {
    const newTitle = object.title;
    const todoItem = object;
    localStorage.setItem(`${newTitle}`, JSON.stringify(todoItem));
}

const exampleItem = {
  title: "regar plantas",
  description: "una a una con cariño 50ml",
  dueDate: "14-57-08-11-28",
  priority: "low",
  project: "Jardín",
  category: "Personal"
};
const exampleItem2 = {
  title: "matar plantas",
  description: "una a una con cariño 50ml",
  dueDate: "14-57-09-11-28",
  priority: "high",
  project: "Jardín",
  category: "Personal"
};

setTodoItem(exampleItem);
console.log(localStorage);
// const newDueDate = JSON.parse(localStorage.getItem("regar plantas")).dueDate;
// console.log(newDueDate.split("-").map(Number));
// const [hours, minutes, day, month, year] = newDueDate.split("-").map(Number);
//  const date = new Date(year + 2000, month - 1, day, hours, minutes);
//  console.log(typeof(date));
//  console.log(format(date, "MMM-dd-yy"));
// function convertToStandardAppTime(dateString) {
//     const [hours, minutes, day, month, year] = dateStr.split("-").map(Number);
// }
// "MMM-dd-yyyy-HH-mm";

function editTodoItem(
  todoItem,
  {
    title,
    description,
    dueDate, // HH-mm-dd-MM-yy format
    priority,
    project,
    category,
  }
) {
  const itemToEdit = todoItem.project.findIndex(
    (item) =>
      item.title === todoItem.title &&
      item.project === todoItem.project &&
      item.category === todoItem.category
  );
  getFromStorage(storage[itemToEdit]);
  for (const key in itemToEdit) {
    for (const argument in object) {
      itemToEdit[key] = object[argument];
    }
  }
}

function deleteTodoItem(todoItem) {
  const itemToDelete = todoItem.project.findIndex(
    (item) =>
      item.title === todoItem.title &&
      item.project === todoItem.project &&
      item.category === todoItem.category
  );
  deleteFromStorage(storage[itemToEdit]);
}

// PROJECT

function setProject(params) {
  // create OR update item (object)
  // save to storage
}

// STORAGE

function saveToStorage(title, object) {
  localStorage.setItem("", "");
}

function getFromStorage() {}

function removeFromStorage() {}

// GLOBAL FUNCTIONS
function getCurrentTime() {
  return new Date();
}

// console.log(getCurrentTime());

// const now = new Date();

// console.log(now);
