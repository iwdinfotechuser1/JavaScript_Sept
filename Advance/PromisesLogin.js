const myPromise = new Promise((resolve, reject) => {
    resolve("Login successful");
});

// myPromise.then((message) => {
//     console.log(message)
// });

myPromise.then((result) => {
    // Handle successful result
}, 
(error) => {
    // Optionally handle rejection
});

