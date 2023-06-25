function checkSpeedLimit(speed, area) {

    let isInLimit = true;
    let speedLimit = 0;
    let difference = 0;

    switch (area) {
        case ("residential"):
            speedLimit = 20;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
                isInLimit = false;
            }
            break;
        case ("city"):
            speedLimit = 50;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
                isInLimit = false;
            }
            break;
        case ("interstate"):
            speedLimit = 90;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
                isInLimit = false;
            }
            break;
        case ("motorway"):
            speedLimit = 130;
            if (speed > speedLimit) {
                difference = speed - speedLimit;
                isInLimit = false;
            }
            break;
    }

    let status = "";

    if (difference <= 20) {
        status = "speeding";
    } else if (difference <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    if (isInLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }

}

checkSpeedLimit(40, 'city');
checkSpeedLimit(21, 'residential');
checkSpeedLimit(120, 'interstate');
