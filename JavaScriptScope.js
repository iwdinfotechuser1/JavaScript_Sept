let browser = "chrome";   // Global Variable

function testBrowser(){
    let version = "154";   // Scope of this variable within this bracket

    console.log(browser);
    console.log(version);
}

testBrowser();

console.log(browser);
// console.log(version);  Error


