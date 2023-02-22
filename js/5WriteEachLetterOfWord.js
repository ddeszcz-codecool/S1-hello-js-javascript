let word = prompt('Provide a word which will be separated into letters').trim();
for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== ' ') {
        console.log(word.charAt(i));
    }
}