let allNumbersAdded = false;
while (!allNumbersAdded) {
    let upperLimit = parseInt(prompt("Please provide a number and I will calculate" +
        " the sum of all numbers between 1 and number you have provided."));

    if (isNaN(upperLimit)) {
        alert("This is not a number please try again");
    } else {
        let equation = "1"
        let sum = 0;
        for (let i = 1; i <= upperLimit; i++) {
            if (i % 2) {
                sum += i;
                if(i>1) equation = equation + ' + ' + i;
            }
        }
        console.log(sum + " (" + equation + ")")
        allNumbersAdded = true;
    }
}