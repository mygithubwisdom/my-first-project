// system-info.js
const os = require('os');

// Print a greeting message to the console
console.log("Hello from Node.js!");


// Log system information
console.log("System Information:");
console.log(`Operating System: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Total Memory: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log(`CPUs: ${os.cpus().length}`);
console.log(`CPU Model: ${os.cpus()[0].model}`);
console.log(`User Home Directory: ${os.homedir()}`);