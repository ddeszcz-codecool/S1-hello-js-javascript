let expression = prompt('Provide an expression and I will count how many letters it has').trim();
let numberOfLetters = 0;
for (let i = 0; i < expression.length; i++) {
    if (expression.charAt(i) !== ' ') {
        numberOfLetters++
    }
}
console.log('There were: ' + numberOfLetters + ' letters in the expression: "' + expression + '"')