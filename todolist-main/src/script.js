import "./style.css";
import { format, addDays } from "date-fns";
const createButton = document.querySelector("#button");
const content = document.querySelector(".content");
const top = document.querySelector(".l");
const exit = document.querySelector(".r");
const home = document.querySelector(".button");

const currentDate = new Date();
const laterDate = new Date("2025-06-18");
console.log(currentDate > laterDate);


home.addEventListener("click", () => {
    showProjects();
});

exit.style.cursor = "pointer";

exit.addEventListener("click", () => {
    showProjects();
});

function displayProject(name) {
    let newProject = document.createElement("div");
    let left = document.createElement("button");
    let right = document.createElement("button");
    let border = document.createElement("div");

    border.style.borderTop = "1px solid black";
    left.textContent = name;
    right.textContent = "X";
    right.style.border = "1px solid red";

    left.addEventListener("click", () => {
        showList(name);
    });

    right.addEventListener("click", () => {
        let storage = JSON.parse(localStorage.getItem("projects"));
        delete storage[name];
        localStorage.setItem("projects", JSON.stringify(storage));

        showProjects();
    });

    newProject.style.display = "flex";
    newProject.style.justifyContent = "space-between";  
    newProject.style.gap = "1.5rem";
    left.style.fontSize = "1.5rem";
    newProject.appendChild(left);
    newProject.appendChild(right);
    content.appendChild(newProject);
    content.appendChild(border);
}

function displayList(project,name,prio) {
    let storage = JSON.parse(localStorage.getItem("projects"));
    
    let newProject = document.createElement("div");
    let details = document.createElement("details");
    let left = document.createElement("summary");
    let right = document.createElement("button");
    let border = document.createElement("div");
    let popup = document.createElement("p");

    let form = document.createElement("form");

    let title = document.createElement("label");
    let titleInput = document.createElement("input");

    let description = document.createElement("label");
    let descriptionInput = document.createElement("input");

    let date = document.createElement("label");
    let dateInput = document.createElement("input");

    let priority = document.createElement("label");
    let priorityInput = document.createElement("input")

    let submit = document.createElement("button");

    border.style.borderTop = "1px solid black";

    let leftlow = document.createElement("p");
    leftlow.textContent = "Due in: " + storage[project][name].date;
    leftlow.style.fontSize = "0.75rem";

    left.style.cursor = "pointer";
    left.textContent = storage[project][name].title;
    left.style.fontSize = "1.5rem";
    left.style.fontWeight = "bold";

    if (prio) {
        left.style.color = "blue";
    }

    if (format(new Date(), "yyyy-MM-dd") >= storage[project][name].date) {
        left.style.textDecoration = "line-through";
    }

    left.appendChild(leftlow);

    right.textContent = "X";
    right.style.fontSize = "1.5rem";

    submit.textContent = "Enter";
    submit.style.border = "1px solid black"

    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.value = storage[project][name].title;
    title.textContent = "Title: ";
    title.htmlFor = "title";

    description.textContent = "Description: ";
    description.htmlFor = "description";
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    descriptionInput.name = "description";
    descriptionInput.value = storage[project][name].description;

    date.textContent = "dueDate: ";
    date.htmlFor = "date";
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";
    dateInput.value = storage[project][name].date;

    priority.textContent = "Priority?";
    priority.htmlFor = "priority";
    priorityInput.type = "checkbox";
    priorityInput.id = "priority";
    priorityInput.name = "priority";
    if (storage[project][name].priority) { priorityInput.checked = true}

    popup.style.display = "flex";
    popup.style.flexDirection = "column";
    popup.style.gap = "1rem";
    
    details.style.display = "flex";
    details.style.flexDirection = "column";
    popup.style.display = "flex";
    popup.style.justifyContent = "space-between";

    newProject.style.display = "flex";
    newProject.style.justifyContent = "space-between";  
    newProject.style.gap = "1.5rem";
    newProject.classList.add("unselectable");

    submit.style.padding = "0px";

    form.method = "get";
    form.action = "";
    form.appendChild(title);
    form.appendChild(document.createElement("br"));
    form.appendChild(titleInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(description);
    form.appendChild(document.createElement("br"));
    form.appendChild(descriptionInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(date);
    form.appendChild(document.createElement("br"));
    form.appendChild(dateInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(priority);
    form.appendChild(document.createElement("br"));
    form.appendChild(priorityInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    popup.appendChild(form);
    popup.appendChild(submit);
    details.appendChild(left);
    details.appendChild(popup);

    newProject.appendChild(details);
    newProject.appendChild(right);

    content.appendChild(newProject);
    content.appendChild(border); 

    submit.addEventListener("click", () => {
        let storage = JSON.parse(localStorage.getItem("projects"));
        storage[project][name].title = titleInput.value;
        storage[project][name].description = descriptionInput.value;
        storage[project][name].date = dateInput.value;
        storage[project][name].priority = priorityInput.value;

        console.log(storage[project][name].title);
        console.log(storage[project][name].description);
        localStorage.setItem("projects", JSON.stringify(storage));
        console.log(localStorage.getItem("projects"));
        showList(project);
        left.click();
    });

    right.addEventListener("click", () => {
        let storage = JSON.parse(localStorage.getItem("projects"));
        
        delete storage[project][name];
        localStorage.setItem("projects", JSON.stringify(storage));
        showList(project);  
    });
}

function showList(name) {
    let button = document.createElement("button");

    button.textContent = "Create a To-do";
    exit.textContent = "x";

    createButton.innerHTML = "";
    content.innerHTML = "";
    top.innerHTML = name;

    button.addEventListener("click", () => {
        let todo = prompt("To do", "");

        if (todo) {
            let storage = JSON.parse(localStorage.getItem("projects"));
            
            if (storage[name][todo]) {
                console.log("Todo already exists");
                return;
            }
            console.log(localStorage.getItem("projects"));
            storage[name][todo] = {};
            storage[name][todo].title = todo;
            storage[name][todo].priority = false;
            storage[name][todo].date = format(addDays(new Date(), 1), "yyyy-MM-dd");
            storage[name][todo].description = "";

            localStorage.setItem("projects", JSON.stringify(storage));

            showList(name);
        }
    });

    if (localStorage.getItem("projects")) {
        const projects = JSON.parse(localStorage.getItem("projects"));
        for (let item in projects[name]) {

            if (projects[name][item].priority) {
                displayList(name,item,true);

                continue;
            }
            displayList(name,item);
        }
        console.log(projects);
    }

    createButton.appendChild(button);
}

function showProjects() {
    let button = document.createElement("button");
    button.innerHTML = "Create a project";

    createButton.innerHTML = "";
    content.innerHTML = "";
    top.innerHTML = "My Projects";
    exit.innerHTML = "";

    button.addEventListener("click", () => {
        let name = prompt("Name of the project?", "");

        if (!name == "") {
            let storage = JSON.parse(localStorage.getItem("projects"));

            if (storage === null) {
                storage = {};
            }
            
            if (storage[name]) {
                console.log("Project already exists");
                return;
            }
            storage[name] = {};
            localStorage.setItem("projects", JSON.stringify(storage));

            showProjects();
        }
    });

    createButton.appendChild(button);

    if (localStorage.getItem("projects")) {
        const projects = JSON.parse(localStorage.getItem("projects"));

        for (let item in projects) {
            console.log(item);
            displayProject(item);
        }
    }
}

showProjects();