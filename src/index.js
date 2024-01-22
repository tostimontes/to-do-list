import { getTodoItems } from "./appLogicFunctions.js";
import { renderInitialUI } from "./initialUI.js";
import { updateCategories } from "./updateUI.js";

renderInitialUI();

getTodoItems();

updateCategories();
