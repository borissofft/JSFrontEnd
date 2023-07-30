window.addEventListener("load", solve);

function solve() {

    const tasks = {};

    const inputSelectors = {
        title: document.querySelector("#task-title"),
        category: document.querySelector("#task-category"),
        content: document.querySelector("#task-content"),
    };

    const publishButton = document.querySelector("#publish-btn");
    publishButton.addEventListener('click', publishForm);

    function publishForm() {

        if (Object.values(inputSelectors).some(selector => selector.value === "")) {
            return;
        }

        const task = {
            title: inputSelectors.title.value,
            category: inputSelectors.category.value,
            content: inputSelectors.content.value,
        };

        tasks[task.class] = task;

        const titleHeaderElement = document.createElement("h4");
        titleHeaderElement.textContent = task.title;

        const categoryParagraphElement = document.createElement("p");
        categoryParagraphElement.textContent = `Category: ${task.category}`;

        const contentParagraphElement = document.createElement("p");
        contentParagraphElement.textContent = `Content: ${task.content}`;

        const articleElement = document.createElement("article");
        articleElement.appendChild(titleHeaderElement);
        articleElement.appendChild(categoryParagraphElement);
        articleElement.appendChild(contentParagraphElement);

        const buttonEditElement = document.createElement("button");
        buttonEditElement.classList.add("action-btn");
        buttonEditElement.classList.add("edit");
        buttonEditElement.textContent = "Edit";

        const buttonPostElement = document.createElement("button");
        buttonPostElement.classList.add("action-btn");
        buttonPostElement.classList.add("post");
        buttonPostElement.textContent = "Post";

        const listItemElement = document.createElement("li");
        listItemElement.classList.add(["rpost"]);
        listItemElement.appendChild(articleElement);
        listItemElement.appendChild(buttonEditElement);
        listItemElement.appendChild(buttonPostElement);

        const reviewListElement = document.querySelector("#review-list");
        reviewListElement.appendChild(listItemElement);

        const publishedListElement = document.querySelector("#published-list");

        Object.values(inputSelectors).forEach(selector => selector.value = "");

        buttonEditElement.addEventListener("click", (e) => {

            inputSelectors.title.value = task.title;
            inputSelectors.category.value = task.category;
            inputSelectors.content.value = task.content;

            listItemElement.remove();

        });

        buttonPostElement.addEventListener("click", (e) => {

            buttonEditElement.removeEventListener;
            buttonEditElement.remove();
            buttonPostElement.removeEventListener;
            buttonPostElement.remove();

            publishedListElement.appendChild(listItemElement);

        });

    }

}