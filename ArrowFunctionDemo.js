function welcome() {
    console.log("Welcome to JavaScript")
}

welcome();

let arrowWelcome = () => {
    console.log("Welcome to JavaScript");
};

arrowWelcome();

function add(a,b){
    return a +b ;
}

console.log(add(10,20));

let arrAdd = (m,n) => {
    return m + n;
};

console.log(arrAdd(10,20));

arrAdd = 50;
console.log(arrAdd);

// Mordern function
const sub = (a,b) => {a+b};  // call back
