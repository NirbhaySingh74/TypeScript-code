function addTwo(num: number): number {
  return num + 2;
  // return "hello"
}

function getUpper(val: String) {
  return val.toUpperCase();
}

let loginUser = (name: String, email: String, isPaid: boolean = false) => {};

function signupUser(name: String, email: String, password: String) {
  return { name, email, password };
}

const getHello = (s: string): string => {
  return "Hello";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3,4]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

addTwo(10);
console.log(getUpper("nirbhay"));
console.log(signupUser("Nirbhay", "nirbhay@gmail.com", "Nirbhay@12"));
loginUser("Nirbhay", "nirbhay@gmail.com");

export {};
