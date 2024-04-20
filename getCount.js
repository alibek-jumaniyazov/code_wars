
        function getCount(str) {
            const vowels = ['a', 'e', 'i', 'o', 'u'];   
            let count = 0;
            for (let char of str.toLowerCase()) {
                if (vowels.includes(char)) {
                    count++;
                }
            }
            return count;
        }

        // Test cases
        console.log(getCount("hello"));  // Output: 2 (e, o)
        console.log(getCount("coding")); // Output: 2 (o, i)
        console.log(getCount(""));       // Output: 0
        