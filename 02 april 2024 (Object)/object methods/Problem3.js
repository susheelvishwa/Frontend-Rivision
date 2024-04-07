var details = {
  name: "susheel",
  age: 21,
  hobbies: ["coding", "music"],

  print: function () {
    console.log("Hello my name is", this.name);
    console.log("My age is", this.age);
    console.log("and my Hobbies are", this.hobbies.join(" "));
  },
};

details.print();
