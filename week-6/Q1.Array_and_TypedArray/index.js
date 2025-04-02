// Regular Array Declaration
let regularArray = [1, 2, 3, 4, 5];
// - Can be created directly with square brackets []
// - Dynamic in size (can add/remove elements)
// - Can contain mixed types (numbers, strings, booleans, objects)
// - Uses standard array methods like push(), pop(), etc.

// TypedArray Declaration (Int16Array)
let typedArray = new Int16Array([10, 20, 30, 40, 50]);
// - Created using a constructor (new Int16Array())
// - Fixed-size array that only stores 16-bit signed integers
// - More memory-efficient for numeric data
// - Int16Array means each element is a 16-bit signed integer
//   (range from -32,768 to 32,767)

// Demonstrating Type Flexibility
console.log("Regular Array Mixed Types:", [1, "string", true]);
// Regular arrays can contain:
// - Numbers
// - Strings
// - Booleans
// - Objects
// - null
// - undefined

console.log("TypedArray Numeric Constraint:", typedArray);
// TypedArrays only allow specific numeric types:
// - Int8Array    (8-bit signed integer)
// - Uint8Array   (8-bit unsigned integer)
// - Int16Array   (16-bit signed integer)
// - Uint16Array  (16-bit unsigned integer)
// - Int32Array   (32-bit signed integer)
// - Uint32Array  (32-bit unsigned integer)
// - Float32Array (32-bit floating point)
// - Float64Array (64-bit floating point)

// ArrayBuffer and TypedArray Connection
let buffer = new ArrayBuffer(16);
// - ArrayBuffer is a fixed-length raw binary data buffer
// - 16 bytes of contiguous memory allocation

let int32View = new Int32Array(buffer);
// - Creates a view of the buffer as 32-bit integers
// - Can interpret the same memory in different ways
int32View[0] = 42;
// - Directly manipulates the underlying memory
