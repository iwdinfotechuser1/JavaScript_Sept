function validateLogin(username, password){
    if(username === "admin" && password ==="admin123") {
        return true;
    } else {
        return false;
    }

}

console.log(validateLogin("admin","admin123"));
console.log(validateLogin("admin","wrong123"));


let user = "user1";
let pass = "user@123";

if (user === "user1"){
    if(pass === "user@543") {
        console.log("Login SuccessFull");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}
