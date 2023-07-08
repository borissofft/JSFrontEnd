function townsTable(input) {

    const cities = input.map((city) => {
        const [name, lat, long] = city.split(" | ");
        return { town: name, latitude: Number(lat).toFixed(2), longitude: Number(long).toFixed(2) };
    })
        .forEach(city => {
            console.log(city);
        });
    ;

}

townsTable([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);