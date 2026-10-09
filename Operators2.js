let name = "Divya";   // String
let age = 25;   // number
let isCricketer = true;   // Boolean

console.log(typeof name);
console.log(typeof isCricketer);

// Registration = Personal Data -> name, dob, mob
// 1 to 100 -> let a = 1; let b = 100; 
// Assignment, Arithmetic, Comparision, Logical
let a = 10; // Assignment Operator  
let b = 20; 
// let - keyword, a - variable, = operator, 10 value

console.log(a+b);
console.log(a+age);
console.log(b-a);
console.log("A * B: "+(a*b));

// Comparision Operators 
console.log("************");
console.log(age > 18);
console.log(10 == "10");  // Its just check value comparision
console.log(20 === "20");  // Checks both value & datatype

let expected = "Dashboard";
let actual = "Login";

console.log(expected === actual);

// Logical Operator   AND -> &&  OR -> ||

let username = "admin";
let password = "admin123";
console.log(username === "admin" && password === "admin123")  // true true = true

console.log(username === "admin" || username === "manager"); // true 
