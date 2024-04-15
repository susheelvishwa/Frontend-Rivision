// fill in javascript code here

let form = document.querySelector("form");
let name = document.querySelector("#name");
let employee_ID = document.querySelector("#employeeID");
let department = document.querySelector("#department");
let exp = document.querySelector("#exp");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mbl");
let AllData = [];
let tbody = document.querySelector("tbody");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {};
  obj.name = name.value;
  obj.employee_ID = employee_ID.value;
  obj.department = department.value;
  obj.exp = exp.value;
  obj.email = email.value;
  obj.mobile = mobile.value;
  tbody.innerText = "";
  AllData.push(obj);
  AllData.forEach((ele, index) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");

    td8.innerHTML = `<button>Delete</button>`;
    td8.addEventListener("click", function (e) {
      e.preventDefault();
      row.remove();
    });

    if (ele.exp >= 5) {
      td7.innerText = "Senior";
    } else if (ele.exp < 5 && ele.exp >= 2) {
      td7.innerText = "Junior";
    } else if (ele.exp <= 1) {
      td7.innerText = "Fresher";
    }

    td1.innerText = ele.name;
    td2.innerText = ele.employee_ID;
    td3.innerText = ele.department;
    td4.innerText = ele.exp;
    td5.innerText = ele.email;
    td6.innerText = ele.mobile;
    row.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(row);
  });
});