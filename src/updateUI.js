import {
  todoItemsList,
  deleteProject,
  deleteTodoItem,
  capitalizeFirstLetter,
  createDOMElement
} from "./appLogicFunctions.js";
import allImages from "./image_bundler.js";
import {
  convertStringToDateAndTime,
  convertStringToDateTimeInput,
} from "./dateConverter.js";
import { createDialog, renderProjects } from "./initialUI.js";

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
  generalCategory.style.cursor = "pointer";
  generalCategory.addEventListener("click", (e) => {
    updateProjectItemsDisplay("general:general");
  });
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
        updateProjectItemsDisplay(e.target.dataset.project);
      });
      const removalButton = createDOMElement(
        "button",
        { class: "project_removal_buttons" },
        "x"
      );
      removalButton.addEventListener("click", (e) => {
        const header = document.querySelector("#header");
        let currentHeader;
        if (header.innerHTML !== "") {
          currentHeader = `${header
            .querySelector(".category_breadcrumb")
            .textContent.toLowerCase()}:${header
            .querySelector(".project_breadcrumb")
            .textContent.toLowerCase()}`;
        }
        const removalCategoryAndProject =
          e.target.previousElementSibling.dataset.project;
        deleteProject(e.target.previousElementSibling);
        if (currentHeader === removalCategoryAndProject) {
          header.innerHTML = "";
          document.querySelector("#project_display").innerHTML = "";
          document.querySelector("#completed_items_display").innerHTML = "";
        } else if (currentHeader === undefined) {
          header.innerHTML = "";
          document.querySelector("#project_display").innerHTML = "";
          document.querySelector("#completed_items_display").innerHTML = "";
        } else {
          updateProjectItemsDisplay(currentHeader);
        }
      });

      const sidebarProjectDiv = createDOMElement("div", {
        class: "sidebar_project_div",
      });
      sidebarProjectDiv.append(sidebarProjectTitle, removalButton);

      sidebarProjectDiv.addEventListener("mouseenter", (e) => {
        e.target.querySelector("button").style.display = "inline-block";
      });
      sidebarProjectDiv.addEventListener("mouseleave", (e) => {
        e.target.querySelector("button").style.display = "none";
      });

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

function updateProjectItemsDisplay(selectedProjectTitle) {
  const projectDisplay = document.querySelector("#project_display");
  projectDisplay.innerHTML = "";
  const pendingTitle = createDOMElement(
    "h2",
    { class: "main", id: "pending_project_display_title" },
    "Pending"
  );
  projectDisplay.append(pendingTitle);

  const completedItemsDisplay = document.querySelector(
    "#completed_items_display"
  );
  completedItemsDisplay.innerHTML = "";
  const completedTitle = createDOMElement(
    "h2",
    { class: "main", id: "completed_project_display_title" },
    "Completed"
  );
  completedItemsDisplay.append(completedTitle);

  const detailedDisplay = document.querySelector("#detail_display");
  detailedDisplay.innerHTML = "";

  const projectItems = todoItemsList.filter(
    (item) =>
      `${item.category.toLowerCase()}:${item.project.toLowerCase()}` ===
      selectedProjectTitle.toLowerCase()
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
      const itemToComplete = todoItemsList.find(
        (item) =>
          `${item.category.toLowerCase()}:${item.project.toLowerCase()}` ===
            e.target.parentElement.dataset.project &&
          `${item.title.toLowerCase()}` ===
            e.target.parentElement.querySelector(".item_titles").dataset.title
      );
      if (itemToComplete.status === "pending") {
        itemToComplete.status = "completed";
        localStorage.removeItem(
          `${itemToComplete.project}: ${itemToComplete.title}`
        );
        localStorage.setItem(
          `${itemToComplete.project}: ${itemToComplete.title}`,
          JSON.stringify(itemToComplete)
        );
      } else {
        itemToComplete.status = "pending";
        localStorage.removeItem(
          `${itemToComplete.project}: ${itemToComplete.title}`
        );
        localStorage.setItem(
          `${itemToComplete.project}: ${itemToComplete.title}`,
          JSON.stringify(itemToComplete)
        );
      }
      updateProjectItemsDisplay(
        `${itemToComplete.category.toLowerCase()}:${itemToComplete.project.toLowerCase()}`
      );
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
    const itemRemovalButton = createDOMElement(
      "button",
      { class: "item_removal_buttons" },
      "x"
    );
    itemRemovalButton.addEventListener("click", (e) => {
      const itemForRemoval = todoItemsList.find(
        (item) =>
          `${item.category.toLowerCase()}:${item.project.toLowerCase()}` ===
            e.target.parentElement.dataset.project &&
          `${item.title.toLowerCase()}` ===
            e.target.previousElementSibling.textContent.toLowerCase()
      );
      deleteTodoItem(itemForRemoval);
    });

    itemDiv.append(itemTitle, itemRemovalButton);

    itemDiv.addEventListener("mouseenter", (e) => {
      e.target.querySelector("button").style.display = "inline-block";
    });
    itemDiv.addEventListener("mouseleave", (e) => {
      e.target.querySelector("button").style.display = "none";
    });

    if (item.status === "completed") {
      itemDiv.style.textDecoration = "line-through";
      completedItemsDisplay.append(itemDiv);
    } else {
      projectDisplay.appendChild(itemDiv);
    }
  }

  // Breadcrumbs
  const categoryAndProject = selectedProjectTitle.split(":");
  const formattedProject = categoryAndProject[1]
    .split(" ")
    .map((string) => capitalizeFirstLetter(string));
  const categoryBreadcrumb = createDOMElement(
    "p",
    { class: "category_breadcrumb" },
    `${categoryAndProject[0].toUpperCase()}`
  );
  const angleBracket = createDOMElement(
    "div",
    { class: "angle_brackets" },
    ">"
  );

  const projectBreadcrumb = createDOMElement(
    "p",
    { class: "project_breadcrumb" },
    `${formattedProject.join(" ")}`
  );

  const breadcrumbsHeader = document.querySelector("#header");
  breadcrumbsHeader.innerHTML = "";
  breadcrumbsHeader.append(categoryBreadcrumb, angleBracket, projectBreadcrumb);
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
    { class: "detail", id: "detail_title" },
    `${itemForDisplay.title}`
  );
  detailItemTitle.dataset.project = `${itemForDisplay.category.toLowerCase()}:${itemForDisplay.project.toLowerCase()}`;
  const subtitleBox = createDOMElement("div", {
    class: "detail detail_subtitle_box",
  });
  const detailItemDescription = createDOMElement(
    "p",
    { class: "detail", id: "detail_item_description" },
    `${itemForDisplay.description}`
  );
  let detailItemDueDate;
  if (itemForDisplay.dueDate !== "") {
    detailItemDueDate = createDOMElement(
      "p",
      { class: "detail", id: "detail_due_date" },
      convertStringToDateAndTime(itemForDisplay.dueDate)
    );
  }
  const detailPriority = createDOMElement(
    "p",
    { class: "detail", id: "detail_priority" },
    `${itemForDisplay.priority
      .charAt(0)
      .toUpperCase()}${itemForDisplay.priority.slice(1)}`
  );
  if (detailItemDueDate !== undefined) {
    subtitleBox.append(detailPriority, detailItemDueDate);
  } else {
    subtitleBox.append(detailPriority);
  }

  // Create edit SVG element
  const svgNS = "http://www.w3.org/2000/svg";
  let editSVG = document.createElementNS(svgNS, "svg");
  editSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  editSVG.setAttribute("viewBox", "0 0 24 24");
  editSVG.setAttribute("id", "edit_button");

  // Create and append the title element
  let title = document.createElementNS(svgNS, "title");
  title.textContent = "Edit to-do item";
  editSVG.appendChild(title);

  // Create and append the path element
  let path = document.createElementNS(svgNS, "path");
  path.setAttribute(
    "d",
    "M10 19.11L12.11 17H7V15H14V15.12L16.12 13H7V11H17V12.12L18.24 10.89C18.72 10.41 19.35 10.14 20.04 10.14C20.37 10.14 20.7 10.21 21 10.33V5C21 3.89 20.1 3 19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H10V19.11M7 7H17V9H7V7M21.7 14.35L20.7 15.35L18.65 13.3L19.65 12.3C19.86 12.09 20.21 12.09 20.42 12.3L21.7 13.58C21.91 13.79 21.91 14.14 21.7 14.35M12 19.94L18.06 13.88L20.11 15.93L14.06 22H12V19.94Z"
  );
  editSVG.appendChild(path);

  editSVG.addEventListener("click", (e) => {
    createDialog(true);
    const form = document.querySelector("form");
    form.querySelector("#new_item_title_input").value =
      document.querySelector("#detail_title").textContent;
    form.querySelector("#new_item_description_input").value =
      document.querySelector("#detail_item_description").textContent;
    document.querySelector("#detail_due_date")
      ? (form.querySelector("#new_item_due_date_input").value =
          convertStringToDateTimeInput(
            document.querySelector("#detail_due_date").textContent
          ))
      : null;
    switch (
      document.querySelector("#detail_priority").textContent.toLowerCase()
    ) {
      case "important":
        document
          .querySelector("#important_button")
          .classList.add("selected_priority");
        break;

      case "normal":
        document
          .querySelector("#normal_button")
          .classList.add("selected_priority");

        break;

      case "optional":
        document
          .querySelector("#optional_button")
          .classList.add("selected_priority");

        break;

      default:
        break;
    }
    form.querySelector("#category_dropdown").value = document
      .querySelector("#detail_title")
      .dataset.project.split(":")[0];
    renderProjects(form.querySelector("#category_dropdown").value);
    form.querySelector("#project_dropdown").value = document
      .querySelector("#detail_title")
      .dataset.project.split(":")[1];
  });

  detailedDisplay.append(
    editSVG,
    detailItemTitle,
    subtitleBox,
    detailItemDescription
  );
}

export { updateCategories, updateProjectItemsDisplay, displayDetails };
