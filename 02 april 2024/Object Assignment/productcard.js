let items = ["Rice", "Dal", "Salt"];
let qty = [2, 3, 1];
let price = [60, 50, 20];

let Data = [];
for (let i = 0; i < items.length; i++) {
  let obj = {
    name: items[i],
    quantity: qty[i],
    price: price[i],
    totalprice: function () {
      return this.quantity * this.price;
    },
  };
  Data.push(obj);
}

let totalPrice = 0;
for (let i = 0; i < Data.length; i++) {
  totalPrice += Data[i].totalprice();
}

console.log(totalPrice);
