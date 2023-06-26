function listOfNames(stringArr) {
    
    // stringArr.sort();
    stringArr.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    let index = 1;
    for (const name of stringArr) {
        console.log(`${index++}.${name}`);
    }
    
}

listOfNames(["John", "Bob", "Christina", "Ema"]);