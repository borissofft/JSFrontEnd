function sortList(array) {

    const sortedArray = array.sort((a, b) => a - b);
    const resultArray = [];
    const length = array.length;

    for (let index = 0; index < length; index++) {
        if (index % 2 === 0) {
            resultArray.push(sortedArray.shift());
        } else {
            resultArray.push(sortedArray.pop());
        }
    }

    // console.log(resultArray);
    return(resultArray);

}

sortList([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);