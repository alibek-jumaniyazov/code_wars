function add(num1, num2) {
    // Reverse the strings to add from right to left
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();

    let sum = '';
    let carry = 0;
    let i = 0;

    // Continue looping until both numbers and carry are exhausted
    while (i < num1.length || i < num2.length || carry !== 0) {
        const digit1 = i < num1.length ? parseInt(num1[i]) : 0;
        const digit2 = i < num2.length ? parseInt(num2[i]) : 0;
        
        const total = digit1 + digit2 + carry;
        const newDigit = total % 10; // Extract the digit for the current position
        carry = Math.floor(total / 10); // Calculate the carry for the next position

        sum = newDigit.toString() + sum; // Add the new digit to the result string
        i++;
    }

    return sum;
}

// Test cases
console.log(add("123", "321")); // Output: "444"
console.log(add("11", "99"));   // Output: "110"
