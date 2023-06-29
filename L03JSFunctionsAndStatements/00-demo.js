function greet(getMessage, name) {
    return getMessage() + " " + name;
}

function getGreetingBasedOnHour() {
    const currentHour = new Date().getHours();

    if (currentHour >= 20) {
        return "Good evening";
    } else if (currentHour >= 12) {
        return "Good day";
    } else {
        return "Good morning";
    }

}

const greeting = greet(getGreetingBasedOnHour, "Alex");

console.log(greeting);

// Higher-order functions