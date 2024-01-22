// import { setTodoList } from "./todoGenerator.js";
import { updateCategories, updateProjectItemsDisplay } from "./updateUI.js";
import { convertInputValueToDueDateString } from "./dateConverter.js";

const setTodoList = [
  {
    title: "Complete Training Session",
    description: "Finalize the training materials for new hires.",
    dueDate: "",
    priority: "normal",
    project: "Project Beta",
    category: "Work",
    status: "pending",
  },
  {
    title: "Start Workshop",
    description: "Initiate the first session of the creative writing workshop.",
    dueDate: "",
    priority: "normal",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Organize Home Renovation",
    description: "",
    dueDate: "",
    priority: "important",
    project: "Home Renovation",
    category: "Family",
    status: "pending",
  },
  {
    title: "Discuss Holiday Plans",
    description: "Plan the upcoming family holiday to the mountains.",
    dueDate: "18-34-01-05-24",
    priority: "important",
    project: "Home Renovation",
    category: "Family",
    status: "pending",
  },
  {
    title: "Discuss Holiday Plans",
    description: "Plan the upcoming family holiday to the mountains.",
    dueDate: "12-06-01-10-23",
    priority: "normal",
    project: "Home Renovation",
    category: "Family",
    status: "pending",
  },
  {
    title: "Prepare Event",
    description:
      "Arrange logistics and materials for the annual company retreat.",
    dueDate: "",
    priority: "normal",
    project: "Family Reunion",
    category: "Family",
    status: "pending",
  },
  {
    title: "Plan Family Reunion",
    description: "",
    dueDate: "",
    priority: "optional",
    project: "Fitness Goals",
    category: "Personal",
    status: "pending",
  },
  {
    title: "Prepare Event",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "Hobby Projects",
    category: "Personal",
    status: "pending",
  },
  {
    title: "Complete Training Session",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Start Workshop",
    description: "",
    dueDate: "",
    priority: "important",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Discuss Holiday Plans",
    description: "Plan the upcoming family holiday to the mountains.",
    dueDate: "00-11-11-08-23",
    priority: "optional",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Plan Family Reunion",
    description:
      "Coordinate the date and venue for the annual family gathering.",
    dueDate: "10-55-17-01-24",
    priority: "normal",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Plan Family Reunion",
    description:
      "Coordinate the date and venue for the annual family gathering.",
    dueDate: "18-50-17-09-23",
    priority: "important",
    project: "Project Beta",
    category: "Work",
    status: "pending",
  },
  {
    title: "Prepare Event",
    description: "",
    dueDate: "",
    priority: "important",
    project: "Learning New Skills",
    category: "Personal",
    status: "pending",
  },
  {
    title: "Schedule Report Submission",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "Home Renovation",
    category: "Family",
    status: "pending",
  },
  {
    title: "Prepare Event",
    description:
      "Arrange logistics and materials for the annual company retreat.",
    dueDate: "14-59-16-06-24",
    priority: "important",
    project: "Project Beta",
    category: "Work",
    status: "pending",
  },
  {
    title: "Discuss Holiday Plans",
    description: "Plan the upcoming family holiday to the mountains.",
    dueDate: "07-42-27-09-24",
    priority: "important",
    project: "Hobby Projects",
    category: "Personal",
    status: "pending",
  },
  {
    title: "Discuss Holiday Plans",
    description: "",
    dueDate: "18-48-25-12-24",
    priority: "optional",
    project: "Research & Development",
    category: "Work",
    status: "pending",
  },
  {
    title: "Complete Training Session",
    description: "Finalize the training materials for new hires.",
    dueDate: "14-45-27-12-24",
    priority: "optional",
    project: "Fitness Goals",
    category: "Personal",
    status: "pending",
  },
  {
    title: "Prepare Event",
    description: "",
    dueDate: "05-06-06-03-23",
    priority: "optional",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Review Budget",
    description: "",
    dueDate: "02-53-09-06-23",
    priority: "normal",
    project: "Learning New Skills",
    category: "Personal",
    status: "pending",
  },
  {
    title: "Discuss Holiday Plans",
    description: "Plan the upcoming family holiday to the mountains.",
    dueDate: "",
    priority: "important",
    project: "Client Outreach",
    category: "Work",
    status: "pending",
  },
  {
    title: "Plan Family Reunion",
    description: "",
    dueDate: "",
    priority: "important",
    project: "Family Reunion",
    category: "Family",
    status: "pending",
  },
  {
    title: "Plan Family Reunion",
    description:
      "Coordinate the date and venue for the annual family gathering.",
    dueDate: "20-44-27-09-24",
    priority: "normal",
    project: "Budget Management",
    category: "Family",
    status: "pending",
  },
  {
    title: "Discuss Holiday Plans",
    description: "Plan the upcoming family holiday to the mountains.",
    dueDate: "03-41-31-01-24",
    priority: "important",
    project: "Research & Development",
    category: "Work",
    status: "pending",
  },
  {
    title: "Plan Presentation",
    description:
      "Prepare slides and notes for the quarterly sales presentation.",
    dueDate: "00-46-17-11-24",
    priority: "normal",
    project: "Budget Management",
    category: "Family",
    status: "pending",
  },
  {
    title: "Plan Family Reunion",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Organize Meeting",
    description:
      "Set agenda and invite participants for the monthly team meeting.",
    dueDate: "00-41-19-10-24",
    priority: "important",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Schedule Report Submission",
    description: "",
    dueDate: "22-44-22-06-24",
    priority: "important",
    project: "Client Outreach",
    category: "Work",
    status: "pending",
  },
  {
    title: "Organize Meeting",
    description: "",
    dueDate: "13-34-03-02-23",
    priority: "important",
    project: "Holiday Planning",
    category: "Family",
    status: "pending",
  },
  {
    title: "Schedule Report Submission",
    description: "",
    dueDate: "16-51-04-09-23",
    priority: "optional",
    project: "Research & Development",
    category: "Work",
    status: "pending",
  },
  {
    title: "Organize Home Renovation",
    description: "",
    dueDate: "05-30-31-10-24",
    priority: "important",
    project: "Hobby Projects",
    category: "Personal",
    status: "pending",
  },
  {
    title: "Organize Meeting",
    description: "",
    dueDate: "03-24-31-01-24",
    priority: "normal",
    project: "Research & Development",
    category: "Work",
    status: "pending",
  },
  {
    title: "Review Budget",
    description: "",
    dueDate: "22-44-14-12-24",
    priority: "optional",
    project: "Project Alpha",
    category: "Work",
    status: "pending",
  },
  {
    title: "Prepare Event",
    description: "",
    dueDate: "04-06-07-10-23",
    priority: "optional",
    project: "Family Reunion",
    category: "Family",
    status: "pending",
  },
  {
    title: "Schedule Report Submission",
    description: "Coordinate the submission timeline for the financial report.",
    dueDate: "",
    priority: "normal",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Start Workshop",
    description: "",
    dueDate: "",
    priority: "important",
    project: "Learning New Skills",
    category: "Personal",
    status: "pending",
  },
  {
    title: "Organize Meeting",
    description:
      "Set agenda and invite participants for the monthly team meeting.",
    dueDate: "04-17-30-06-24",
    priority: "optional",
    project: "Vacation Planning",
    category: "Personal",
    status: "pending",
  },
  {
    title: "Organize Meeting",
    description: "",
    dueDate: "02-49-15-01-23",
    priority: "normal",
    project: "General",
    category: "General",
    status: "pending",
  },
  {
    title: "Prepare Event",
    description: "",
    dueDate: "",
    priority: "important",
    project: "Budget Management",
    category: "Family",
    status: "pending",
  },
];

const todoItemsList = [];

function createTodoObject(form) {
  const newTodoObject = {};
  newTodoObject.title = form.querySelector("#new_item_title_input").value;
  newTodoObject.description = form.querySelector(
    "#new_item_description_input"
  ).value;
  form.querySelector("#new_item_due_date_input").value === ""
    ? (newTodoObject.dueDate = "")
    : (newTodoObject.dueDate = convertInputValueToDueDateString(
        form.querySelector("#new_item_due_date_input").value
      ));
  newTodoObject.priority = form
    .querySelector(".selected_priority")
    .textContent.toLowerCase();
  newTodoObject.category = form.querySelector("#category_dropdown").value;
  const selectedProject = form.querySelector("#project_dropdown").selectedIndex;
  newTodoObject.project =
    form.querySelector("#project_dropdown")[selectedProject].textContent;
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

function getTodoItems() {
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const item = localStorage.getItem(key);
      if (item) {
        todoItemsList.push(JSON.parse(localStorage.getItem(key)));
      }
    }
  }
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
      `${item.category.toLowerCase()}:${item.project.toLowerCase()}` ===
      selectedProjectTitle.dataset.project
  );
  for (const item of projectForRemoval) {
    deleteTodoItem(item);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateTestItems() {
  for (const item of setTodoList) {
    setTodoItem(item);
  }
}

export {
  setTodoItem,
  getTodoItems,
  deleteTodoItem,
  todoItemsList,
  createTodoObject,
  deleteProject,
  capitalizeFirstLetter,
  generateTestItems,
};
