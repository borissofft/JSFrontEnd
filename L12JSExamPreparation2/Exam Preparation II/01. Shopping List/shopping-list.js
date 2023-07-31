function solve(input) {

    const products = input.shift().split("!");

    let line = input.shift();
    while (line !== "Go Shopping!") {
        const lineArr = line.split(" ");
        const command = lineArr[0];
        const firstProduct = lineArr[1];
        const secondProduct = lineArr[2];
        const firstProductIndex = products.indexOf(firstProduct);

        switch (command) {
            case "Urgent":
                if (!products.includes(firstProduct)) {
                    products.unshift(firstProduct);
                }
                break;
            case "Unnecessary":
                if (products.includes(firstProduct)) {
                    products.splice(firstProductIndex, 1);
                }
                break;
            case "Correct":
                if (products.includes(firstProduct)) {
                    products.splice(firstProductIndex, 1, secondProduct);
                }
                break;
            case "Rearrange":
                if (products.includes(firstProduct)) {
                    products.push(products.splice(firstProductIndex, 1));
                }
                break;
        }

        line = input.shift();
    }

    console.log(products.join(", "));

}

solve([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);

solve([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);