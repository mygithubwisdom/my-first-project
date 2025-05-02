My JavaScript Array Exercises
Welcome! This repository includes four fundamental JavaScript tasks that will help you understand array manipulation, ES6 methods, and typed arrays. Each example is written with comments to guide you through the logic and implementation.

Table of Contents
Filter Even Numbers and Sum Using .reduce()

Flatten a Nested Array

TypedArray: Create, Populate, and Reverse

Convert Between Regular Arrays and TypedArrays

1. Filter Even Numbers and Sum Using .reduce()
Description:
This function takes an array of numbers and returns:

A new array of even numbers using .filter()

The sum of all numbers using .reduce()

Code

function processNumbers(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const sum = numbers.reduce((total, current) => total + current, 0);
  return { evenNumbers, sum };
}

const result = processNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result.evenNumbers); // [2, 4, 6, 8, 10]
console.log(result.sum); // 55
2. Flatten a Nested Array
Description:
This function flattens an arbitrarily nested array into a single-level array using recursion and .reduce().

Code:function flattenArray(nestedArray) {
  return nestedArray.reduce((flatArray, element) => {
    return flatArray.concat(Array.isArray(element) ? flattenArray(element) : element);
  }, []);
}

const nested = [[1, 2], [3, 4], [5]];
console.log(flattenArray(nested)); // [1, 2, 3, 4, 5]

3. TypedArray: Create, Populate, and Reverse
Description:
Create a Uint8Array with a length of 5, populate it with values, and print both the original and reversed arrays.

Code:const uint8Array = new Uint8Array([10, 20, 30, 40, 50]);

console.log("Original array:", uint8Array);

// Manually reverse the TypedArray
const reversedArray = new Uint8Array(uint8Array.length);
for (let i = 0; i < uint8Array.length; i++) {
  reversedArray[i] = uint8Array[uint8Array.length - 1 - i];
}

console.log("Reversed array:", reversedArray);

4. Convert Between Regular Arrays and TypedArrays
Description:
Two functions:

Convert a regular array to a specified TypedArray (e.g., Int32Array)

Convert a TypedArray back to a regular array

Code:function arrayToTypedArray(array, typedArrayName = 'Int32Array') {
  if (!Array.isArray(array)) throw new TypeError('Input must be an array');
  if (array.some(item => typeof item !== 'number' || !Number.isInteger(item))) {
    throw new TypeError('All elements must be integers');
  }
  const TypedArrayConstructor = globalThis[typedArrayName];
  if (typeof TypedArrayConstructor !== 'function') {
    throw new TypeError(`Invalid TypedArray name: ${typedArrayName}`);
  }
  return new TypedArrayConstructor(array);
}

function typedArrayToArray(typedArray) {
  if (!ArrayBuffer.isView(typedArray) || typedArray instanceof DataView) {
    throw new TypeError('Input must be a TypedArray');
  }
  return Array.from(typedArray);
}

// Example usage
const regularArray = [1, 2, 3, 4, 5];
const int32Array = arrayToTypedArray(regularArray, 'Int32Array');
console.log(int32Array); // Int32Array [1, 2, 3, 4, 5]

const backToRegular = typedArrayToArray(int32Array);
console.log(backToRegular); // [1, 2, 3, 4, 5]

Concepts Covered
Array methods: .filter(), .reduce(), .concat()

Recursion

TypedArrays and ArrayBuffer

JavaScript type checking

Tips

Start by understanding regular arrays before diving into TypedArrays.

Use console.log() frequently to trace how data flows through your functions.

Try modifying the array values to see how the outputs change.


