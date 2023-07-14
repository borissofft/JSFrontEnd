function focused() {

    const inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(input => {

        input.addEventListener('focus', (e) => {
            // e.target.parentElement.className = "focused";
            e.target.parentElement.classList.add("focused");
        });

        input.addEventListener('blur', (e) => {
            // e.target.parentElement.className = "";
            e.target.parentElement.classList.remove("focused");
        });

    });

}