const student = {
    name: "Rahul",
    age: 22,
    course: "Automation",
    city: "Pune"
};

// An Object contains multiple properties. Desturcturing helps us take the properties we need & 
// store their values in variable without writing object.properties(student.name) repeatedly. 
const { name, age, course } = student;

// const - declare vriable that cannot be reassigned
// { name, age, course } -> Sepecifies the property names whose values we want to extact
// student -> The object from whcih JS reads the values.

console.log(name);
console.log(age);
console.log(course);


const employee = {
    empName: "Amit",
    department: "Testing",
    salary: 50000,
    city: "Pune"
};

const {empName, department} = employee;

console.log(empName);
console.log(department);
