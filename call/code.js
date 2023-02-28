var person1 = {
  name: "Hemalata",
  displayName: function (state) {
    console.log(this.name + " from " + state);
  },
};

var person2 = {
  name: "Tina",
};

person1.displayName("Mumbai");
person1.displayName.call(person2, "Goa");
