function arrayRotation(array, rotationCount) {
    
    for (let index = 0; index < rotationCount; index++) {
        const firsElement = array.shift();
        array.push(firsElement);
    }

    console.log(array.join(" "));

}

arrayRotation([51, 47, 32, 61, 21], 2);