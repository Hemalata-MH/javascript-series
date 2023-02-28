function multiply(x, y) {
  console.log(x * y);
}

// using bind() method
var multiplyByTwo = multiply.bind(this, 2, 4);
console.log("using bind - passing both arguments in the same function");
multiplyByTwo();

var multiplyByThree = multiply.bind(this, 3);
console.log("using bind - passing arguments separately");
multiplyByThree(3);

var multiplyByFour = multiply.bind(this, 4, 6);
console.log("using bind - ignores arguments sent from the returned function");
multiplyByFour(4);

// using currying
function multiply1(x) {
  return function (y) {
    console.log(x * y);
  };
}

var curryingOutput = multiply1(3);
console.log("using currying ");
curryingOutput(4);

// returning multiple functions - sum(1)(2)(3)(4)
let sum = function (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
};

let result = sum(1)(2)(3)(4);
console.log("function scope chain");
console.log(result);

// recurssive - sum1(1)(2)(3)(4)()
let sum1 = function (a) {
  return function (b) {
    if (b) {
      return sum1(a + b);
    } else {
      return a;
    }
  };
};

let sumRecurrsive = sum1(1)(2)(3)(4)();
console.log("recurssive");
console.log(sumRecurrsive);

// using ES6
let sum2 = (a) => (b) => b ? sum2(a + b) : a;
let es6 = sum2(1)(2)(3)(4)();
console.log("ES6 ");
console.log(es6);
