const student = {
    fname: "Rahul",
    age: 22,
    course: "Automation",
    city: "Pune",
    course: "yes"
};

// console.log(student.age);
// console.log(student.city);

// const {fname, age, course} = student;
// console.log(fname);

// const {fname, ...remainingstudent} = student;
const {fname, ...otherDetails} = student;
console.log(fname);
console.log(remainingstudent);

// a = 10, b = 20 -> 