function oddOccurrences(input) {

    input = input.toLowerCase();

    let allElements = input.split(" ");
    let oddCountOfElement = [];

    for (let i = 0; i < allElements.length; i++) {
        let currentElement = allElements[i];
        let count = 0;
        for (let j = 0; j < allElements.length; j++) {
            if (currentElement === allElements[j] && !oddCountOfElement.includes(currentElement)) {
                count++;
            }
        }

        if (count % 2 !== 0) {
            oddCountOfElement.push(currentElement)
        }

    }

    console.log(oddCountOfElement.join(" "));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');