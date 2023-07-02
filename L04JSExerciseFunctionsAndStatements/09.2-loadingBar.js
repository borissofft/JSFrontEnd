function loadingBar(percentage) {

    let percentageNumber = percentage / 10;
    let bar = "%".repeat(percentageNumber) + ".".repeat(10 - percentageNumber);

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