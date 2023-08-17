window.addEventListener("load", solve);

function solve() {

  let tasks = {};

  const inputSelectors = {
    player: document.querySelector("#player"),
    score: document.querySelector("#score"),
    round: document.querySelector("#round"),
  };

  const selectors = {
    createTaskButton: document.querySelector("#add-btn"),
    sureListContainer: document.querySelector("#sure-list"),
  };

  selectors.createTaskButton.addEventListener("click", createTask);


  function createTask() {

    if (Object.values(inputSelectors).some(input => input.value === "")) {
      return;
    }

    const task = {
      id: Object.values(tasks).length + 1,
      player: inputSelectors.player.value,
      score: inputSelectors.score.value,
      round: inputSelectors.round.value,
    };

    tasks[task.id] = task;
    // console.log(JSON.stringify(tasks, 0, 2));

    const list = createElement("li", null, ["dart-item"], task.id);
    const article = createElement("article", null, [], null, list);
    createElement("p", task.player, [], null, article);
    createElement("p", `Score: ${task.score}`, [], null, article);
    createElement("p", `Round: ${task.round}`, [], null, article);

    const editButton = createElement("button", "edit", ["btn"], task.id, list);
    editButton.classList.add(["edit"]);
    editButton.addEventListener("click", editTask);

    const okButton = createElement("button", "ok", ["btn"], task.id, list);
    okButton.classList.add(["ok"]);

    selectors.sureListContainer.appendChild(list);

    selectors.createTaskButton.disabled = true;
    Object.values(inputSelectors).forEach(selector => selector.value = "");

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

    selectors.createTaskButton.disabled = false;

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
