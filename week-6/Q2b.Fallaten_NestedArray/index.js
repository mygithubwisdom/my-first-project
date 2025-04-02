/**
 * Flattens a nested array using ES6 array methods
 * @param {Array} nestedArray - The nested array to flatten
 * @returns {Array} - The flattened array
 */
function flattenArray(nestedArray) {
    return nestedArray.reduce((flatArray, element) => {
      // If the element is an array, recursively flatten it and concat with result
      if (Array.isArray(element)) {
        return flatArray.concat(flattenArray(element));
      } else {
        // Otherwise, just add the element to our result
        return flatArray.concat(element);
      }
    }, []);
  }
  
  // Example usage:
  const nested = [[1, 2], [3, 4], [5]];
  const flattened = flattenArray(nested);
  console.log(flattened); // Output: [1, 2, 3, 4, 5]
  
  // Works with deeper nesting too:
  const deeplyNested = [[1, [2, 3]], [[4, 5], 6]];
  const deeplyFlattened = flattenArray(deeplyNested);
  console.log(deeplyFlattened); // Output: [1, 2, 3, 4, 5, 6]