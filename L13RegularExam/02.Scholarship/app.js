window.addEventListener("load", solve);

function solve() {

  let tasks = {};

  const inputSelectors = {
    student: document.querySelector("#student"),
    university: document.querySelector("#university"),
    score: document.querySelector("#score"),
  };

  const selectors = {
    nextButton: document.querySelector("#next-btn"),
    previewContainer: document.querySelector("#preview-list"),
    candidateContainer: document.querySelector("#candidates-list"),
  };


  selectors.nextButton.addEventListener("click", addTask);

  function addTask() {

    if (Object.values(inputSelectors).some(input => input.value === "")) {
      return;
    }

    const task = {
      id: Object.values(tasks).length + 1,
      student: inputSelectors.student.value,
      university: inputSelectors.university.value,
      score: inputSelectors.score.value,
    };

    tasks[task.id] = task;
    // console.log(JSON.stringify(tasks, 0, 2));

    const list = createElement("li", null, ["application"], null);
    const article = createElement("article", null, [], null, list);
    createElement("h4", task.student, [], null, article);
    createElement("p", `University: ${task.university}`, [], null, article);
    createElement("p", `Score: ${task.score}`, [], null, article);

    const editButton = createElement("button", "edit", ["action-btn"], task.id, list);
    editButton.classList.add(["edit"]);
    editButton.addEventListener("click", editTask);

    const applyButton = createElement("button", "apply", ["action-btn"], task.id, list);
    applyButton.classList.add(["apply"]);
    applyButton.addEventListener("click", deleteTask);

    selectors.previewContainer.appendChild(list);

    Object.values(inputSelectors).forEach(selector => selector.value = "");
    selectors.nextButton.disabled = true;

  }

  function editTask(e) {

    const taskId = e.currentTarget.getAttribute("id");

    Object.keys(inputSelectors).forEach(key => {
        const selector = inputSelectors[key];
        selector.value = tasks[taskId][key];
    });

    const currentTask = e.currentTarget.parentElement;
    console.log(currentTask);
    currentTask.remove();

    selectors.nextButton.disabled = false;

  }

  function deleteTask(e) {
    
    const taskId = e.currentTarget.getAttribute("id");

    const taskElement = document.querySelector(".application");

    taskElement.querySelector("button").remove();
    taskElement.querySelector("button").remove();

    selectors.candidateContainer.appendChild(taskElement);
    delete tasks[taskId];

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
