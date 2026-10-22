// function with parameter
function greetStudent(name){   // name is a parameter
    console.log("Welcome: " +name);
}

greetStudent("Nikita");
greetStudent("Komal");

function add(a,b){
    console.log(a + b);     // display the value
}

add(10,20);

function addValue(m,n){
    return m + n;   // returns provide a value that can be stored, reused or passed to another function
}

const result = addValue(100, 50);
console.log(result);