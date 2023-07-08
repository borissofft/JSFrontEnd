// Not compleated task!!!

function oddOccurrences(input) {

    input = input.toLowerCase();

    class Element {
        constructor(name, count) {
            this.name = name;
            this.count = count;
        }
    }

    const All = [];

    const allElements = input.split(" ").forEach(element => {
        All.push(new Element(element, 0));
    });


    console.log(JSON.stringify(All));

    // input.split(" ").forEach((element) => {
    //     if (allElements.hasOwnProperty(element)) {
    //         allElements[element] += 1;
    //     }
    // });

    // Object.entries(allElements).filter(element => element[1] % 2 !== 0).forEach(([word, count]) => console.log(word));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

// oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');