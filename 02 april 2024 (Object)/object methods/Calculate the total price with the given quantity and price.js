var e_commerce = {
  products: ["earphone", "headphone", "earpods"],
  quantity: [4, 3, 2],
  price: [700, 800, 1000],

  total_price: function () {
    var sum = 0;
    for (var i = 0; i < this.quantity.length; i++) {
      sum = sum + this.quantity[i] * this.price[i];
    }
    return sum;
  },
};

console.log(e_commerce.total_price());
