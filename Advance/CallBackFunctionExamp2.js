function greet(){
    console.log("Hello student");
}

function giveAssignment(){
    console.log("Complete your JavaScript assignment");
}

function startClass(callback){
    console.log("Class is starting...");
    callback();
}

startClass(greet);
startClass(giveAssignment);