function isItPalindrome(array) {

    for (const number of array) {

        let stringNumber = number.toString();
        let length = stringNumber.length;
        let isPalindrome = true;

        for (let index = 0; index < (length - 1) / 2; index++) {
            let first = stringNumber[index];
            let last = stringNumber[length - 1 - index];
            if (first !== last) {
                isPalindrome = false;
                break;
            }
        }

        console.log(isPalindrome);

    }

}

isItPalindrome([123, 323, 421, 121]);
// isItPalindrome([32, 2, 232, 1010]);
// isItPalindrome([32, 22522, 232, 1010]);