const API_URL = "http://localhost:3030/jsonstore/tasks";

let tasks = {};

const inputSelectors = {
    name: document.querySelector("#title"),
};

const selectors = {
    toDoListContainer: document.querySelector("#todo-list"),
};

function attachEvents() {

    const loadButton = document.querySelector("#load-button").addEventListener("click", loadTasks);
    const addButton = document.querySelector("#add-button").addEventListener("click", addTasks);

}

async function loadTasks(e) {

    if (e) {
        e.preventDefault();
    }

    tasks = await (await fetch(API_URL)).json();
    // console.log(JSON.stringify(tasks, 0, 2));

    selectors.toDoListContainer.innerHTML = "";

    Object.values(tasks).forEach(task => {
        const listContainer = createElement("li");
        createElement("span", task.name, null, null, listContainer);
        const removeButton = createElement("button", "Remove", null, task._id, listContainer);
        const editButton = createElement("button", "Edit", null, task._id, listContainer);

        removeButton.addEventListener("click", removeTask);
        editButton.addEventListener("click", editTask);

        selectors.toDoListContainer.appendChild(listContainer);
    });

}

async function addTasks(e) {

    e.preventDefault();

    if (Object.values(inputSelectors).some(inputSelectors => inputSelectors.value === "")) {
        return;
    }

    const task = {
        name: inputSelectors.name.value,
    };

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(task),
    });

    await loadTasks(e);

    Object.values(inputSelectors).forEach(selector => selector.value = "");

}

async function removeTask(e) {

    const taskId = e.currentTarget.getAttribute("id");
    const task = tasks[taskId];
    // console.log(JSON.stringify(task, 0, 2));

    await fetch(`${API_URL}/${task._id}`, {
        method: "DELETE",
    });

    await loadTasks(e)

}

async function editTask(e) {

    const taskId = e.currentTarget.getAttribute("id");
    const task = tasks[taskId];
    // console.log(JSON.stringify(task, 0, 2));

    const list = e.currentTarget.parentElement;
    const span = list.querySelector("span");
    const spanContent = span.textContent;

    const newInput = createElement("input");
    newInput.value = spanContent;
    newInput.setAttribute("type", "text");
    newInput.setAttribute("name", "title");
    newInput.setAttribute("id", "title");

    span.remove();
    list.querySelector("button").remove();
    list.querySelector("button").remove();

    list.appendChild(newInput);
    const newRemoveButton = createElement("button", "Remove", "remove-button", task._id);
    newRemoveButton.addEventListener("click", removeTask);
    list.appendChild(newRemoveButton);
    const submitButton = createElement("button", "Submit", "submit-button", task._id);
    submitButton.addEventListener("click", submitNewContent);
    list.appendChild(submitButton);

}

async function submitNewContent(e) {

    const taskId = e.currentTarget.getAttribute("id");
    const task = tasks[taskId];
    // console.log(JSON.stringify(task, 0, 2));

    const newValue = e.currentTarget.parentElement.querySelector("#title").value;
    task.name = newValue;

    await fetch(`${API_URL}/${task._id}`, {
        method: "PATCH",
        body: JSON.stringify(task),
    });

    await loadTasks(e);

}


function createElement(type, textContent, classes, id, parent, useInnerHTML) {
    const element = document.createElement(type);

    if (useInnerHTML && textContent) {
        element.innerHTML = textContent;
    } else if (textContent) {
        element.textContent = textContent;
    }

    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }

    if (id) {
        element.setAttribute("id", id);
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;
}

attachEvents();
