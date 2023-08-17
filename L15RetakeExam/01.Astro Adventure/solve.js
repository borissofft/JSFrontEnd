function solve(input) {

    const n = Number(input.shift());
    const astronautsInfo = input.splice(0, n);

    const astronauts = astronautsInfo.reduce((acc, curr) => {
        const [astronautName, oxygenLevel, energyReserves] = curr.split(" ");

        acc[astronautName] = ({ oxygenLevel, energyReserves });

        return acc;
    }, {});

    // console.log(JSON.stringify(astronauts, 0, 2));

    let line = input.shift();
    while (line !== "End") {
        const [command, ...rest] = line.split(" - ");

        switch (command) {
            case "Explore": {
                const [astronautName, energyNeeded] = rest;
                const currAstro = astronauts[astronautName];
                let currrAstroEnergy = Number(currAstro.energyReserves);

                if (currrAstroEnergy >= energyNeeded) {
                    let energyReservesLeft = currrAstroEnergy - energyNeeded;
                    currAstro.energyReserves = energyReservesLeft;
                    console.log(`${astronautName} has successfully explored a new area and now has ${energyReservesLeft} energy!`);
                } else {
                    console.log(`${astronautName} does not have enough energy to explore!`);
                }

                break;
            }
            case "Refuel": {
                const [astronautName, amount] = rest;
                const astroToRefuel = astronauts[astronautName];
                const astroEnergy = Number(astroToRefuel.energyReserves);

                let amountRecovered = 0;
                if (astroEnergy + Number(amount) >= 200) {
                    amountRecovered = 200 - astroEnergy;
                    astroToRefuel.energyReserves = 200;
                } else {
                    amountRecovered = Number(amount);
                    astroToRefuel.energyReserves = astroEnergy + Number(amount);
                }

                console.log(`${astronautName} refueled their energy by ${amountRecovered}!`);

                break;
            }
            case "Breathe": {
                const [astronautName, amount] = rest;
                const astroToBreathe = astronauts[astronautName];
                const astroOxygen = Number(astroToBreathe.oxygenLevel);
                let amountRecovered = 0;

                if (astroOxygen + Number(amount) >= 100) {
                    amountRecovered = 100 - astroOxygen;
                    astroToBreathe.oxygenLevel = 100;
                } else {
                    amountRecovered = Number(amount);
                    astroToBreathe.oxygenLevel = astroOxygen + Number(amount);
                }

                console.log(`${astronautName} took a breath and recovered ${amountRecovered} oxygen!`);
                break;
            }
        }

        line = input.shift();

    }

    Object.entries(astronauts).forEach(([key, value]) => {
        console.log(`Astronaut: ${key}, Oxygen: ${value.oxygenLevel}, Energy: ${value.energyReserves}`);
    });

}

// solve([
//     '3',
//     'John 50 120',
//     'Kate 80 180',
//     'Rob 70 150',
//     'Explore - John - 50',
//     'Refuel - Kate - 30',
//     'Breathe - Rob - 20',
//     'End'
// ]);

solve([
    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End'
]);