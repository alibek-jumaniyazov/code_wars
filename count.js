function count(string) {
    const charCount = {};
    
    for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    return charCount;
}