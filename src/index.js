import { renderInitialUI, createDialogs } from "./initialUI.js";
import { updateCategories, updateProjectItemsDisplay, displayDetails } from "./updateUI.js";
import { createTodoObject, todoItemsList, setTodoItem } from "./defaultSetup.js";
import { setTodoList } from "./todoGenerator.js";

renderInitialUI();

for (const item of setTodoList) {
    setTodoItem(item);
}


updateCategories();
// updateProjectItemsDisplay()


