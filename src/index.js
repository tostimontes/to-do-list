import { getTodoItems } from "./appLogicFunctions.js";
import { renderCategories, renderInitialUI } from "./initialUI.js";
import { updateCategories } from "./updateUI.js";

renderInitialUI();

getTodoItems();

updateCategories();

// TODO: completed and edit should set in storage and update todo array
// TODO: if last item of project deleted, update project display and breadcrumbs