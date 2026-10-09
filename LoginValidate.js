function validateLogin(username, password){
    if(username === "admin" && password === "admin123"){
        return ("Login Passed");
    } else {
        return ("Login Failed");
    }

}

console.log(validateLogin("admin", "admin123"));
console.log(validateLogin("admin", "7665432"));