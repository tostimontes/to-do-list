import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import { todoItemsList } from "./defaultSetup.js";
import allImages from "./image_bundler.js";
import convertStringToDateAndTime from "./dateConverter.js";

const sidebar = document.querySelector("#sidebar");
const header = document.querySelector("#header");
const mainDisplay = document.querySelector("#main_display");
const footer = document.querySelector("#footer");
const element = document.querySelector("selector");
const categoriesPanel = document.querySelector("#categories_panel");
const projectDisplay = document.querySelector("#project_display");

// JUST TAKE ALL TODO ITEMS AND CREATE CATEGORIES FOR ALL ITS CLASSES EACH TIMES AND SORT
// this only generates the UI cards, another function should take care of the display none/block
// this creates the main list, when clicked on a project's item, in the edit panel the full thing is cde created and displayed
function updateCategories() {
  const categoriesPanel = document.querySelector("#categories_panel");

  categoriesPanel.innerHTML = "";

  const generalCategory = createDOMElement(
    "h3",
    { class: "sidebar custom_category_titles custom_categories",
    id: "general_category" },
    "GENERAL"
  );
  categoriesPanel.append(generalCategory);
  for (const item of todoItemsList) {
    if (
      !categoriesPanel.querySelector(
        `[data-project="${item.category.toLowerCase()}:${item.project.toLowerCase()}"]`
      ) &&
      item.category.toLowerCase() !== "general"
    ) {
      const sidebarProjectTitle = createDOMElement(
        "p",
        {
          class: "sidebar project_titles",
        },
        `${item.project}`
      );
      sidebarProjectTitle.dataset.project = `${item.category.toLowerCase()}:${item.project.toLowerCase()}`;
      sidebarProjectTitle.addEventListener(
        "click",
        updateProjectItemsDisplay(item.project)
      );

      // TODO: SET GENERAL CATEGORY AS DEFAULT, SO THAT ALL GENERAL CATEGORY TODO ITEMS DONT CREATE A PROJECT AND GO AS CHILDREN OG GENERAL CATEGORY/PROJECT

      if (
        !categoriesPanel.querySelector(
          `#${item.category.toLowerCase()}_category`
        )
      ) {
        const customCategoryDiv = createDOMElement("div", {
          class: "sidebar custom_categories",
          id: `${item.category.toLowerCase()}_category`,
        });
        const customCategoryTitle = createDOMElement(
          "h3",
          { class: "sidebar custom_category_titles" },
          `${item.category.toUpperCase()}`
        );
        customCategoryDiv.append(customCategoryTitle);
        categoriesPanel.append(customCategoryDiv);
      }
      categoriesPanel
        .querySelector(`#${item.category.toLowerCase()}_category`)
        .appendChild(sidebarProjectTitle);
    }
  }
}

function updateProjectItemsDisplay(project) {
  const projectItems = todoItemsList.filter(
    (item) =>
      `${item.category.toLowerCase()}:${item.project.toLowerCase()}` ===
      `${project.id}`
  );

  for (const item of projectItems) {
    const itemDiv = createDOMElement("div", {
      class: `item_div ${item.project}`,
      id: `${item.title}`,
    });
    const itemCheckbox = createDOMElement("img", {
      class: `button checkbox ${item.project}`,
      id: `${item.title}_checkbox`,
      src: `${allImages["SVGs"]["checkbox.svg"]}`,
    });
    itemCheckbox.addEventListener("click", completeTodoItem(item));

    if (item.priority.toLowerCase() === "important") {
      const importantIcon = createDOMElement("img", {
        class: "urgent",
        src: `${allImages["SVGs"]["urgent.svg"]}`,
      });
      itemDiv.append(importantIcon);
    }
    if (item.dueDate !== "") {
      const dueDateDisplay = createDOMElement(
        "p",
        { class: "due_date", id: `${item.title}_due_date` },
        convertStringToDateAndTime(item.dueDate)
      );
      itemDiv.append(dueDateDisplay);
    }
    const itemTitle = createDOMElement(
      "p",
      { class: "item_title", id: `${item.title.toLowerCase()}` },
      `${item.title}`
    );
    itemTitle.addEventListener("click", displayDetails(item));

    itemDiv.append(itemTitle);

    item.status === "completed" ? completeTodoItem(item) : null;
  }
}

function displayDetails(item) {
  // create elements && append to editPanel
  // store pre-edit values
  // in case no edit, abort edit function
}

function completeTodoItem(item) {
  // add completed class --> completed class automatically goes down
  // item.classList.remove("completed");
  // updateProjectItemsDisplay(item.project);
}

// TODO: create function for completed  ;
// updatetodo item display editable with full description

// create items with none display
// create categories
// create projects

export { updateCategories, updateProjectItemsDisplay };
