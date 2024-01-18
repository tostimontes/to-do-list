import createDOMElement from "C:/Users/Aitor/Google Drive/Kode/projects/reusables/JavaScript/DOMElementCreator.js";
import { categories, projects } from "./defaultSetup.js";

const sidebar = document.querySelector("#sidebar");
const header = document.querySelector("#header");
const mainDisplay = document.querySelector("#main_display");
const footer = document.querySelector("#footer");
const element = document.querySelector("selector");

function updateUI() {
    // take categories, sort and projects and update
    for (const category of categories) {
        const categoryDisplay = createDOMElement("h3", {class: "category sidebar", id: `${category}_category`}, `${category.toUpperCase()}`);
        
 
    }
}

export { updateUI };

