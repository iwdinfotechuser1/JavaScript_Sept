let student1 = "Divya";
let student2 = "Dev";
let student3 = "Aliya";
let student4 = "Prajakta";

// An array allows us to store multiple values in a single variable.
// JavaScript arrays start from zero
let students = ["Divya", "Dev", "Aliya", "Prajakta"];

console.log(students[0]);
console.log(students[2]);
console.log(students[4]);   // Error - undefined
console.log(students.length);

students.push("Rohit");
console.log(students.length);
console.log(students[4]);