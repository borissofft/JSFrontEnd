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
    editButton: document.querySelector("#edit-weather"),
    mainDivContainer: document.querySelector("#list"),
};



selectors.loadButton.addEventListener("click", loadTasks);
selectors.addButton.addEventListener("click", addTask);




async function loadTasks() {

    selectors.mainDivContainer.innerHTML = "";

    tasks = await (await fetch(API_URL)).json();
    console.log(JSON.stringify(tasks, 0, 2));

    Object.values(tasks).forEach(task => {

        const div = createElement("div", null, ["container"], task._id);
        createElement("h2", task.location, [], null, div);
        createElement("h3", task.date, [], null, div);
        createElement("h2", task.temperature, [], "celsius", div);

        const divButtons = createElement("div", null, ["buttons-container"], null, div);

        const changeButton = createElement("button", "Change", ["change-btn"], task._id, divButtons);
        changeButton.addEventListener("click", async (e) => {

            Object.keys(inputSelectors).forEach(key => {
                const selector = inputSelectors[key];
                selector.value = tasks[task._id][key];
            });

            e.currentTarget.parentElement.parentElement.remove();

            selectors.editButton.disabled = false;
            selectors.addButton.disabled = true;

            selectors.editButton.addEventListener("click", async (e) => {

                const taskToEdit = {
                    location: inputSelectors.location.value,
                    temperature: inputSelectors.temperature.value,
                    date: inputSelectors.date.value,
                    _id: task._id,
                }

                await fetch(`${API_URL}/${task._id}`, {
                    method: "PUT",
                    body: JSON.stringify(taskToEdit),
                });

                Object.values(inputSelectors).forEach(selector => selector.value = "");
                selectors.editButton.disabled = true;
                selectors.addButton.disabled = false;
                selectors.mainDivContainer.innerHTML = "";
                loadTasks(e);

            });

        });


        const deleteButton = createElement("button", "Delete", ["delete-btn"], task._id, divButtons);
        deleteButton.addEventListener("click", async (e) => {
            await fetch(`${API_URL}/${task._id}`, {
                method: "DELETE",
            });

            await loadTasks();
        });

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