// Example asynchronous operation (simulated with setTimeout)
const asyncOperation = () => {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous task
        setTimeout(() => {
            const success = true; // Simulating success/failure

            if (success) {
                resolve("Operation succeeded!"); // Fulfilled state
            } else {
                reject("Operation failed!"); // Rejected state
            }
        }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
    });
};

// Using the Promise
asyncOperation()
    .then(result => {
        console.log("Success:", result); // Handle the fulfilled state
    })
    .catch(error => {
        console.error("Error:", error); // Handle the rejected state
    });
