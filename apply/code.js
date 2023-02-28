var person1 = {
  name: "Hema",
  displayName: function () {
    console.log(this.name + "from " + state + ", " + country);
  },
};

var person2 = {
  name: "Tina",
};

person1.displayName.apply(person2, ["Goa", "India"]);
