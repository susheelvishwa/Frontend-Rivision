let priority = document.querySelector("#container>select");
let todoName = document.querySelector("#container>input");
let addTodoBtn = document.querySelector("#container>button");
let tableBody = document.querySelector("#table-container>tbody");

let data = [];

function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
}

function loadData() {
  let storedValue = JSON.parse(localStorage.getItem("data")); //null for the first time
  if (storedValue) {
    data = storedValue;
    showData(data);
  }
  // console.log(storeValue);
}

function handleClick() {
  // console.log(todoName.value);
  // console.log(priority.value);
  let obj = {
    title: todoName.value,
    priority: priority.value,
  };

  data.push(obj);
  saveData();
  showData(data);
  //   console.log(data);
}

function showData() {
  tableBody.innerHTML = "";
  data.forEach(function (ele, i) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = `${i + 1}`;

    let td2 = document.createElement("td");
    td2.innerHTML = ele.title;

    let td3 = document.createElement("td");
    td3.innerHTML = ele.priority;

    if (ele.priority == "high") td3.style.backgroundColor = "red";
    else if (ele.priority == "med") td3.style.backgroundColor = "blue";
    else td3.style.backgroundColor = "green";

    let td4 = document.createElement("td");
    let btn = document.createElement("button");
    btn.addEventListener("click", function () {
      handleDelete(i);
    });
    btn.innerHTML = "Delete";
    td4.append(btn);

    tr.append(td1, td2, td3, td4);
    tableBody.append(tr);
  });
}

function handleDelete(i) {
  // console.log(i);
  data.splice(i, 1);
//   data = data.filter(function (ele, index) {
//     return index !== i; // Keep all elements except the one at index i
//   });

  // Save the updated data
  saveData();

  // Display the updated data
  showData(data);
}

addTodoBtn.addEventListener("click", handleClick);

loadData();
