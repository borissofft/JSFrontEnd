function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const searchQuery = document.querySelector("#searchField").value;
      const cels = Array.from(document.querySelectorAll("tbody td"));

      cels.forEach(cell => {
         if (cell.textContent.includes(searchQuery)) {
            
         }
      })

   }
}