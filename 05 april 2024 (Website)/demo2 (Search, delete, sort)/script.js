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
    title: "school",
    price: 411,
  },
  {
    image: "https://picsum.photos/id/113/200/150",
    title: "keybord",
    price: 555,
  },
  {
    image: "https://picsum.photos/id/214/200/150",
    title: "mouse",
    price: 631,
  },
  {
    image: "https://picsum.photos/id/199/200/150",
    title: "printer",
    price: 755,
  },
  {
    image: "https://picsum.photos/id/26/200/150",
    title: "powerbank",
    price: 884,
  },
  {
    image: "https://picsum.photos/id/500/200/150",
    title: "pen",
    price: 900,
  },
  {
    image: "https://picsum.photos/id/555/200/150",
    title: "pencil",
    price: 954,
  },
  {
    image: "https://picsum.photos/id/5/200/150",
    title: "charger",
    price: 94,
  },
];

// console.log(products);

let container = document.querySelector("#container");
let inputBox = document.querySelector("#navbar>div>input");
let searchBtn = document.querySelector("#navbar-search");
let selectPrice = document.querySelector("#navbar-select");

function showData(arr) {
  container.innerHTML = "";
  arr.forEach(function (ele, i) {
    let sapratediv = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.image;

    let title = document.createElement("p");
    // title.setAttribute("id", "title")
    title.id = "title";
    title.innerText = ele.title;

    let price = document.createElement("p");
    price.innerText = ele.price;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete🎁"
    deleteBtn.addEventListener("click", function () {
      deleteData(i);
    })

    sapratediv.append(image, title, price, deleteBtn);
    container.append(sapratediv);
  });
}
showData(products);


function deleteData(i) {
  products.splice(i, 1)
  showData(products)
}


function searchData() {
  // console.log(inputBox.value);
  let value = inputBox.value;
  let narr = products.filter(function (ele, i) {
    return ele.title.toLowerCase() === value.toLowerCase();
  })
  // console.log(narr);
  if (narr.length > 0) {
    showData(narr);
  }
  else {
    container.innerHTML = "<h2>Products not found...</h2>"
  }
}


function sortData() {
  // console.log(selectPrice.value);
  let value = selectPrice.value
  let narr;

  if (value === "asc") {
    narr = products.sort(function (a, b) {
      return a.price - b.price
    })
  }
  else if(value === "desc"){
    narr = products.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  showData(narr)
}

searchBtn.addEventListener("click", searchData);
selectPrice.addEventListener("click", sortData)
