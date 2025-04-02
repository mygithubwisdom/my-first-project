// Create a Uint8Array with length of 5
const uint8Array = new Uint8Array(5);

// Populate it with values
uint8Array[0] = 10;
uint8Array[1] = 20;
uint8Array[2] = 30;
uint8Array[3] = 40;
uint8Array[4] = 50;

// Print the array to the console
console.log("Original array:");
console.log(uint8Array);

// To reverse a TypedArray, we need to create a new one since they don't have a built-in reverse method
// First, create a new array with the same length
const reversedArray = new Uint8Array(uint8Array.length);

// Populate the new array with values in reverse order
for (let i = 0; i < uint8Array.length; i++) {
  reversedArray[i] = uint8Array[uint8Array.length - 1 - i];
}

// Print the reversed array
console.log("Reversed array:");
console.log(reversedArray);