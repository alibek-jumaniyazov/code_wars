function isPangram(strning) {
    let alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    strning = strning.toLowerCase().replace(/[^a-z]/g, '');
    let uniqueLetters = new Set(strning);
    return uniqueLetters.size === alphabet.size;
}

// Test cases
console.log(isPangram("The quick brown fox jumps over the lazy dog"));      
console.log(isPangram("This is not a pangram"));                        
