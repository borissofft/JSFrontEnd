function findTicketPrice(day, age) {

    let ticketPrice = 0;

    switch (day) {
        case "Weekday":
            if (age >= 0 && age <= 18) {
                ticketPrice = "12$";
            } else if (age > 18 && age <= 64) {
                ticketPrice = "18$";
            } else if (age > 64 && age <= 122) {
                ticketPrice = "12$";
            } else {
                console.log("Error!");
                return;
            }
            break;
        case "Weekend":
            if (age >= 0 && age <= 18) {
                ticketPrice = "15$";
            } else if (age > 18 && age <= 64) {
                ticketPrice = "20$";
            } else if (age > 64 && age <= 122) {
                ticketPrice = "15$";
            } else {
                console.log("Error!");
                return;
            }
            break;
        case "Holiday":
            if (age >= 0 && age <= 18) {
                ticketPrice = "5$";
            } else if (age > 18 && age <= 64) {
                ticketPrice = "12$";
            } else if (age > 64 && age <= 122) {
                ticketPrice = "10$";
            } else {
                console.log("Error!");
                return;
            }
            break;
    }

    console.log(ticketPrice);

}

findTicketPrice("Weekday", 42);
findTicketPrice('Holiday', -12);
findTicketPrice('Holiday', 15);
