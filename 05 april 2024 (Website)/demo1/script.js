var products = [
  {
    image: "https://picsum.photos/id/54/200/150",
    title: "laptop",
    price: 99,
  },
  {
    image: "https://picsum.photos/id/478/200/150",
    title: "laptop",
    price: 112,
  },
  {
    image: "https://picsum.photos/id/1056/200/150",
    title: "mobile",
    price: 221,
  },
  {
    image: "https://picsum.photos/id/44/200/150",
    title: "watch",
    price: 323,
  },
  {
    image: "https://picsum.photos/id/17/200/150",
    title: "Matte As Hell Crayon Lipstick Minis Set of 3",
    price: 411,
  },
  {
    image: "https://picsum.photos/id/113/200/150",
    title: "Matte As Hell Crayon Lipstick Minis Set of 3",
    price: 555,
  },
  {
    image: "https://picsum.photos/id/214/200/150",
    title: "Matte As Hell Crayon Lipstick Minis Set of 3",
    price: 631,
  },
  {
    image: "https://picsum.photos/id/199/200/150",
    title: "Matte As Hell Crayon Lipstick Minis Set of 3",
    price: 755,
  },
  {
    image: "https://picsum.photos/id/26/200/150",
    title: "Matte As Hell Crayon Lipstick Minis Set of 3",
    price: 884,
  },
  {
    image: "https://picsum.photos/id/500/200/150",
    title: "Matte As Hell Crayon Lipstick Minis Set of 3",
    price: 900,
  },
  {
    image: "https://picsum.photos/id/555/200/150",
    title: "Matte As Hell Crayon Lipstick Minis Set of 3",
    price: 954,
  },
  {
    image: "https://picsum.photos/id/5/200/150",
    title: "Matte As Hell Crayon Lipstick Minis Set of 3",
    price: 94,
  }
];

// console.log(products);

let container = document.querySelector("#container");

products.forEach(function (ele, i) {
    let sapratediv = document.createElement("div")

    let image = document.createElement("img")
    image.src = ele.image

    let title = document.createElement("p")
    // title.setAttribute("id", "title")
    title.id = "title"
    title.innerText = ele.title

    let price = document.createElement("p")
    price.innerText = ele.price

    sapratediv.append(image, title,price)
    container.append(sapratediv)

})
