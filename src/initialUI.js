import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import "./style.css";
import { updateCategories, updateProjectItemsDisplay } from "./updateUI.js";
import allImages from "./image_bundler.js";
import {
  setTodoItem,
  todoItemsList,
  createTodoObject,
  deleteTodoItem,
} from "./defaultSetup.js";

function renderInitialUI() {
  const body = document.querySelector("body");
  const sidebar = createDOMElement("div", { id: "sidebar" });
  const mainDiv = createDOMElement("div", { id: "mainDiv" });
  const breadcrumbsHeader = createDOMElement("div", {
    class: "main",
    id: "header",
  });
  // TODO: add display of current project on display
  const mainDisplay = createDOMElement("div", {
    class: "main",
    id: "main_display",
  });
  const footer = createDOMElement("div", { class: "main", id: "footer" });
  const addItem = createDOMElement(
    "div",
    { class: "footer button footer_buttons", id: "add_item" },
    "+ New Item"
  );
  const filtersPanel = createDOMElement("div", {
    class: "sidebar",
    id: "filters_panel",
  });
  const agendaDiv = createDOMElement("div", {
    class: "sidebar category_div default_category",
    id: "agenda_div",
  });
  const agendaIcon = createDOMElement("img", {
    class: "svg sidebar",
    id: "agenda_icon",
    src: `${allImages["SVGs"]["calendar.svg"]}`,
  });
  const agendaP = createDOMElement(
    "p",
    { class: "sidebar default_category", id: "agenda_p" },
    "Agenda"
  );
  agendaDiv.append(agendaIcon, agendaP);
  const allDiv = createDOMElement("div", {
    class: "sidebar category_div default_category",
    id: "all_div",
  });
  // TODO: add listeners to main categories (after completion feature implemented)
  const allP = createDOMElement(
    "p",
    { class: "sidebar default_category", id: "all_p" },
    "All"
  );
  const allIcon = createDOMElement("img", {
    class: "svg sidebar",
    id: "all_icon",
    src: `${allImages["SVGs"]["list.svg"]}`,
  });
  allDiv.append(allIcon, allP);
  const importantDiv = createDOMElement("div", {
    class: "sidebar category_div default_category",
    id: "important_div",
  });
  const importantP = createDOMElement(
    "p",
    { class: "sidebar default_category", id: "important_p" },
    "Important"
  );
  const importantIcon = createDOMElement("img", {
    class: "svg sidebar",
    id: "important_icon",
    src: `${allImages["SVGs"]["urgent.svg"]}`,
  });
  importantDiv.append(importantIcon, importantP);
  const completedDiv = createDOMElement("div", {
    class: "sidebar category_div default_category",
    id: "completed_div",
  });
  const completedP = createDOMElement(
    "p",
    { class: "sidebar default_cate19gory", id: "completed_p" },
    "Completed"
  );
  const completedIcon = createDOMElement("img", {
    class: "svg sidebar",
    id: "completed_icon",
    src: `${allImages["SVGs"]["check.svg"]}`,
  });
  completedDiv.append(completedIcon, completedP);

  const categoriesPanel = createDOMElement("div", {
    class: "sidebar",
    id: "categories_panel",
  });

  const projectDisplay = createDOMElement("div", {
    class: "main",
    id: "project_display",
  });
  const detailDisplay = createDOMElement("div", {
    class: "main",
    id: "detail_display",
  });

  filtersPanel.append(allDiv, completedDiv, importantDiv, agendaDiv);
  // create categores panel as ul, each cat should be foldable
  mainDisplay.append(projectDisplay, detailDisplay);
  sidebar.append(filtersPanel, categoriesPanel);
  footer.append(addItem);
  footer.querySelectorAll(".footer_buttons").forEach((button) => {
    button.addEventListener("click", () => {
      createDialog(false);
    });
  });
  mainDiv.append(breadcrumbsHeader, mainDisplay, footer);
  body.append(sidebar, mainDiv);

  // updateCategories();
}

function createDialog(editMode) {
  const body = document.querySelector("body");
  const newItemDialog = createDOMElement("dialog", {
    class: "creation_dialogs",
    id: "new_item_dialog",
  });
  const newItemForm = createDOMElement("form", {
    class: "new_item",
    id: "new_item_form",
  });
  const titleInput = createDOMElement("input", {
    class: "new_item",
    id: "new_item_title_input",
    type: "text",
    required: "",
    placeholder: "Enter to-do item's title",
  });
  const titleAlert = createDOMElement(
    "p",
    { class: "alert_messages", id: "title_alert" },
    "* Please enter a title"
  );
  const titleDiv = createDOMElement("div", {
    class: "new_item",
    id: "form_title_div",
  });
  titleDiv.append(titleInput, titleAlert);
  const descriptionInput = createDOMElement("input", {
    class: "new_item",
    id: "new_item_description_input",
    type: "text",
    placeholder: "Enter to-do item's description (optional)",
  });
  const dueDateInput = createDOMElement("input", {
    class: "new_item",
    id: "new_item_due_date_input",
    type: "datetime-local",
    placeholder: "Select a due date (optional)",
  });

  // TODO: move minDate funciton to dateConverter.js
  function formatDateTimeLocal(date) {
    const formatted = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 16);
    return formatted;
  }

  // Set the minimum date and time for the datetime-local input
  function setMinDateTime() {
    const now = new Date();
    dueDateInput.min = formatDateTimeLocal(now);
  }

  // Call the function to set the min datetime
  setMinDateTime();

  const priorityButtonsDiv = createDOMElement("div", {
    class: "new_item",
    id: "priority_buttons_div",
  });
  const priorityAlert = createDOMElement(
    "p",
    { class: "alert_messages", id: "priority_alert" },
    "* Please choose a priority level"
  );
  const priorityDiv = createDOMElement("div", {
    class: "new_item",
    id: "form_priority_div",
  });
  priorityDiv.append(priorityButtonsDiv, priorityAlert);

  const importantButton = createDOMElement(
    "button",
    {
      class: "button new_item priority_buttons",
      id: "important_button",
      type: "button",
    },
    "Important"
  );
  const normalButton = createDOMElement(
    "button",
    {
      class: "button new_item priority_buttons",
      id: "normal_button",
      type: "button",
    },
    "Normal"
  );
  const optionalButton = createDOMElement(
    "button",
    {
      class: "button new_item priority_buttons",
      id: "optional_button",
      type: "button",
    },
    "Optional"
  );
  const categoryDropdown = createDOMElement("select", {
    class: "new_item category_select",
    id: "category_dropdown",
  });
  const categoryAlert = createDOMElement(
    "p",
    { class: "alert_messages", id: "category_alert" },
    "* Please either choose or create a category"
  );

  const defaultCategoryText = createDOMElement(
    "option",
    {
      class: "new_item category_options",
      selected: "",
      disabled: "",
      hidden: "",
    },
    "Select a category"
  );
  categoryDropdown.append(defaultCategoryText);
  const categoryDiv = createDOMElement("div", {
    class: "new_item",
    id: "form_category_div",
  });
  categoryDiv.append(categoryDropdown, categoryAlert);

  categoryDropdown.addEventListener("change", (e) => {
    if (e.target.value.toLowerCase() === "add new category") {
      0;
      let newCategory = prompt("Enter new category:");
      if ((newCategory !== null && newCategory) || "") {
        const newCategoryOption = createDOMElement(
          "option",
          {
            class: "category_options",
            value: `${newCategory.toLowerCase()}`,
            selected: "",
          },
          `${newCategory}`
        );
        categoryDropdown.insertBefore(
          newCategoryOption,
          categoryDropdown.querySelector(`option[value="add new category"`)
        );
        renderProjects(newCategoryOption.value);
        createNewProject();
      }
    } else {
      renderProjects(e.target.value);
    }
  });
  const saveButton = createDOMElement(
    "button",
    { class: "", id: "save_button", type: "button" },
    "SAVE"
  );

  const newProjectInput = createDOMElement("input", {
    class: "new_project",
    id: "new_project_input",
    type: "text",
    required: "",
    placeholder: "Enter new project's title",
  });

  const newCategoryInput = createDOMElement("input", {
    class: "new_category",
    id: "new_cateogry_input",
    type: "text",
    required: "",
    placeholder: "Enter new category name",
  });

  priorityButtonsDiv.append(importantButton, normalButton, optionalButton);
  priorityButtonsDiv.addEventListener("click", (e) => {
    if (!e.target.classList.contains("priority_buttons")) {
      return;
    } else {
      priorityButtonsDiv
        .querySelectorAll(".priority_buttons")
        .forEach((button) => {
          button.classList.remove("selected_priority");
        });
      e.target.classList.add("selected_priority");
    }
  });
  newItemForm.append(
    titleDiv,
    descriptionInput,
    dueDateInput,
    priorityDiv,
    categoryDiv
  );
  newItemDialog.append(newItemForm);

  saveButton.addEventListener("click", (e) => {
    validateForm(e.target.parentElement);
    if (validateForm(e.target.parentElement)) {
      if (editMode) {
        const itemForRemoval = todoItemsList.find(
          (item) =>
            `${item.category.toLowerCase()}:${item.project.toLowerCase()}` ===
              document.querySelector("#detail_title").dataset.project &&
            `${item.title.toLowerCase()}` ===
              document.querySelector("#detail_title").textContent.toLowerCase()
        );
        // TODO: edition should end with detail display edited after refreshing
        deleteTodoItem(itemForRemoval);
      }
      createTodoObject(e.target.parentElement);
      const projectDisplay =
        document.querySelector("#project_display").firstElementChild;
      if (projectDisplay) {
        updateProjectItemsDisplay(projectDisplay.dataset.project);
      }
      closeModal();
    }
  });

  body.append(newItemDialog);

  renderCategories(newItemDialog);
  newItemForm.append(saveButton);
  newItemDialog.showModal();
}

function validateForm(form) {
  const priorityButtons = form.querySelectorAll(".priority_buttons");
  let validForm = true;
  if (form.querySelector("#new_item_title_input").value === "") {
    form.querySelector("#title_alert").style.display = "block";
    validForm = false;
  }
  if (
    !Array.from(priorityButtons).some((button) =>
      button.classList.contains("selected_priority")
    )
  ) {
    form.querySelector("#priority_alert").style.display = "block";
    validForm = false;
  }
  if (form.querySelector("#category_dropdown").value === "Select a category") {
    form.querySelector("#category_alert").style.display = "block";
    validForm = false;
  }
  if (form.querySelector("#project_dropdown").value === "Select a project") {
    form.querySelector("#project_alert").style.display = "block";
    validForm = false;
  }

  return validForm;

  //   if any fail, prevent default stop exec
}

function renderCategories(dialog) {
  for (const item of todoItemsList) {
    if (
      !dialog
        .querySelector("#category_dropdown")
        .querySelector(`option[value="${item.category.toLowerCase()}"]`)
    ) {
      const categoryOption = createDOMElement(
        "option",
        { class: "category_options", value: `${item.category.toLowerCase()}` },
        `${item.category}`
      );
      dialog.querySelector("#category_dropdown").append(categoryOption);
    }
  }

  const newCategoryOption = createDOMElement(
    "option",
    { class: "category_options", value: "add new category" },
    "Add New Category"
  );
  dialog.querySelector("#category_dropdown").append(newCategoryOption);
}

function renderProjects(category) {
  const projectDropdown = createDOMElement("select", {
    class: "new_item project_select",
    id: "project_dropdown",
  });
  const projectAlert = createDOMElement(
    "p",
    { class: "alert_messages", id: "project_alert" },
    "* Please either choose or create a project"
  );
  const projectDiv = createDOMElement("div", {
    class: "new_item",
    id: "form_project_div",
  });
  projectDiv.append(projectDropdown, projectAlert);

  const defaultProjectText = createDOMElement(
    "option",
    {
      class: "new_item project_options",
      selected: "",
      disabled: "",
      hidden: "",
    },
    "Select a project"
  );
  projectDropdown.append(defaultProjectText);

  const dialog = document.querySelector("#new_item_dialog");
  if (dialog.querySelector("#category_dropdown").value === "General") {
    projectDiv.remove();
    return;
  }
  dialog
    .querySelector("form")
    .insertBefore(projectDiv, dialog.querySelector("#save_button"));
  projectDiv.querySelector("#project_dropdown").innerHTML = "";

  const categoryProjects = todoItemsList.filter(
    (item) => item.category.toLowerCase() === `${category.toLowerCase()}`
  );
  for (const item of categoryProjects) {
    if (
      !dialog
        .querySelector("#project_dropdown")
        .querySelector(`option[value="${item.project.toLowerCase()}"]`)
    ) {
      const projectOption = createDOMElement(
        "option",
        { class: "project_options", value: `${item.project.toLowerCase()}` },
        `${item.project}`
      );
      dialog.querySelector(".project_select").append(projectOption);
    }
  }

  const newProjectOption = createDOMElement(
    "option",
    { class: "project_options", value: "add new project" },
    "Add New Project"
  );
  dialog.querySelector(".project_select").addEventListener("click", (e) => {
    if (e.target.value === "add new project") {
      createNewProject();
    }
  });
  dialog.querySelector(".project_select").append(newProjectOption);
}

function createNewProject() {
  let newProject = prompt("Enter new project name:");
  if (newProject !== null && newProject !== "") {
    const newProjectOption = createDOMElement(
      "option",
      { class: "project_options", value: `${newProject}`, selected: "" },
      `${newProject}`
    );
    document
      .querySelector("#project_dropdown")
      .insertBefore(
        newProjectOption,
        document
          .querySelector("#project_dropdown")
          .querySelector(`option[value="add new project"]`)
      );
  }
}

function closeModal() {
  document.querySelector("dialog").remove();
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (document.querySelector("dialog")) {
      closeModal();
    }
  }
});

export { renderInitialUI, createDialog, renderCategories, renderProjects };
