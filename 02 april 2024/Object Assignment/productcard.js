const productsCart = {
  data: [],
  addProduct: function (name, quantity, price) {
    this.data.push({ name, quantity, price });
  },


  total: function () {
    let totalPrice = 0;
    this.data.forEach((product) => {
      totalPrice += product.quantity * product.price;
    });
    return totalPrice;
  },
};

const products = [
  { name: "Rice", quantity: 2, price: 60 },
  { name: "Salt", quantity: 3, price: 50 },
  { name: "Dal", quantity: 1, price: 20 },
];


products.forEach((product) => {
  productsCart.addProduct(product.name, product.quantity, product.price);
});


console.log("Total:", productsCart.total());
