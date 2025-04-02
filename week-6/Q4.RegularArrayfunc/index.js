/**
 * Converts a regular array of integers to a specified TypedArray
 * @param {Array<number>} array - The regular array of integers to convert
 * @param {string} typedArrayName - The name of the TypedArray to convert to (e.g., 'Int32Array')
 * @returns {TypedArray} - The resulting TypedArray
 */
function arrayToTypedArray(array, typedArrayName = 'Int32Array') {
    // Validate input
    if (!Array.isArray(array)) {
      throw new TypeError('First argument must be an array');
    }
    
    if (array.some(item => typeof item !== 'number' || !Number.isInteger(item))) {
      throw new TypeError('All array elements must be integers');
    }
    
    // Get the constructor for the specified TypedArray
    const TypedArrayConstructor = globalThis[typedArrayName];
    
    if (typeof TypedArrayConstructor !== 'function') {
      throw new TypeError(`Invalid TypedArray name: ${typedArrayName}`);
    }
    
    // Create a new TypedArray from the regular array
    return new TypedArrayConstructor(array);
  }
  
  /**
   * Converts a TypedArray to a regular JavaScript array
   * @param {TypedArray} typedArray - The TypedArray to convert
   * @returns {Array<number>} - The resulting regular array
   */
  function typedArrayToArray(typedArray) {
    // Validate input
    if (!ArrayBuffer.isView(typedArray) || typedArray instanceof DataView) {
      throw new TypeError('Input must be a TypedArray');
    }
    
    // Convert to regular array using Array.from
    return Array.from(typedArray);
  }
  
  // Example usage:
  const regularArray = [1, 2, 3, 4, 5];
  
  // Convert to different TypedArrays
  const int8Array = arrayToTypedArray(regularArray, 'Int8Array');
  const uint16Array = arrayToTypedArray(regularArray, 'Uint16Array');
  const int32Array = arrayToTypedArray(regularArray, 'Int32Array');
  
  console.log(int8Array); // Int8Array [1, 2, 3, 4, 5]
  console.log(uint16Array); // Uint16Array [1, 2, 3, 4, 5]
  console.log(int32Array); // Int32Array [1, 2, 3, 4, 5]
  
  // Convert back to regular arrays
  const regularArrayFromInt8 = typedArrayToArray(int8Array);
  console.log(regularArrayFromInt8); // [1, 2, 3, 4, 5]