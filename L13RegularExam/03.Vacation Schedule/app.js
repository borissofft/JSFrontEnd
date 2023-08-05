const API_URL = "http://localhost:3030/jsonstore/tasks";

let tasks = {};

const inputSelectors = {
    name: document.querySelector("#name"),
    days: document.querySelector("#num-days"),
    date: document.querySelector("#from-date"),
};

const selectors = {
    loadButton: document.querySelector("#load-vacations"),
    editButton: document.querySelector("#edit-vacation"),
    addButton: document.querySelector("#add-vacation"),
    divContainer: document.querySelector("#list"),
};


async function attachEvents() {

    selectors.loadButton.addEventListener("click", loadTasks);

    selectors.editButton.setAttribute("type", "button");
    selectors.editButton.addEventListener("click", loadTasks);

    selectors.addButton.setAttribute("type", "button");
    selectors.addButton.addEventListener("click", addTask);

}

async function loadTasks(e) {

    selectors.divContainer.innerHTML = "";

    tasks = await (await fetch(API_URL)).json();
    console.log(JSON.stringify(tasks, 0, 2));

    Object.values(tasks).forEach(task => {

        const div = createElement("div", null, ["container"]);
        createElement("h2", task.name, [], null, div);
        createElement("h3", task.date, [], null, div);
        createElement("h3", task.days, [], null, div);

        const changeButton = createElement("button", "Change", ["change-btn"], task._id, div);
        changeButton.addEventListener("click", (e) => {

            Object.keys(inputSelectors).forEach(key => {
                const selector = inputSelectors[key];
                selector.value = tasks[task._id][key];
            });

            selectors.editButton.disabled = false;
            selectors.addButton.disabled = true;

            selectors.editButton.addEventListener("click", async (e) => {

                const taskToEdit = {
                    id: task._id,
                    name: inputSelectors.name.value,
                    days: inputSelectors.days.value,
                    date: inputSelectors.date.value,
                }

                await fetch(`${API_URL}/${task._id}`, {
                    method: "PUT",
                    body: JSON.stringify(taskToEdit),
                });

                Object.values(inputSelectors).forEach(selector => selector.value = "");
                selectors.editButton.disabled = true;
                selectors.addButton.disabled = false;
                loadTasks(e);

            });

        });

        const doneButton = createElement("button", "Done", ["done-btn"], task._id, div);
        doneButton.addEventListener("click", (e) => {

            fetch(`${API_URL}/${task._id}`, {
                method: "DELETE",
            });

            loadTasks(e);

        });

        selectors.divContainer.appendChild(div);

        selectors.editButton.disabled = true;
    });

}

async function addTask() {

    if (Object.values(inputSelectors).some(input => input.value === "")) {
        return;
    }

    const task = {
        name: inputSelectors.name.value,
        days: inputSelectors.days.value,
        date: inputSelectors.date.value,
    }

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(task),
    });

    Object.values(inputSelectors).forEach(selector => selector.value = "");
    await loadTasks();

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