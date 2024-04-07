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

  lowScore: function () {
    var lowStudent = null;
    var lowTotal = null;

    for (var i = 0; i < this.data.length; i++) {
      var currStudent = this.data[i];
      var total = currStudent.maths + currStudent.science + currStudent.english;

      if (lowTotal == null || total < lowTotal) {
        lowTotal = total;
        lowStudent = currStudent;
      }
    }

    return lowStudent;
  },
};

details.addStudent("pillu", 10, 20, 30);
details.addStudent("shivam", 15, 25, 35);
details.addStudent("susheel", 0, 1, 0);


// console.log(details.data);
console.log(details.lowScore());
