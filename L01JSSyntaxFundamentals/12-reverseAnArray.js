function reverse(n, array) {

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(array[i]);
    }

    // Variant 1
    // arr.reverse();
    // console.log(arr.join(" "));
    

    // Variant 2
    // console.log(arr.reverse().join(" "))

    // Variant 3
    console.log(arr.slice(0, n).reverse().join(" "))

}

reverse(3, [10, 20, 30, 40, 50]);