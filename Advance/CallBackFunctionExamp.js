function calculate(a,b, callback) {
    const result = a + b;
    callback(result);
}

function displayResult(value){
    console.log("Result: ", value)
}

calculate(10,20, displayResult);


