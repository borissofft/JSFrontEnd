for (var i = 1; i <= 5; i++) {
    
    setTimeout(function () {
        console.log(i); // always 6
    }, i * 1000);

}

for (let i = 1; i <= 5; i++) {
    
    setTimeout(function () {
        console.log(i);
    }, i * 1000);

}