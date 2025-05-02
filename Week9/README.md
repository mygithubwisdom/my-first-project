# Create a module to export a function that calculates the area of a rectangle.  
Import and use this function in another file.

This simple Node.js project demonstrates how to create a module that exports a function to calculate the area of a rectangle, and how to import and use that function in another file.

## 📁 Files

- `import_module.js` – Contains the exported function
- `main.js` – Imports and uses the function

---

## 📦 Code

### `import_module.js`

index.js

```javascript
function calculateAreaofrectangle(length, width) {
    return length * width;
}
module.exports = calculateAreaofrectangle;

const calculateAreaofrectangle = require('./import_module');

const length = 5;
const width = 10;
const area = calculateAreaofrectangle(length, width);

console.log(`The area of the rectangle is: ${area}`);

Run the Program: node index.js

Output

The area of the rectangle is: 50



