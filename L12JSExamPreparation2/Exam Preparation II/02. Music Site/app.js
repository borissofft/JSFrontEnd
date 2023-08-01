window.addEventListener('load', solve);

function solve() {

    const songs = {};

    let likesCounter = 0;

    const inputSelectors = {
        genre: document.querySelector("#genre"),
        name: document.querySelector("#name"),
        author: document.querySelector("#author"),
        date: document.querySelector("#date"),
    };

    const selectors = {
        addButton: document.querySelector("#add-btn"),
        songContainer: document.querySelector(".all-hits-container"),
        totalLikes: document.querySelector("#total-likes .likes p"),
        saveContainer: document.querySelector(".saved-container"),
    };

    selectors.addButton.addEventListener("click", addSong);

    function addSong(e) {

        e.preventDefault();

        if (Object.values(inputSelectors).some(selector => selector.value === "")) {
            return;
        }

        const song = {
            id: Object.values(songs).length + 1,
            genere: inputSelectors.genre.value,
            name: inputSelectors.name.value,
            author: inputSelectors.author.value,
            date: inputSelectors.date.value,
        }

        songs[song.id] = song;

        const div = createElement("div", null, ["hits-info"], song.id);

        const image = document.createElement("img");
        image.setAttribute("src", "./static/img/img.png");
        div.appendChild(image);

        createElement("h2", `Genre: ${song.genere}`, null, null, div);
        createElement("h2", `Name: ${song.name}`, null, null, div);
        createElement("h2", `Author: ${song.author}`, null, null, div);
        createElement("h3", `Date: ${song.date}`, null, null, div);
        const saveButton = createElement("button", "Save song", ["save-btn"], null, div);
        const likeButton = createElement("button", "Like song", ["like-btn"], null, div);
        const deleteButton = createElement("button", "Delete", ["delete-btn"], null, div);

        saveButton.addEventListener("click", saveSong);
        likeButton.addEventListener("click", likeSong);
        deleteButton.addEventListener("click", deleteSong);

        selectors.songContainer.appendChild(div);

        Object.values(inputSelectors).forEach(selector => selector.value = "");

    }

    function saveSong(e) {

        const currentSongToSave = e.currentTarget.parentElement;
        currentSongToSave.querySelector(".like-btn").remove();
        currentSongToSave.querySelector(".save-btn").remove();
        selectors.saveContainer.appendChild(currentSongToSave);

    }

    function likeSong(e) {

        e.currentTarget.disabled = true;
        likesCounter++;
        selectors.totalLikes.textContent = `Total Likes: ${likesCounter}`;

    }

    function deleteSong(e) {

        e.currentTarget.parentElement.remove();

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