function countString(text, word) {

    // Variant 1
    // let wordsArr = text.split(" ");

    // let count = 0;
    // for (const w of wordsArr) {
    //     if(w === word) {
    //         count++;
    //     }
    // }

    // console.log(count);

    // Variant 2

    const occurrances = text.split(" ").filter(element => element === word).length;
    console.log(occurrances);

}

countString('This is a word and it also is a sentence', 'is');