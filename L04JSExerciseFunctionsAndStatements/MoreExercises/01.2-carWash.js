const soapValue = 10;
const waterValue = 0.2;
const vacuumCleanerValue = 0.25;
const mudValue = 0.1;

const carWashValues = {
    soap: (cleanPercentage) => cleanPercentage += soapValue,
    water: (cleanPercentage) => cleanPercentage += cleanPercentage * waterValue,
    "vacuum cleaner": (cleanPercentage) => cleanPercentage += cleanPercentage * vacuumCleanerValue,
    mud: (cleanPercentage) => cleanPercentage -= cleanPercentage * mudValue
};

function carWash(commands) {

    let cleanPercentage = 0;

    for (let index = 0; index < commands.length; index++) {

        const command = commands[index];
        cleanPercentage = carWashValues[command](cleanPercentage);

    }

    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`);
}

// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);