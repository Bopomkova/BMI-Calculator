/*const identity = {
  firstName: "Bob",
  lastName: "Smith",
  age: 5,
  alive: true,
  addAge: function () {
    this.age++;
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
identity.addAge();
console.log(identity.getFullName(), identity.age);*/

const user = {
  firstName: "Billy",
  lastName: "Bob",
  height: 170,
  weight: 100,
};

function bmiCalc(w, h) {
  //This line is also probably broken
  return w / ((h / 100) ^ 2); //This line works
}

bmiCalc(user.weight, user.height); //This line is broken

console.log(
  `Hello ${user.firstName} ${
    user.lastName
  }! Your BMI is ${bmiCalc()}. You are considered to be `
);
