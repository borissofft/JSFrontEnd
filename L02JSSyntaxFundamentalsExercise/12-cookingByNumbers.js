function cookNumber(num, ...commands) {

    let number = Number(num);

    for (const command of commands) {
        switch (command) {
            case ("chop"):
                number /= 2;
                break;
            case ("dice"):
                number = Math.sqrt(number)
                break;
            case ("spice"):
                number += 1;
                break;
            case ("bake"):
                number *= 3;
                break;
            case ("fillet"):
                number -= number * 0.2;
                break;
        }

        console.log(number);

    }

}

cookNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');