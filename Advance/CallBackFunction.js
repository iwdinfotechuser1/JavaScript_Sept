function greet() {
    console.log("Hello Playwright")
}

function executeFunction(komal){
    komal();
    // greet();
}

executeFunction(greet);

// executeFunction -> accepts a parameter called callback.
// 