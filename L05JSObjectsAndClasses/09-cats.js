function createCats(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

        // meow = () => {
        //     console.log(`${this.name}, age ${this.age} says Meow`);
        // }

    }

    input.forEach(line => {
        const [name, age] = line.split(" ");
        const cat = new Cat(name, age);
        cat.meow();

        // const greet = cat.meow;
        // greet();
    });

}

createCats(['Mellow 2', 'Tom 5']);