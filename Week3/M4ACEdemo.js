//This is my first Java script code!
console.log('Hello World');
function addition(x, y) {
    return x + y; 
}
console.log(addition(20, 20));
// Using a for loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  function findLargestNumber(arr) {
    if (arr.length === 0) {
      return null; // Return null for an empty array
    }
  
    let largest = arr[0]; // Assume the first element is the largest
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; // Update largest if a bigger number is found
      }
    }
    return largest;
  }
  
  // Example usage:
  const numbers = [5, 8, 12, 1, 99, 23];
  console.log("The largest number is:", findLargestNumber(numbers)); // Output: 99
   