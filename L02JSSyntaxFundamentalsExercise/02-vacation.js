function vacationPrice(people, groupType, dayOfWeek) {

    let price = 0;
    let totalPrice = 0;

    switch (dayOfWeek) {

        case "Friday":
            switch (groupType) {
                case "Students":
                    price = 8.45;
                    break;
                case "Business":
                    price = 10.90;
                    break;
                case "Regular":
                    price = 15;
                    break;
            }
            break;

        case "Saturday":
            switch (groupType) {
                case "Students":
                    price = 9.80;
                    break;
                case "Business":
                    price = 15.60;
                    break;
                case "Regular":
                    price = 20;
                    break;
            }
            break;

        case "Sunday":
            switch (groupType) {
                case "Students":
                    price = 10.46;
                    break;
                case "Business":
                    price = 16;
                    break;
                case "Regular":
                    price = 22.50;
                    break;
            }
            break;
    }


    if (groupType === "Students" && people >= 30) {
        totalPrice = price * people * 0.85;
    } else if (groupType === "Business" && people >= 100) {
        totalPrice = (people - 10) * price;
    } else if (groupType === "Regular" && people >= 10 && people <= 20) {
        totalPrice = people * price * 0.95;
    } else {
        totalPrice = people * price;
    }

    console.log('Total price: ' + totalPrice.toFixed(2));

}

vacationPrice(30, "Students", "Sunday");
vacationPrice(40, "Regular", "Saturday");