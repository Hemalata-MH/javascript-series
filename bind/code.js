var person1 = {
  name: "Hemalata",
  displayName: function () {
    console.log(this.name);
  },
};

var person2 = {
  name: "Tina Muni",
};

var person = person1.displayName.bind(person2);

// bind returns a new function which can be invoked at later point whenever needed

person();
