let city = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}

function printCityInfo(city) {

    for (const key in city) {
        console.log(key + " -> " + city[key]);
    }

}

printCityInfo(city);