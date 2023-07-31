function solve(input) {

    const n = Number(input.shift());
    const piecesInfo = input.splice(0, n);

    const pieces = piecesInfo.reduce((acc, curr) => {
        const [piece, composer, key] = curr.split("|");

        if (!acc.hasOwnProperty(piece)) {
            acc[piece] = [];
        }

        acc[piece].push({ piece, composer, key });

        return acc;
    }, {});

    // console.log(JSON.stringify(pieces, 0, 2));

    let line = input.shift();
    while (line !== "Stop") {
        const [command, ...rest] = line.split("|");

        switch (command) {
            case "Add": {
                const [piece, composer, key] = rest;
                if (pieces.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                    break;
                }

                pieces[piece] = [];
                pieces[piece].push({ piece, composer, key });
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                break;
            }
            case "Remove": {
                const [piece] = rest;
                if (pieces.hasOwnProperty(piece)) {
                    delete pieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                    // console.log(JSON.stringify(pieces, 0, 2));
                    break;
                }

                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                break;
            }
            case "ChangeKey": {
                const [piece, newKey] = rest;
                if (!pieces.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                }

                const surchedPiece = pieces[piece].find(p => p.key !== newKey);
                surchedPiece.key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
                // console.log(JSON.stringify(pieces, 0, 2));
                break;
            }
        }

        line = input.shift();
    }

    Object.values(pieces).forEach(p => {
        p.forEach(curPiece => {
            console.log(`${curPiece.piece} -> Composer: ${curPiece.composer}, Key: ${curPiece.key}`)
        });
    });

}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);