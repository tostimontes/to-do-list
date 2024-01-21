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
import { updateCategories, updateProjectItemsDisplay } from "./updateUI.js";
import { convertInputValueToDueDateString } from "./dateConverter.js";

const todoItemsList = [];

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
  const selectedProject = form.querySelector("#project_dropdown").selectedIndex;
  newTodoObject.project = form.querySelector("#project_dropdown")[selectedProject].textContent;
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
  updateProjectItemsDisplay(`${object.category}:${object.project}`);
  updateCategories();
}


function deleteProject(selectedProjectTitle) {
  const projectForRemoval = todoItemsList.filter(
    (item) =>
      `${item.category.toLowerCase()}:${item.project.toLowerCase()}` === selectedProjectTitle.dataset.project
  );
  for (const item of projectForRemoval) {
    deleteTodoItem(item);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export {
  setTodoItem,
  deleteTodoItem,
  todoItemsList,
  createTodoObject,
  deleteProject,
  capitalizeFirstLetter
};
