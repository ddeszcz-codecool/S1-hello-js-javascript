let number1 = parseInt(prompt('Please provide first number: '));
if (isNaN(number1)) {
    alert('This was not a number please try again')
} else {
    let number2 = parseInt(prompt('Please provide the second number: '));
    if (isNaN(number2)) {
        alert('This was not a number please try again')
    } else {
        let sum = number1 + number2;
        alert('The sum of the first number and the second number is equal to: "' + sum + '"');
    }
}

