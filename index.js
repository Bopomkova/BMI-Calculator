const user = {
  firstName: "Billy",
  lastName: "Bob",
  height: 170,
  weight: 100,
};

function bmiCalc(w, h) {
  return w / ((h / 100) * (h / 100));
}

userBmi = Math.round(bmiCalc(user.weight, user.height));

function bmiComp(x) {
  if (x > 30) return "obese";
  if (x > 25) return "overweight";
  if (x < 19) return "underweight";
  else return "healthy";
}

console.log(
  `Hello ${user.firstName} ${
    user.lastName
  }! Your BMI is ${userBmi}. You are considered to be ${bmiComp(userBmi)}.`
);
