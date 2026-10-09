let browser = "chrome";   // Global Function - Scope entire file or class

function testBrowser(){
    let version = "154";  // Local Variable - scope only within function

    console.log(browser);
    console.log(version);
}

testBrowser();

console.log(browser);
console.log(version);