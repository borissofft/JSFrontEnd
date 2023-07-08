function wordsTracker(input) {

    const [searchWords, ...words] = input;

    const wordOccurances = searchWords.split(" ").reduce((acc, curr) => {
        acc[curr] = 0;

        return acc;
    }, {});

    words.forEach((word) => {
        if (wordOccurances.hasOwnProperty(word)) {
            wordOccurances[word] += 1;
        }
    });

    Object.entries(wordOccurances)
    .sort((a, b) => b[1] - a[1])
    .forEach(([word, count]) => console.log(`${word} - ${count}`));

}

wordsTracker([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);