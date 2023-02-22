let wordToBeReversed = prompt('Provide a word and I will reverse it').trim();
let reversedWord = '';
let wordEndsAtNumber = wordToBeReversed.length-1;

for (let i = wordEndsAtNumber; i >= 0; i--) {
    reversedWord =  reversedWord + wordToBeReversed[i]
}
console.log('Word: "' + wordToBeReversed + '" written in reversed order is: "' + reversedWord + '"');
