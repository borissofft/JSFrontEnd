window.addEventListener('load', solve);

function solve() {

    let tasks = {};

    const inputSelectors = {
        title: document.querySelector("#title"),
        description: document.querySelector("#description"),
        label: document.querySelector("#label"),
        points: document.querySelector("#points"),
        assignee: document.querySelector("#assignee"),
    };

    const selectors = {
        createTaskButton: document.querySelector("#create-task-btn"),
        deleteTaskButton: document.querySelector("#delete-task-btn"),
        tasksSection: document.querySelector("#tasks-section"),
        totalPoints: document.querySelector("#total-sprint-points"),
        hiddenTaskId: document.querySelector("#task-id"),
    };

    const icons = {
        Feature: "&#8865;",
        "Low Priority Bug": "&#9737;",
        "High Priority Bug": "&#9888;",
    };

    const labelClasses = {
        Feature: "feature",
        "Low Priority Bug": "low-priority",
        "High Priority Bug": "high-priority",
    }

    selectors.createTaskButton.addEventListener("click", createTask);
    selectors.deleteTaskButton.addEventListener("click", deleteTask);

    function createTask() {

        if (Object.values(inputSelectors).some(input => input.value === "")) {
            return;
        }

        const task = {
            id: `task-${Object.values(tasks).length + 1}`,
            title: inputSelectors.title.value,
            description: inputSelectors.description.value,
            label: inputSelectors.label.value,
            points: Number(inputSelectors.points.value),
            assignee: inputSelectors.assignee.value,
        };

        tasks[task.id] = task;
        // console.log(JSON.stringify(tasks, 0, 2));

        const article = createElement("article", null, ["task-card"], task.id);
        const div = createElement("div", `${task.label} ${icons[task.label]}`, ["task-card-label"], null, article, true);
        div.classList.add(labelClasses[task.label]);

        createElement("h3", task.title, ["task-card-title"], null, article);
        createElement("p", task.description, ["task-card-description"], null, article);
        createElement("div", `Estimated at ${task.points} pts`, ["task-card-points"], null, article);
        createElement("div", `Assigned to: ${task.assignee}`, ["task-card-assignee"], null, article);
        const taskAction = createElement("div", null, ["task-card-actions"], null, article);

        const deleteButton = createElement("button", "Delete", [], null, taskAction);
        deleteButton.addEventListener("click", loadDeleteConfirm);

        selectors.tasksSection.appendChild(article);

        Object.values(inputSelectors).forEach(selector => selector.value = "");

        calculateTotalPoints();
    }

    function loadDeleteConfirm(e) {

        const taskId = e.currentTarget.parentElement.parentElement.getAttribute("id");

        Object.keys(inputSelectors).forEach(key => {
            const selector = inputSelectors[key];
            selector.value = tasks[taskId][key];
            selector.disabled = true;
        });


        selectors.hiddenTaskId.value = taskId;
        selectors.createTaskButton.disabled = true;
        selectors.deleteTaskButton.disabled = false;

    }

    function deleteTask() {

        const taskId = selectors.hiddenTaskId.value;
        const taskElement = document.querySelector(`#${taskId}`);
        taskElement.remove();
        delete tasks[taskId];

        Object.values(inputSelectors).forEach(selector => {
            selector.value = "";
            selector.disabled = false;
        });

        selectors.createTaskButton.disabled = false;
        selectors.deleteTaskButton.disabled = true;

        calculateTotalPoints();

    }

    function calculateTotalPoints() {
        const totalPoints = Object.values(tasks).reduce((acc, curr) => acc + curr.points, 0);
        selectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;
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

}