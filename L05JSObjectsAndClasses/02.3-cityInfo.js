function printCityInfo(city) {

Object.entries(city).forEach(function (pair) {
   const key = pair[0]; 
   const value = pair[1];
   console.log(`${key} -> ${value}`);
});

}

printCityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

