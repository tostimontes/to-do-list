import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import { todoItemsList, deleteProject } from "./defaultSetup.js";
import allImages from "./image_bundler.js";
import {convertStringToDateAndTime} from "./dateConverter.js";

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
    {
      class: "sidebar custom_category_titles custom_categories",
      id: "general_category",
    },
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
      sidebarProjectTitle.addEventListener("click", (e) => {
        updateProjectItemsDisplay(e.target);
      });
      const removalButton = createDOMElement("button", {class: "project_removal_buttons"}, "x");
      removalButton.addEventListener("click", (e) => {
        deleteProject(e.target.previousElementSibling);
      })
      
      const sidebarProjectDiv = createDOMElement("div", {class: "sidebar_project_div"});
      sidebarProjectDiv.append(sidebarProjectTitle, removalButton);

      sidebarProjectDiv.addEventListener("mouseenter", (e) => {
        e.target.querySelector("button").style.display = "inline-block";
      })
      sidebarProjectDiv.addEventListener("mouseleave", (e) => {
        e.target.querySelector("button").style.display = "none";
      })

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
        .append(sidebarProjectDiv);
    }
  }
}

function updateProjectItemsDisplay(project) {
  const projectDisplay = document.querySelector("#project_display");
  projectDisplay.innerHTML = "";
  const detailedDisplay = document.querySelector("#detail_display");
  detailedDisplay.innerHTML = "";

  const projectItems = todoItemsList.filter(
    (item) =>
      `${item.category.toLowerCase()}:${item.project.toLowerCase()}` ===
      `${project.dataset.project}`
  );

  for (const item of projectItems) {
    const itemDiv = createDOMElement("div", {
      class: "item_div",
    });
    itemDiv.dataset.project = `${item.category.toLowerCase()}:${item.project.toLowerCase()}`;
    const itemCheckbox = createDOMElement("img", {
      class: `button todo_checkbox_icon`,
      src: `${allImages["SVGs"]["checkbox.svg"]}`,
    });
    itemCheckbox.addEventListener("click", (e) => {
      completeTodoItem(e.target);
    });
    itemDiv.append(itemCheckbox);

    if (item.priority.toLowerCase() === "important") {
      // Create the SVG element
      const svgNS = "http://www.w3.org/2000/svg";
      let importantSVG = document.createElementNS(svgNS, "svg");
      importantSVG.setAttribute("viewBox", "0 0 24 24");

      // Create and append the title element
      let title = document.createElementNS(svgNS, "title");
      title.textContent = "Important";
      importantSVG.appendChild(title);

      // Create and append the path element
      let path = document.createElementNS(svgNS, "path");
      path.setAttribute(
        "d",
        "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"
      );
      importantSVG.appendChild(path);
      importantSVG.classList.add("urgent_icon");
      itemDiv.append(importantSVG);
    }
    if (item.dueDate !== "") {
      const dueDateDisplay = createDOMElement(
        "p",
        { class: "due_dates" },
        convertStringToDateAndTime(item.dueDate)
      );
      dueDateDisplay.dataset.dueDate = `${item.title}_due_date`;
      itemDiv.append(dueDateDisplay);
    }
    const itemTitle = createDOMElement(
      "p",
      { class: "item_titles" },
      `${item.title}`
    );
    itemTitle.dataset.title = `${item.title.toLowerCase()}`;
    itemTitle.addEventListener("click", (e) => {
      displayDetails(e.target);
    });

    itemDiv.append(itemTitle);

    projectDisplay.appendChild(itemDiv);

    item.status === "completed" ? completeTodoItem(item) : null;
  }
}

function displayDetails(item) {
  const detailedDisplay = document.querySelector("#detail_display");
  detailedDisplay.innerHTML = "";
  // Find item
  const itemForDisplay = todoItemsList.find(
    (todoObject) =>
      todoObject.title.toLowerCase() === item.dataset.title &&
      `${todoObject.category.toLowerCase()}:${todoObject.project.toLowerCase()}` ===
        item.parentElement.dataset.project
  );
  // create elements && append to editPanel
  const detailItemTitle = createDOMElement(
    "h2",
    { class: "detail detail_title" },
    `${itemForDisplay.title}`
  );
  const subtitleBox = createDOMElement("div", {
    class: "detail detail_subtitle_box",
  });
  // TODO: create and Put important icon next to title if important
  const detailItemDescription = createDOMElement(
    "p",
    { class: "detail detail_item_description" },
    `${itemForDisplay.description}`
  );
  let detailItemDueDate;
  if (itemForDisplay.dueDate !== "") {
    detailItemDueDate = createDOMElement(
      "p",
      { class: "detail detail_due_date" },
      convertStringToDateAndTime(itemForDisplay.dueDate)
    );
  }
  const detailPriority = createDOMElement(
    "p",
    { class: "detail detail_priority" },
    `${itemForDisplay.priority}`
  );
  if (detailItemDueDate !== undefined) {
    subtitleBox.append(detailPriority, detailItemDueDate);
  } else {
    subtitleBox.append(detailPriority);
  }

  detailedDisplay.append(detailItemTitle, subtitleBox, detailItemDescription);

  // TODO: store pre-edit values
  // TODO: in case no edit, abort edit function
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

export { updateCategories, updateProjectItemsDisplay, displayDetails };
