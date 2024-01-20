import {
  format,
  addDays,
  subDays,
  differenceInDays,
  isAfter,
  isBefore,
  parseISO,
} from "date-fns";
import { setTodoList } from "./todoGenerator.js";
import { updateCategories } from "./updateUI.js";
import { convertInputValueToDueDateString } from "./dateConverter.js";

const todoItemsList = [];

// function getTodoItems() {
//   todoItemsList = [];
//   for (const item in localStorage) {
//       todoItemsList.push(JSON.parse(localStorage.getItem(item)))
//     }
// }

function createTodoObject(form) {
  const newTodoObject = {};
  newTodoObject.title = form.querySelector("#new_item_title_input").value;
  newTodoObject.description = form.querySelector(
    "#new_item_description_input"
  ).value;
  form.querySelector("#new_item_due_date_input").value
   === ""
    ? (newTodoObject.dueDate = "")
    : (newTodoObject.dueDate = convertInputValueToDueDateString(
        form.querySelector("#new_item_due_date_input").value
      ));
  newTodoObject.priority = form
    .querySelector(".selected_priority")
    .textContent.toLowerCase();
  newTodoObject.category = form.querySelector("#category_dropdown").value;
  newTodoObject.project = form.querySelector("#project_dropdown").value;
  newTodoObject.status = "pending";

  setTodoItem(newTodoObject);
}

function setTodoItem(object) {
  todoItemsList.push(object);
  localStorage.setItem(
    `${object.project}: ${object.title}`,
    JSON.stringify(object)
  );
  updateCategories();
}


function deleteTodoItem(object) {
  const indexForRemoval = todoItemsList.findIndex(
    (item) =>
      `${item.title} in ${item.project}` ===
      `${object.title} in ${object.project}`
  );
  todoItemsList.splice(indexForRemoval, 1);
  localStorage.removeItem(`${object.project}: ${object.title}`);
}

// TODO: add REMOVE button on hover todos checkbox && projects (projects should display remove button only on hover) + AEL

function editTodoItem(oldObject, newObject) {
  deleteTodoItem(oldObject);
  setTodoItem(newObject);
}

// TODO: at the end of displayDetails function, add behavior: old should store
// TODO: attention to close behavior, before any detailsDisplay.innerHTML == "", ther should be a editTodoItem trigger

// TODO: attention: any edit, removal, or set should updateUI

// each category is an index in an array
// in projects (which is an array), each index corresponds to a category
// each category array hosts projects arrays, which host todo objects

export {
  setTodoItem,
  editTodoItem,
  deleteTodoItem,
  todoItemsList,
  createTodoObject,
};
