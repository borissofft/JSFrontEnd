function calc() {

    const firstInput = document.getElementById("num1").value;
    const secondInput = document.getElementById("num2").value;

    const sum = Number(firstInput) + Number(secondInput);
    document.getElementById("sum").value = sum;

}