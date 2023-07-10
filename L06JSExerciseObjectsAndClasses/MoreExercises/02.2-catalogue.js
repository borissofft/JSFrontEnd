function catalogue(input) {

    const products = input.reduce((acc, curr) => {
        const [key, value] = curr.split(" : ");
        const letter = key[0];

        if (!acc[letter]) {
            acc[letter] = [];
        }

        acc[letter].push({ name: key, price: value });
        return acc;
    }, {});

    Object.keys(products).sort().forEach((letter) => {
        console.log(letter);
        products[letter].sort((a, b) => a.name.localeCompare(b.name)).forEach((product) => console.log(`  ${product.name}: ${product.price}`));
    });

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);