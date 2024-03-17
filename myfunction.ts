function addTwo(num: number) {
    return num + 2;
}


function getUpper(val: String) {
    return val.toUpperCase();
}

let loginUser = (name: String, email: String, isPaid: boolean = false) => {

}

function signupUser(name : String, email: String, password: String) {
  return {name,  email,  password};
}

addTwo(10)
console.log(getUpper("nirbhay"));
console.log(signupUser("Nirbhay","nirbhay@gmail.com","Nirbhay@12"));
loginUser("Nirbhay","nirbhay@gmail.com")

export {}