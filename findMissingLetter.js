function findMissingLetter(array) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let pointerOne = 0;
    let pointerTwo = 1;

    while (pointerTwo < array.length) {
        let firstLetter = array[pointerOne].toLowerCase();
        let secondLetter = array[pointerTwo].toLowerCase();

        let firstLetterIndex = alphabet.indexOf(firstLetter);
        let secondLetterIndex = alphabet.indexOf(secondLetter);

        if (firstLetterIndex + 1 !== secondLetterIndex) {
            return array[pointerOne] === array[pointerOne].toUpperCase()
                ? alphabet[firstLetterIndex + 1].toUpperCase()
                : alphabet[firstLetterIndex + 1];
        }

        pointerOne++;
        pointerTwo++;
    }
}