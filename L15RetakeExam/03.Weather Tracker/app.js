const API_URL = "http://localhost:3030/jsonstore/tasks";

let tasks = {};

const inputSelectors = {
    location: document.querySelector("#location"),
    temperature: document.querySelector("#temperature"),
    date: document.querySelector("#date"),
};

const selectors = {
    loadButton: document.querySelector("#load-history"),
    addButton: document.querySelector("#add-weather"),
    mainDivContainer: document.querySelector("#list"),
};



selectors.loadButton.addEventListener("click", loadTasks);
selectors.addButton.addEventListener("click", addTask);




async function loadTasks() {

    selectors.mainDivContainer.innerHTML = "";

    tasks = await (await fetch(API_URL)).json();
    // console.log(JSON.stringify(tasks, 0, 2));

    Object.values(tasks).forEach(task => {

        const div = createElement("div", null, ["container"], task.id);
        createElement("h2", task.location, [], null, div);
        createElement("h3", task.date, [], null, div);
        createElement("h2", task.temperature, [], "celsius", div);

        const divButtons = createElement("div", null, ["buttons-container"], null, div);

        const changeButton = createElement("button", "Change", ["change-btn"], task.id, divButtons);
        const deleteButton = createElement("button", "Delete", ["delete-btn"], task.id, divButtons);

        selectors.mainDivContainer.appendChild(div);

    });

    selectors.loadButton.disabled = true;

}

async function addTask() {

    if (Object.values(inputSelectors).some(input => input.value === "")) {
        return;
    }

    const task = {
        location: inputSelectors.location.value,
        temperature: inputSelectors.temperature.value,
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