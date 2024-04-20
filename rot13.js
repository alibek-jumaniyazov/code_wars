function rot13(message) {
    return message.replace(/[a-zA-Z]/g, function(char) {
        let code = char.charCodeAt(0);
        let offset = code <= 90 ? 65 : 97; // Check if uppercase or lowercase
        return String.fromCharCode((code - offset + 13) % 26 + offset);
    });
}

// Test cases
console.log(rot13("Hello World!"));  // Output: "Uryyb Jbeyq!"
console.log(rot13("Test 123"));      // Output: "Grfg 123"