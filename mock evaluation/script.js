let container = document.getElementById("container");
let inputBox = document.getElementById("#search");
let searchBtn = document.getElementById("#navbar-search");


let data = [];

fetch("https://fakestoreapi.com/products")
    .then(function (res) {
        return (res.json());
    })

    .then(function (res) {
        data = res;
        displyData(data);
    })

function displyData(data) {
    container.innerHTML = "";
    data.forEach(function (product) {
        let div = document.createElement("div");

        let productsImg = document.createElement("img");
        productsImg.src = product.image;

        let title = document.createElement("p");
        title.innerText = product.title;

        let price = document.createElement("p");
        price.innerText = "INR:" + product.price;

        div.append(productsImg, title, price);
        container.append(div)
    });
}

function searchData() {
    let value = inputBox.value.toLowerCase();
    let filterData = data.filter(function (product) {
        return product.title.toLowerCase().includes(value);
    })

    if (filterData.length > 0) {
        displyData(filterData);
    }
    else {
        container.innerHTML = "<h2>products not found...</h2>"
    }
}


searchBtn.addEventListener("click", searchData)