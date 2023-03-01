var arr1 = [1, 2, 3, 4, 5];

// forEach()
console.log("forEach()");
arr1.forEach((x) => {
  console.log(x);
});

// map()
var mapArr = arr1.map((x) => x * 2);
console.log("map - double every element & return new array");
console.log(mapArr);

// filter()
var filterArr = arr1.filter((x) => x === 2 || x === 4);
console.log("filter - condition is to return an item which is equal to 2 & 4");
console.log(filterArr);

// reduce()

// traditional method
console.log("traditional method");
function sum(arr) {
  let result = 0;
  for (var i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}

console.log(sum(arr1));

// let's write this code using reduce() method
// acc is just like var 'result' where it's storing the each element that's iterated on
// curr is the current element of an array

var sumReduce = arr1.reduce((acc, curr) => {
  return acc + curr;
});

console.log("reduce - takes 2 arguments :- acc & curr");
console.log(sumReduce);

// code snippet
const arr = [1, 2, 3, 4];

const finalArr = arr.reduce((acc, cur) => {
  return acc * cur;
}, 0);

// console.log(finalArr); // 0

const arr1 = [1, 2, 3, 4];

const finalArr1 = arr1.reduce((acc, cur) => {
  return acc * cur;
});

// output is 24 as acc will take first val as 1
// 24 -- correct

// 1, 2, 6, 24 == incorrect
