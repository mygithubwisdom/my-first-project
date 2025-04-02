function processNumbers(numbers) {
    // Filter for even numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    // Calculate sum using reduce
    const sum = numbers.reduce((total, current) => total + current, 0);
    
    // Return both results
    return {
      evenNumbers: evenNumbers,
      sum: sum
    };
  }

  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = processNumbers(myNumbers);

console.log(result.evenNumbers); // [2, 4, 6, 8, 10]
console.log(result.sum); // 55