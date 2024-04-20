function solution(number) {
    if (number < 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

// Test cases
console.log(solution(10));   // Output: 23 (3 + 5 + 6 + 9)
console.log(solution(20));   // Output: 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)
console.log(solution(-5));   // Output: 0 (negative number, returns 0)