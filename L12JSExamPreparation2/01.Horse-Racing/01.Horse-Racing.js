function solve(input) {

    const horses = input.shift().split("|");

    let line = input.shift();
    while (line !== "Finish") {
        const lineArr = line.split(" ");
        const command = lineArr[0];
        const firstHorse = lineArr[1];
        const secondHorse = lineArr[2];
        
        const firstHorsePosition = horses.indexOf(firstHorse);
        const secondHorsePosition = horses.indexOf(secondHorse);

        switch (command) {
            case "Retake":

                if (firstHorsePosition < secondHorsePosition) {
                    horses[firstHorsePosition] = secondHorse;
                    horses[secondHorsePosition] = firstHorse;
                    console.log(`${firstHorse} retakes ${secondHorse}.`);
                }

                break;
            case "Trouble":

                if (firstHorsePosition > 0) {
                    horses[firstHorsePosition] = horses[firstHorsePosition - 1];
                    horses[firstHorsePosition - 1] = firstHorse;
                    console.log(`Trouble for ${firstHorse} - drops one position.`);
                }
                break;
            case "Rage":
                if (firstHorsePosition !== horses.length - 1) {
                    horses.splice(firstHorsePosition, 1);
                    horses.push(firstHorse);
                }

                console.log(`${firstHorse} rages 2 positions ahead.`);

                // const rageLength = Math.min(horses.length - 1 - firstHorsePosition, 2);
                // if (firstHorsePosition !== 0) {
                //     horses.splice(firstHorsePosition, 1);
                //     horses.splice(firstHorsePosition + rageLength, 0, firstHorse);
                //     console.log(`${firstHorse} rages 2 positions ahead.`);
                // }

                break;
            case "Miracle":
                const lastHorse = horses.shift();
                horses.push(lastHorse);
                console.log(`What a miracle - ${lastHorse} becomes first.`);
                break;
        }

        line = input.shift();
    }

    console.log(horses.join("->"));
    console.log(`The winner is: ${horses[horses.length - 1]}`);

}

solve([
    'Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish'
]);

// solve([
//     'Onyx|Domino|Sugar|Fiona',
//     'Trouble Onyx',
//     'Retake Onyx Sugar',
//     'Rage Domino',
//     'Miracle',
//     'Finish'
// ]);

// solve([
//     'Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly'
// ]);