function promise() {

// 1. Get promise

//    const repos = fetch("https://api.github.com/users/testnakov/repos")
//       .then(res => res.json())
//       .then(body => {

//          body.forEach(repo => {
//             const name = document.createElement("h2");
//             name.textContent = repo.name;
//             document.querySelector("body").appendChild(name);
//          });

//       })
//       .catch(err => console.log(err));



// 2. Create promise

const simulatedResponse = new Promise((resolve, reject) => { // resolve and reject are functions !!!
   setTimeout(() => {
      reject();
   }, 500);
});

simulatedResponse
.then(() => console.log("Success"))
.catch(() => console.log("Error"));

}