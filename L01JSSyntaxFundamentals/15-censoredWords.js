function censorWords(text, word) {

    // Variant 1
    // function repeat(word) {
    //     let result = "";
    //     for (let i = 0; i < word.length; i++) {
    //         result += "*";
    //     }
    //     return result;
    // }

    // let censored = text.replace(word, repeat(word));

    // while (censored.includes(word)) {
    //     censored = censored.replace(word, repeat(word))
    // }

    // console.log(censored);

    // Variant 2
    const censorshipWord = "*".repeat(word.length);

    while(text.includes(word)) {
        text = text.replace(word, censorshipWord);
    }

    console.log(text);

}

censorWords('A small sentence with some words', 'small');
censorWords('Find the hidden word', 'hidden');