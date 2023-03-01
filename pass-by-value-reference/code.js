var a = 1;
var b = 2;
console.log("this is simple to understand- a=1 & b=2");
console.log(a, b);

var x = 1;
var y = x;
console.log("Now let's check this out - x=1 & y=x");
console.log(x, y);

//

y = x + 5;
console.log("Now let's change the value of y - x = 1 & y = x + 5");
console.log(x, y);

var obj1 = {
  name: "Hema",
  State: "India",
};

var obj2 = obj1;
console.log(obj1);
console.log(obj2);

// Let's update the value of obj2
obj2.name = "Shardha";

//Now guess the output of obj1 & obj2
console.log(obj1);
console.log(obj2);

// Now let's check this for arrays
var arr1 = [1, 2, 3, 4];
var arr2 = arr1;
console.log(arr1);
console.log(arr2);

// now let's change the value of arr1
arr1.push(5);

//Now what should print for arr1 & arr2
console.log(arr1);
console.log(arr2);

// Yes this is how objects & arrays behave & this is what is called as pass by reference.
// This happens because obj1 is saved as a reference to obj2 typically consider obj1 to be refered as id & if something changes to that id it auto changes it's data types value
// In short, both objects are dependent on each other
