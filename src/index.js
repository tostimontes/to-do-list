import {
  format,
  addDays,
  subDays,
  differenceInDays,
  isAfter,
  isBefore,
  parseISO,
} from "date-fns";
import { renderInitialUI } from "./initialUI.js";

const todoItem = {
  title: "title",
  decription: "description",
  "due date": "date",
  priority: "high/medium/low/optional",
  project: "",
  category: "",
};

// ITEM

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
  dueDate: "14-57-09-00-08",
  priority: "high",
  project: "Jardín",
  category: "Personal"
};
const exampleItem2Modified = {
  title: "matar plantas",
  description: "de dos en dos sin cariño",
  dueDate: "14-00-09-00-08",
  priority: "medium",
  project: "Asssasin",
  category: "Personal"
};
function setTodoItem(
  object
) {
    localStorage.setItem(
      `${object.project}: ${object.title}`,
      JSON.stringify(object)
    );
}
function editTodoItem(oldObject, newObject) {
  deleteTodoItem(oldObject);
  setTodoItem(newObject);
}

function deleteTodoItem(object) {
  console.log();
  localStorage.removeItem(`${object.project}: ${object.title}`)
}

// PROJECT

// function setProject(params) {
//   // create OR update item (object)
//   // save to storage
// }

// GLOBAL FUNCTIONS
function getCurrentTime() {
  return new Date();
}

renderInitialUI();