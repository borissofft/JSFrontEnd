function determinesByAge(age) {

    let determine = "";

    if (age >= 66) {
        determine = "elder";
    } else if (age >= 20) {
        determine = "adult";
    } else if (age >= 14) {
        determine = "teenager";
    } else if (age >= 3) {
        determine = "child";
    } else if (age >= 0) {
        determine = "baby"
    } else {
        determine = "out of bounds";
    }

    console.log(determine);

}

determinesByAge(20);
determinesByAge(-1);