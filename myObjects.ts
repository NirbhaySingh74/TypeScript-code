const user = {
  name: "Nirbhay",
  email: "nirbhaysingh943012@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "nirbhay", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 4999 };
}

export {};
