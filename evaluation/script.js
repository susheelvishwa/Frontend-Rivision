var data = [
  {
    id: 1,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Donald Surgen",
    gender: "female",
    department: "engineering",
    salary: 57000,
  },
  {
    id: 2,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Brynn Wildblood",
    gender: "female",
    department: "finance",
    salary: 27000,
  },
  {
    id: 3,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Etta McGairl",
    gender: "male",
    department: "operations",
    salary: 42000,
  },
  {
    id: 4,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Alexandros Renihan",
    gender: "female",
    department: "engineering",
    salary: 40000,
  },
  {
    id: 5,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Geri Maudlen",
    gender: "others",
    department: "operations",
    salary: 40000,
  },
  {
    id: 6,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Grazia Pilkington",
    gender: "others",
    department: "operations",
    salary: 50000,
  },
  {
    id: 7,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Norry Bodicum",
    gender: "others",
    department: "operations",
    salary: 30000,
  },
  {
    id: 8,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Athena Broadey",
    gender: "male",
    department: "marketing",
    salary: 66000,
  },
  {
    id: 9,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Luisa Artois",
    gender: "male",
    department: "engineering",
    salary: 45000,
  },
  {
    id: 10,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Cookie Gimber",
    gender: "male",
    department: "finance",
    salary: 25000,
  },
  {
    id: 11,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Aridatha Boylund",
    gender: "female",
    department: "engineering",
    salary: 40000,
  },
  {
    id: 12,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Christiana Withringten",
    gender: "male",
    department: "marketing",
    salary: 42000,
  },
  {
    id: 13,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Clotilda Gleader",
    gender: "female",
    department: "marketing",
    salary: 42000,
  },
  {
    id: 14,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Marlane Dabner",
    gender: "male",
    department: "engineering",
    salary: 50000,
  },
  {
    id: 15,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Casar Morais",
    gender: "male",
    department: "operations",
    salary: 63000,
  },
  {
    id: 16,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Pris Emms",
    gender: "others",
    department: "operations",
    salary: 66000,
  },
  {
    id: 17,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Inglis Easdon",
    gender: "others",
    department: "operations",
    salary: 45000,
  },
  {
    id: 18,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Tamera Bartaletti",
    gender: "male",
    department: "operations",
    salary: 60000,
  },
  {
    id: 19,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Grata Channon",
    gender: "others",
    department: "engineering",
    salary: 27000,
  },
  {
    id: 20,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Caria Dalli",
    gender: "female",
    department: "engineering",
    salary: 42000
  },
]

let container = document.querySelector("container");

function showdata(data) {
    container.innerHTML = "";
    arr.foreach(function (ele,i) {
        let sapratediv = document.createElement("div");

        let image = document.createElement("img");
        image.src = ele.image

        let name = document.createElement("p");
        name.innerText = ele.name;

        let gender = document.createElement("p");
        gender.innerText = ele.gender

        let department = document.createElement("p");
        department.innerText = ele.department

        let salary = document.createElement("p");
        salary.innerText = ele.salary

        sapratediv.append(image, name, gender, department, salary);
        container.append(sapratediv)
    })
}

showdata(data);