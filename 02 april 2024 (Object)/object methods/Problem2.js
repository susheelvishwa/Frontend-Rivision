var details = {
  name: "susheel",
  age: 21,

  print: function (name) {
    console.log("Hello", this.age, this.name);
  },
};

var name = "Shyam";
details.print(name);
