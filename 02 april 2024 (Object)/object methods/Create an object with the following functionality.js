//Create an object with the following functionality
//Ability to add student details and 3 subject marks

var details = {
  data: [],

  addStudent: function (nam, math, sci, eng) {
    var obj = {};
    obj.name = nam;
    obj.maths = math;
    obj.science = sci;
    obj.english = eng;

    this.data.push(obj);
  },
};

details.addStudent("Shubham", 10, 20, 30);
details.addStudent("Rahul", 15, 25, 35);

console.log(details.data);
