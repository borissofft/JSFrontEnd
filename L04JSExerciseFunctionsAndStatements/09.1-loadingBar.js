function loadingBar(percentage) {

    let bar = "";

    for (let index = 0; index < 100; index += 10) {
        if (index < percentage) {
            bar += "%";
        } else {
            bar += ".";
        }
    }

    if (percentage === 100) {
        console.log("100% Complete!");
        console.log(`[${bar}]`);
    } else {
        console.log(`${percentage}% [${bar}]`);
        console.log("Still loading...");
    }

}

loadingBar(30);
loadingBar(50);
loadingBar(100);