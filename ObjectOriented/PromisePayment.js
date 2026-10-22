const paymentPromise = new Promise((resolve, reject) => {
    resolve("Payment Successful");
})

paymentPromise.then((message) => {   // .then() handles the successful result.
    console.log(message);
});
