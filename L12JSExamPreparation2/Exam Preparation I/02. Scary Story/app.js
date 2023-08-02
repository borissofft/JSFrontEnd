window.addEventListener("load", solve);

function solve() {

  const stories = {};

  const inputSelectors = {
    firstName: document.querySelector("#first-name"),
    lastName: document.querySelector("#last-name"),
    age: document.querySelector("#age"),
    title: document.querySelector("#story-title"),
    genre: document.querySelector("#genre"),
    textContent: document.querySelector("#story"),
  };

  const selectors = {
    publishButton: document.querySelector("#form-btn"),
    previewContainer: document.querySelector("#preview-list"),
    mainDiv: document.querySelector("#main"),
  };

  selectors.publishButton.addEventListener("click", publishStory);

  function publishStory() {

    if (Object.values(inputSelectors).some(selector => selector.value === "")) {
      return;
    }

    const story = {
      id: Object.values(stories).length + 1,
      firstName: inputSelectors.firstName.value,
      lastName: inputSelectors.lastName.value,
      age: inputSelectors.age.value,
      title: inputSelectors.title.value,
      genre: inputSelectors.genre.value,
      textContent: inputSelectors.textContent.value,
    }

    stories[story.id] = story;

    const storyList = createElement("li", null, ["story-info"], story.id);
    const article = createElement("article", null, null, null, storyList);
    createElement("h4", `Name: ${story.firstName} ${story.lastName}`, null, null, article);
    createElement("p", `Age: ${story.age}`, null, null, article);
    createElement("p", `Title: ${story.title}`, null, null, article);
    createElement("p", `Genre: ${story.genre}`, null, null, article);
    createElement("p", story.textContent, null, null, article);

    const saveButton = createElement("button", "Save Story", ["save-btn"], null, storyList);
    const editButton = createElement("button", "Edit Story", ["edit-btn"], null, storyList);
    const deleteButton = createElement("button", "Delete Story", ["delete-btn"], null, storyList);

    saveButton.addEventListener("click", saveStory);
    editButton.addEventListener("click", editStory);
    deleteButton.addEventListener("click", deleteStory);

    selectors.previewContainer.appendChild(storyList);

    selectors.publishButton.disabled = true;
    saveButton.disabled = false;
    editButton.disabled = false;
    deleteButton.disabled = false;

    Object.values(inputSelectors).forEach(selector => selector.value = "");

  }

  function saveStory(e) {

    const currentStory = e.currentTarget.parentElement.parentElement.parentElement;
    currentStory.remove();
    selectors.mainDiv.appendChild(createElement("h1", "Your scary story is saved!"));

    console.log(currentStory);

  }

  function editStory(e) {

    const currentStory = e.currentTarget.parentElement;

    currentStory.querySelector(".save-btn").setAttribute("disabled", true);
    currentStory.querySelector(".edit-btn").setAttribute("disabled", true);
    currentStory.querySelector(".delete-btn").setAttribute("disabled", true);

    const storyId = e.currentTarget.parentElement.getAttribute("id");

    Object.keys(inputSelectors).forEach(key => {
      const selector = inputSelectors[key];
      selector.value = stories[storyId][key];
    });

    currentStory.remove();

    selectors.publishButton.disabled = false;

  }

  function deleteStory(e) {

    const storyToDelete = e.currentTarget.parentElement;
    storyToDelete.remove();

    selectors.publishButton.disabled = false;

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
