import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import "./style.css";
import { updateUI } from "./updateUI.js";
import allImages from "./image_bundler.js";

// sidebar: sorts, filters, navigation by projects
// MAIN: Top -> main view === project view (either by projects, or individual todos dialog, which updates automatically by change)
// MAIN: Bottom -> add project, add todo
// MAIN: ABOVE -> breadcrumbs with path


function renderInitialUI() {
    const body = document.querySelector("body");
    const sidebar = createDOMElement("div", { id: "sidebar"});
    const mainDiv = createDOMElement("div", { id: "mainDiv"});
    const breadcrumbsHeader = createDOMElement("div", {class: "main", id: "header"});
    const mainDisplay = createDOMElement("div", {class: "main", id: "main_display"});
    const footer = createDOMElement("div", {class: "main", id: "footer"});
    const addItem = createDOMElement("div", {class: "footer button", id: "add_item"}, "+ New Item");
    const addProject = createDOMElement("div", {class: "footer button", id: "add_project"}, "+ New Project");
    const addCategory = createDOMElement("div", {class: "footer button", id: "add_category"}, "+ New Category");

    // create main panel with sorts filters and main categories
    // main categories/sorts/filters: agenda, high priority, completed, all 
    const filtersPanel = createDOMElement("div", {class: "sidebar", id: "filters_panel"});
    const agendaDiv = createDOMElement("div", {class: "sidebar category_div default_category", id: "agenda_div"});
    const agendaIcon = createDOMElement("img", {class: "svg sidebar", id: "agenda_icon", src: `${allImages["SVGs"]["calendar.svg"]}`});
    const agendaP = createDOMElement("p", {class: "sidebar default_category", id: "agenda_p"}, "Agenda");
    agendaDiv.append(agendaIcon, agendaP);
    const allDiv = createDOMElement("div", {class: "sidebar category_div default_category", id: "all_div"});
    const allP = createDOMElement("p", {class: "sidebar default_category", id: "all_p"}, "All");
    const allIcon = createDOMElement("img", {
        class: "svg sidebar",
        id: "all_icon",
        src: `${allImages["SVGs"]["list.svg"]}`,
    });
    allDiv.append(allIcon, allP);
    const urgentDiv = createDOMElement("div", {class: "sidebar category_div default_category", id: "urgent_div"});
    const urgentP = createDOMElement("p", {class: "sidebar default_category", id: "urgent_p"}, "Urgent");
    const urgentIcon = createDOMElement("img", {
        class: "svg sidebar",
        id: "urgent_icon",
        src: `${allImages["SVGs"]["urgent.svg"]}`,
    });
    urgentDiv.append(urgentIcon, urgentP);
    const completedDiv = createDOMElement("div", {class: "sidebar category_div default_category", id: "completed_div"});
    const completedP = createDOMElement("p", {class: "sidebar default_category", id: "completed_p"}, "Completed");
    const completedIcon = createDOMElement("img", {
        class: "svg sidebar",
        id: "completed_icon",
        src: `${allImages["SVGs"]["check.svg"]}`,
    });
    completedDiv.append(completedIcon, completedP);

    filtersPanel.append(allDiv, completedDiv, urgentDiv, agendaDiv);
    // create categores panel as ul, each cat should be foldable

    // updateUI();
    sidebar.append(filtersPanel);
    footer.append(addItem, addProject, addCategory)
    mainDiv.append(breadcrumbsHeader, mainDisplay, footer);
    body.append(sidebar, mainDiv);
}

export { renderInitialUI };
