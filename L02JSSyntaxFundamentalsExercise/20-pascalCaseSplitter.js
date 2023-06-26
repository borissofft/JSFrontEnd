function pascalCaseSplitter(text) {
    let arr = text.split(/(?=[A-Z])/);
    console.log(arr.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');