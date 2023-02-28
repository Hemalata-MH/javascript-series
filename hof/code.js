// use this place to practice same topic code
const rad = [2, 4, 6, 8];
const areaOfCircle = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

const areaOfCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

const diameterHOF = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
// console.log(areaOfCircle(radius));
// console.log(areaOfCircumference(radius));
// console.log(diameterHOF(radius));

// Higher Order Function

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (rad, logic) {
  const output = [];
  for (let i = 0; i < rad.length; i++) {
    output.push(logic);
  }
  return output;
};

console.log(calculate(rad, area));
console.log(calculate(rad, circumference));
console.log(calculate(rad, diameter));
