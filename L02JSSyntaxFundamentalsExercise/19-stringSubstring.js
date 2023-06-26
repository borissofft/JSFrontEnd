function stringSubstring(word, text) {
 word = word.toLowerCase();
 text = text.toLowerCase();

    if(text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');