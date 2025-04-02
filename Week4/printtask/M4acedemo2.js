function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            // If success is true, resolve the promise
            resolve('API call successful!');
        } else {
            // If success is false, reject the promise
            reject(new Error('API call failed!'));
        }
    });
}

// Test the function:
getFullResponseFromAPI(true)
    .then(response => console.log(response)) // Logs: "API call successful!"
    .catch(error => console.error(error));  // Won't be called in this case

getFullResponseFromAPI(false)
    .then(response => console.log(response)) // Won't be called in this case
    .catch(error => console.error(error));  // Logs: "Error: API call failed!"

    
