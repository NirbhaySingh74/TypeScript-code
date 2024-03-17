"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signupUser(name, email, password) {
    return { name: name, email: email, password: password };
}
addTwo(10);
console.log(getUpper("nirbhay"));
console.log(signupUser("Nirbhay", "nirbhay@gmail.com", "Nirbhay@12"));
