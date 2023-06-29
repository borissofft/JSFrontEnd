function repeatString(text, count) {

    let stringArray = [];

    for (let index = 0; index < count; index++) {
        stringArray.push(text);
    }

    // console.log(stringArray.join(""));
    return stringArray.join("");
}

repeatString("abc", 3);