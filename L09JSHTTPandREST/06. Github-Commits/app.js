// function loadCommits() {

//     const username = document.querySelector("#username").value;
//     const repo = document.querySelector("#repo").value;

//     if (!username || !repo) {
//         // print out error message
//         return;
//     }

//     const list = document.querySelector('ul');

//     fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
//         .then(res => res.json())
//         .then(commits => {
//             commits.forEach((commitObject) => {
//                 const item = document.createElement('li');
//                 item.textContent = commitObject.commit.message;

//                 list.appendChild(item);
//             });
//         });

// }


// Variant 2
async function loadCommits() {

    const username = document.querySelector("#username").value;
    const repo = document.querySelector("#repo").value;

    if (!username || !repo) {
        // print out error message
        return;
    }

    const list = document.querySelector('ul');
    list.innerHTML = "";

    const response = await (
        await fetch(`https://api.github.com/repos/${username}/${repo}/commits`))
            .json();

    response.forEach((commitObject) => {
        const item = document.createElement('li');
        item.textContent = commitObject.commit.message;

        list.appendChild(item);
    });

}