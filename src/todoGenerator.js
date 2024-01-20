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

    todoItems.push({
      title,
      description,
      dueDate,
      priority,
      project,
      category,
    });
  }
  return todoItems;
}

const todoList = createTodoItems();


// console.log(todoList);

const setTodoList = [
  {
    title: "Schedule Report Submission",
    description: "",
    dueDate: "",
    priority: "important",
    project: "Learning New Skills",
    category: "Personal",
  },
  {
    title: "Complete Training Session",
    description: "Finalize the training materials for new hires.",
    dueDate: "23-08-04-10-23",
    priority: "important",
    project: "General",
    category: "General",
  },
  {
    title: "Organize Meeting",
    description:
      "Set agenda and invite participants for the monthly team meeting.",
    dueDate: "21-42-02-08-24",
    priority: "optional",
    project: "Family Reunion",
    category: "Family",
  },
  {
    title: "Prepare Event",
    description: "",
    dueDate: "04-13-19-08-24",
    priority: "normal",
    project: "Fitness Goals",
    category: "Personal",
  },
  {
    title: "Prepare Event",
    description:
      "Arrange logistics and materials for the annual company retreat.",
    dueDate: "",
    priority: "important",
    project: "Learning New Skills",
    category: "Personal",
  },
  {
    title: "Plan Presentation",
    description: "",
    dueDate: "15-42-23-02-24",
    priority: "optional",
    project: "Learning New Skills",
    category: "Personal",
  },
  {
    title: "Plan Family Reunion",
    description:
      "Coordinate the date and venue for the annual family gathering.",
    dueDate: "12-51-24-12-24",
    priority: "normal",
    project: "Hobby Projects",
    category: "Personal",
  },
  {
    title: "Plan Family Reunion",
    description:
      "Coordinate the date and venue for the annual family gathering.",
    dueDate: "10-10-02-10-23",
    priority: "optional",
    project: "Research & Development",
    category: "Work",
  },
  {
    title: "Schedule Report Submission",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "Learning New Skills",
    category: "Personal",
  },
  {
    title: "Start Workshop",
    description: "Initiate the first session of the creative writing workshop.",
    dueDate: "",
    priority: "optional",
    project: "General",
    category: "General",
  },
  {
    title: "Organize Meeting",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "Research & Development",
    category: "Work",
  },
  {
    title: "Review Budget",
    description:
      "Evaluate the current budget allocation and suggest adjustments.",
    dueDate: "12-59-09-10-24",
    priority: "important",
    project: "General",
    category: "General",
  },
  {
    title: "Review Budget",
    description: "",
    dueDate: "",
    priority: "important",
    project: "Client Outreach",
    category: "Work",
  },
  {
    title: "Prepare Event",
    description:
      "Arrange logistics and materials for the annual company retreat.",
    dueDate: "",
    priority: "important",
    project: "Fitness Goals",
    category: "Personal",
  },
  {
    title: "Plan Presentation",
    description: "",
    dueDate: "",
    priority: "optional",
    project: "Fitness Goals",
    category: "Personal",
  },
  {
    title: "Plan Presentation",
    description: "",
    dueDate: "07-37-06-01-23",
    priority: "important",
    project: "Learning New Skills",
    category: "Personal",
  },
  {
    title: "Complete Training Session",
    description: "",
    dueDate: "07-33-16-06-23",
    priority: "important",
    project: "Home Renovation",
    category: "Family",
  },
  {
    title: "Schedule Report Submission",
    description: "",
    dueDate: "",
    priority: "important",
    project: "General",
    category: "General",
  },
  {
    title: "Plan Family Reunion",
    description: "",
    dueDate: "",
    priority: "optional",
    project: "General",
    category: "General",
  },
  {
    title: "Plan Presentation",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "Holiday Planning",
    category: "Family",
  },
  {
    title: "Organize Meeting",
    description:
      "Set agenda and invite participants for the monthly team meeting.",
    dueDate: "15-11-28-09-23",
    priority: "optional",
    project: "Holiday Planning",
    category: "Family",
  },
  {
    title: "Complete Training Session",
    description: "",
    dueDate: "",
    priority: "important",
    project: "Budget Management",
    category: "Family",
  },
  {
    title: "Organize Meeting",
    description: "",
    dueDate: "",
    priority: "optional",
    project: "Client Outreach",
    category: "Work",
  },
  {
    title: "Organize Meeting",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "Vacation Planning",
    category: "Personal",
  },
  {
    title: "Plan Family Reunion",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "General",
    category: "General",
  },
  {
    title: "Plan Family Reunion",
    description:
      "Coordinate the date and venue for the annual family gathering.",
    dueDate: "",
    priority: "optional",
    project: "Holiday Planning",
    category: "Family",
  },
  {
    title: "Discuss Holiday Plans",
    description: "Plan the upcoming family holiday to the mountains.",
    dueDate: "",
    priority: "important",
    project: "Project Beta",
    category: "Work",
  },
  {
    title: "Organize Home Renovation",
    description: "Outline the phases and budget for kitchen renovation.",
    dueDate: "16-54-26-03-23",
    priority: "optional",
    project: "Project Alpha",
    category: "Work",
  },
  {
    title: "Schedule Report Submission",
    description: "Coordinate the submission timeline for the financial report.",
    dueDate: "15-05-16-05-24",
    priority: "optional",
    project: "General",
    category: "General",
  },
  {
    title: "Review Budget",
    description: "",
    dueDate: "16-02-07-08-23",
    priority: "optional",
    project: "Project Alpha",
    category: "Work",
  },
  {
    title: "Organize Meeting",
    description:
      "Set agenda and invite participants for the monthly team meeting.",
    dueDate: "21-39-22-05-23",
    priority: "optional",
    project: "Learning New Skills",
    category: "Personal",
  },
  {
    title: "Plan Presentation",
    description:
      "Prepare slides and notes for the quarterly sales presentation.",
    dueDate: "11-36-09-05-24",
    priority: "important",
    project: "Budget Management",
    category: "Family",
  },
  {
    title: "Discuss Holiday Plans",
    description: "Plan the upcoming family holiday to the mountains.",
    dueDate: "20-16-05-04-24",
    priority: "optional",
    project: "Learning New Skills",
    category: "Personal",
  },
  {
    title: "Review Budget",
    description:
      "Evaluate the current budget allocation and suggest adjustments.",
    dueDate: "",
    priority: "normal",
    project: "Vacation Planning",
    category: "Personal",
  },
  {
    title: "Plan Family Reunion",
    description: "",
    dueDate: "00-41-01-01-24",
    priority: "normal",
    project: "Family Reunion",
    category: "Family",
  },
  {
    title: "Discuss Holiday Plans",
    description: "",
    dueDate: "",
    priority: "normal",
    project: "Project Beta",
    category: "Work",
  },
  {
    title: "Plan Family Reunion",
    description:
      "Coordinate the date and venue for the annual family gathering.",
    dueDate: "01-44-04-03-24",
    priority: "important",
    project: "Fitness Goals",
    category: "Personal",
  },
  {
    title: "Discuss Holiday Plans",
    description: "Plan the upcoming family holiday to the mountains.",
    dueDate: "",
    priority: "normal",
    project: "Holiday Planning",
    category: "Family",
  },
  {
    title: "Start Workshop",
    description: "",
    dueDate: "",
    priority: "important",
    project: "Project Alpha",
    category: "Work",
  },
  {
    title: "Start Workshop",
    description: "Initiate the first session of the creative writing workshop.",
    dueDate: "",
    priority: "optional",
    project: "Family Reunion",
    category: "Family",
  },
];

export { todoList, setTodoList };
