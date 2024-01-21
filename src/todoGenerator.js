function randomDate() {
  const start = new Date(2023, 0, 1);
  const end = new Date(2024, 11, 31);
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return (
    randomDate.getHours().toString().padStart(2, "0") +
    "-" +
    randomDate.getMinutes().toString().padStart(2, "0") +
    "-" +
    randomDate.getDate().toString().padStart(2, "0") +
    "-" +
    (randomDate.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    randomDate.getFullYear().toString().slice(-2)
  );
}

function generateTitleAndDescription() {
  const tasks = [
    {
      title: "Organize Meeting",
      description:
        "Set agenda and invite participants for the monthly team meeting.",
    },
    {
      title: "Plan Presentation",
      description:
        "Prepare slides and notes for the quarterly sales presentation.",
    },
    {
      title: "Schedule Report Submission",
      description:
        "Coordinate the submission timeline for the financial report.",
    },
    {
      title: "Prepare Event",
      description:
        "Arrange logistics and materials for the annual company retreat.",
    },
    {
      title: "Review Budget",
      description:
        "Evaluate the current budget allocation and suggest adjustments.",
    },
    {
      title: "Complete Training Session",
      description: "Finalize the training materials for new hires.",
    },
    {
      title: "Start Workshop",
      description:
        "Initiate the first session of the creative writing workshop.",
    },
    {
      title: "Discuss Holiday Plans",
      description: "Plan the upcoming family holiday to the mountains.",
    },
    {
      title: "Organize Home Renovation",
      description: "Outline the phases and budget for kitchen renovation.",
    },
    {
      title: "Plan Family Reunion",
      description:
        "Coordinate the date and venue for the annual family gathering.",
    },
  ];
  return tasks[Math.floor(Math.random() * tasks.length)];
}

function createTodoItems() {
  const categories = ["Work", "Personal", "Family", "General"];
  const projects = {
    Work: [
      "Project Alpha",
      "Project Beta",
      "Client Outreach",
      "Research & Development",
    ],
    Personal: [
      "Fitness Goals",
      "Learning New Skills",
      "Hobby Projects",
      "Vacation Planning",
    ],
    Family: [
      "Home Renovation",
      "Family Reunion",
      "Holiday Planning",
      "Budget Management",
    ],
    General: ["General"],
  };
  const priorities = ["important", "normal", "optional"];
  const todoItems = [];

  for (let i = 0; i < 40; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const project =
      projects[category][Math.floor(Math.random() * projects[category].length)];
    const priority = priorities[Math.floor(Math.random() * priorities.length)];
    const dueDate = Math.random() > 0.5 ? randomDate() : "";
    const task = generateTitleAndDescription();
    const title = task.title;
    const description = Math.random() > 0.5 ? task.description : "";
    const status = "pending";

    todoItems.push({
      title,
      description,
      dueDate,
      priority,
      project,
      category,
      status
    });
  }
  return todoItems;
}

const todoList = createTodoItems();


console.log(todoList);

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

export { todoList, setTodoList };
