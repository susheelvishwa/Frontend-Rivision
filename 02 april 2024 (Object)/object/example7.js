var person = {
  name: "Alice",
  age: 30,
  greet: function (timeOfDay) {
    this.name = this.name.toUpperCase();
    return `Good ${timeOfDay}, my name is ${this.name}.`;
  },
};
console.log(person.greet("morning"));

