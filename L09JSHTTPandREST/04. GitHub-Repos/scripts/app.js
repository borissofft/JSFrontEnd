function loadRepos() {

   const repos = fetch('https://api.github.com/users/testnakov/repos')
      .then(res => res.json())
      .then(body => console.log(body))
      .catch(err => console.log(err));

}