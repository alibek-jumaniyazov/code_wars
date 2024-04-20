  function isValidPIN(pin) {
    return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
  }

  // Test cases
  console.log(isValidPIN("1234"));   // Output: true
  console.log(isValidPIN("12345"));  // Output: false
  console.log(isValidPIN("a234"));   // Output: false
