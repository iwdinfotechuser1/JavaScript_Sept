// async in javascript -> async is a keyword, used to declare an asynchronous function.
// Calling an async function always return a promise.

console.log("Step 1");

setTimeout (() => {
    console.log("Step 2");
},2000);

console.log("Step 3");

async function greet() {
    return "Hello JavaScript";   /// return as fulfilled promise
}

console.log(greet());

greet().then((message) => {
    console.log(message);
})

// async -> declares the function as asynchronous.
// greet -> is the function name
// () -> contains the parameters

async function getMarks() {
    return 80;
}

getMarks().then((marks) => {
    console.log(marks);
});


async function getData(){
    return Promise.resolve("Data Received");
}

getData().then((data) => {
    console.log(data);
})