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
  weight: -11,
};

function bmiCalculator() {
  return user.weight / (user.height ^ 2);
}
