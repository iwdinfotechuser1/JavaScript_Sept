let student1 = "Nikita";
let student2 = "Swati";
let student3 = "Komal";
let student4 = "Dev";

// Array -> It used to store multiple values in Single variable
let students = ["Nikita","Swati", "Dev", "Komal"];

console.log(students[3]);
console.log(students[1]);
console.log(students[4]);   // Undefined

console.log(students.length); 
students.push("Rohit");
console.log(students.length);
console.log(students[4]);   // Undefined
console.log(students);