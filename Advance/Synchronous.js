// Synchronous in JavaScript - It execute in sequence or in order
// console.log("First Line");
// console.log("Second Line");
// console.log("Third Line");
// console.log("Four Line");

// Asynchronous

console.log("First Line");
setTimeout(() => {
    console.log("Second Line");
},2000);
console.log("Third Line");
console.log("Four Line");

