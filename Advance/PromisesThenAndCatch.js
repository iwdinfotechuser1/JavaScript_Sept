const loginPromise = new Promise((resolve, reject) => {
    const loginScucess = false;

    if(loginScucess) {
        resolve("Login Successful")
    } else {
        reject("Invalid username or password")
    }
}); 

loginPromise.then((message) => {
    console.log(message);
}) .catch ((error) => {
    console.log(error);
});
