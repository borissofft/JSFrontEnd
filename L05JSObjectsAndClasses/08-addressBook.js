function addressBook(input) {

    const addressbook = input.reduce((acc, curr) => {
        const [name, address] = curr.split(":");
        acc[name] = address;

        return acc;
    }, {});

    const sorted = Object.entries(addressbook);
    sorted.sort((a,b) => a[0].localeCompare(b[0])).forEach(([name, addres]) => console.log(`${name} -> ${addres}`));

}

addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])