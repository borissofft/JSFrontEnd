const API_URL = "http://localhost:3030/jsonstore/tasks";

let tasks = {};

const taskSections = {
    "ToDo": document.querySelector("#todo-section .task-list"),
    "In Progress": document.querySelector("#in-progress-section .task-list"),
    "Code Review": document.querySelector("#code-review-section .task-list"),
    "Done": document.querySelector("#done-section .task-list"),
}

const statusToNextStatusMap = {
    "ToDo": "Move to In Progress",
    "In Progress": "Move to Code Review",
    "Code Review": "Move to Done",
    "Done": "Close",
}

const statusMoveToNext = {
    "ToDo": "In Progress",
    "In Progress": "Code Review",
    "Code Review": "Done",
}

const inputSelectors = {
    title: document.querySelector("#title"),
    description: document.querySelector("#description"),
};

const selectors = {
    loadButton: document.querySelector("#load-board-btn"),
    addButton: document.querySelector("#create-task-btn"),
};


function attachEvents() {

    selectors.loadButton.addEventListener("click", loadTasks);
    selectors.addButton.addEventListener("click", addTasks);

}

async function loadTasks() {

    Object.values(taskSections).forEach(section => section.innerHTML = "");

    tasks = await (await fetch(API_URL)).json();
    // console.log(JSON.stringify(tasks, 0, 2));

    Object.values(tasks).forEach(task => {

        const section = taskSections[task.status];
        const listContainer = createElement("li", null, ["task"], null, section);
        createElement("h3", task.title, null, null, listContainer);
        createElement("p", task.description, null, null, listContainer);
        const moveButton = createElement("button", statusToNextStatusMap[task.status], null, task._id, listContainer);
        if (task.status !== "Done") {
            moveButton.textContent = statusToNextStatusMap[task.status];
            moveButton.addEventListener("click", moveTask);
        } else {
            moveButton.textContent = "Close";
            moveButton.addEventListener("click", (e) => {
            
                fetch(`${API_URL}/${task._id}`, {
                    method: "DELETE",
                });
            
                loadTasks(e);
            });
        }
        section.appendChild(listContainer);

    });
}

async function addTasks() {

    if (Object.values(inputSelectors).some(input => input.value === "")) {
        return;
    }

    const task = {
        title: inputSelectors.title.value,
        description: inputSelectors.description.value,
        status: "ToDo",
    }

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(task),
    });

    Object.values(inputSelectors).forEach(selector => selector.value = "");
    await loadTasks();

}

async function moveTask(e) {

    const taskId = e.currentTarget.getAttribute("id");
    const task = tasks[taskId];
    let method = "PATCH";
    let body = JSON.stringify({
        ...task,
        status: statusMoveToNext[task.status],
    });

    await fetch(`${API_URL}/${task._id}`, {
        method: method,
        body: body,
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