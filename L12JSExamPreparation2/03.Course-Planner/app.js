const API_URL = "http://localhost:3030/jsonstore/tasks";

const courseTypes = [
    "Long",
    "Medium",
    "Short"
];

const courseListElement = document.querySelector("#list");

const loadButtonElement = document.querySelector("#load-course");
const addButtonElement = document.querySelector("#add-course");
const editCourseButtonElement = document.querySelector("#edit-course");

const courseTitleElement = document.querySelector("#course-name");
const courseTypeElement = document.querySelector("#course-type");
const courseDescriptionElement = document.querySelector("#description");
const courseTeacherElement = document.querySelector("#teacher-name");

loadButtonElement.addEventListener("click", loadCourses);
addButtonElement.addEventListener("click", addCourse);
editCourseButtonElement.addEventListener("click", editCourse);

let currentCourseId = "";

async function loadCourses() {

    const data = await (await fetch(API_URL)).json();
    // const courses = Object.values(data);
    const courses = Object.keys(data).map(key => ({_id: key, ...data[key]}));

    courseListElement.innerHTML = "";

    // courses.forEach(course => courseListElement.appendChild(renderCourse(course)));

    const coursesFragment = document.createDocumentFragment(); // more efective
    courses.forEach(course => coursesFragment.appendChild(renderCourse(course)).setAttribute("data-course-id", course._id));
    courseListElement.appendChild(coursesFragment);

}

async function addCourse(e) {

    e.preventDefault(); // because button Add Course by default have submit type and reloads the site

    const type = courseTypeElement.value;

    if (!courseTypes.includes(type)) {
        return;
    }

    const title = courseTitleElement.value;
    const description = courseDescriptionElement.value;
    const teacher = courseTeacherElement.value;

    const course = {
        title: title,
        type: type,
        description: description,
        teacher: teacher,
    }

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(course),
    });

    clearForm();

    // courseListElement.innerHTML = "";

    await loadCourses();

}

async function editCourse(e) {

    e.preventDefault();

    const type = courseTypeElement.value;

    if (!courseTypes.includes(type)) {
        return;
    }

    const title = courseTitleElement.value;
    const description = courseDescriptionElement.value;
    const teacher = courseTeacherElement.value;

    const course = {
        // _id: currentCourseId,
        title: title,
        type: type,
        description: description,
        teacher: teacher,
    }

    await fetch(`${API_URL}/${currentCourseId}`, {
        method: "PUT",
        body: JSON.stringify(course),
    });

    clearForm();
    addButtonElement.disabled = false;
    editCourseButtonElement.disabled = true;

    await loadCourses();

}

function renderCourse(course) {

    const titleElement = document.createElement("h2");
    titleElement.textContent = course.title;

    const teacherElement = document.createElement("h3");
    teacherElement.textContent = course.teacher;

    const typeElement = document.createElement("h3");
    typeElement.textContent = course.type;

    const descriptionElement = document.createElement("h4");
    descriptionElement.textContent = course.description;

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("edit-btn");
    editButtonElement.textContent = "Edit course";

    const finishButtonElement = document.createElement("button");
    finishButtonElement.classList.add("finish-btn");
    finishButtonElement.textContent = "Finish course";

    const courseContainer = document.createElement("div");
    courseContainer.classList.add("container");
    courseContainer.appendChild(titleElement);
    courseContainer.appendChild(teacherElement);
    courseContainer.appendChild(typeElement);
    courseContainer.appendChild(descriptionElement);
    courseContainer.appendChild(editButtonElement);
    courseContainer.appendChild(finishButtonElement);

    editButtonElement.addEventListener("click", (e) => {

        courseTitleElement.value = course.title;
        courseTypeElement.value = course.type;
        courseDescriptionElement.value = course.description;
        courseTeacherElement.value = course.teacher;

        currentCourseId = courseContainer.getAttribute("data-course-id");
        console.log(currentCourseId);

        courseContainer.remove();
        addButtonElement.disabled = true;
        editCourseButtonElement.disabled = false;

    });

    finishButtonElement.addEventListener("click", async (e) => {
        await fetch(`${API_URL}/${course._id}`, {
            method: "DELETE",
        });

        await loadCourses();
    });

    return courseContainer;
}

function clearForm() {
    courseTypeElement.value = "";
    courseTitleElement.value = "";
    courseDescriptionElement.value = "";
    courseTeacherElement.value = "";
}