import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import "./style.css";
import { updateProjectItemsDisplay } from "./updateUI.js";
import {
  todoItemsList,
  createTodoObject,
  deleteTodoItem,
  generateTestItems,
} from "./appLogicFunctions.js";
import "@fortawesome/fontawesome-free/css/all.css";

function renderInitialUI() {
  const body = document.querySelector("body");
  const sidebar = createDOMElement("div", { id: "sidebar" });
  const mainDiv = createDOMElement("div", { id: "mainDiv" });
  const breadcrumbsHeader = createDOMElement("div", {
    class: "main",
    id: "header",
  });
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
  const testItemsGenerator = createDOMElement(
    "div",
    { class: "footer button footer_buttons", id: "test_generator" },
    "GENERATE TEST ITEMS"
  );

  const categoriesPanel = createDOMElement("div", {
    class: "sidebar",
    id: "categories_panel",
  });
  const signatureDiv = createDOMElement("div", { id: "signature_div" });
  const signatureP = createDOMElement(
    "p",
    { class: "signature", id: "signature_p" },
    "by"
  );
  const signatureSpan = createDOMElement(
    "span",
    { class: "signature", id: "signature_span" },
    "tostimontes"
  );
  const signatureGHLink = createDOMElement("a", {
    id: "signture_github_link",
    href: "https://github.com/tostimontes/to-do-list",
  });
  const githubFavicon = createDOMElement("i", { class: "fab fa-github" });
  signatureGHLink.appendChild(githubFavicon);
  signatureDiv.append(signatureP, signatureSpan, signatureGHLink);
  const projectDisplayContainer = createDOMElement("div", {
    class: "main",
    id: "project_display_container",
  });
  const projectDisplay = createDOMElement("div", {
    class: "main",
    id: "project_display",
  });
  const completedItemsDisplay = createDOMElement("div", {
    class: "main",
    id: "completed_items_display",
  });
  projectDisplayContainer.append(projectDisplay, completedItemsDisplay);
  const detailDisplay = createDOMElement("div", {
    class: "main",
    id: "detail_display",
  });

  mainDisplay.append(projectDisplayContainer, detailDisplay);
  sidebar.append(categoriesPanel, signatureDiv);
  footer.append(addItem, testItemsGenerator);
  addItem.addEventListener("click", () => {
    createDialog(false);
  });
  testItemsGenerator.addEventListener("click", () => {
    generateTestItems();
    testItemsGenerator.remove();
  });

  mainDiv.append(breadcrumbsHeader, mainDisplay, footer);
  body.append(sidebar, mainDiv);
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

  function formatDateTimeLocal(date) {
    const formatted = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 16);
    return formatted;
  }

  function setMinDateTime() {
    const now = new Date();
    dueDateInput.min = formatDateTimeLocal(now);
  }

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
      let projectTitle = "";
      if (document.querySelector("#header").innerHTML !== "") {
        projectTitle = `${document
          .querySelector(".category_breadcrumb")
          .textContent.toLowerCase()}:${document
          .querySelector(".project_breadcrumb")
          .textContent.toLowerCase()}`;
      }
      if (editMode) {
        const itemForRemoval = todoItemsList.find(
          (item) =>
            `${item.category.toLowerCase()}:${item.project.toLowerCase()}` ===
              document.querySelector("#detail_title").dataset.project &&
            `${item.title.toLowerCase()}` ===
              document.querySelector("#detail_title").textContent.toLowerCase()
        );
        deleteTodoItem(itemForRemoval);
      }
      createTodoObject(e.target.parentElement);

      if (projectTitle) {
        updateProjectItemsDisplay(projectTitle);
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
}

function renderCategories(dialog) {
  const generalCategory = createDOMElement(
    "option",
    { class: "category_options", value: "general" },
    "General"
  );
  dialog.querySelector("#category_dropdown").append(generalCategory);

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
