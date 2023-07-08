function employeeList(input) {

    const listOfEmployees = input.reduce((acc, curr) => {
        acc[curr] = curr.length;

        return acc;
    }, {});

    Object.entries(listOfEmployees)
        .forEach(([name, personalNum]) => console.log(`Name: ${name} -- Personal Number: ${personalNum}`));

}

employeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);