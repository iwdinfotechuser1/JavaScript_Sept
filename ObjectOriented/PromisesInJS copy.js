const myPromise = new Promise((resolve, reject) => {
    resolve("Food delivered Successfully!");
})

console.log(myPromise);

// new Promise(...) - Creates a promise object.
// resolve - is function used to fulfill the promise.
// reject - is function used to reject the promise.
// resolve("Food delivered Successfully!"); - marks the promise as fulfilled with String value
// console.log(myPromise); - Prints the promise object.