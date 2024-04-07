var rectangle = {
  length: 30,
  breadth: 40,

  perimeter: function () {
    console.log(2 * (this.length + this.breadth));
  },

  area: function () {
    console.log(this.length * this.breadth);
  },
};

rectangle.perimeter();
rectangle.area();


rectangle.length = 10;
rectangle.breadth = 30;
rectangle.perimeter();
rectangle.area();
