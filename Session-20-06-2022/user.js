// var rows = [];

var user = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
    name: "Chris",
    gender: "male",
    email: "Chris@gmail.com",
    city: "Delhi",
    phone: 99999999,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image:
      "https://cdn4.vectorstock.com/i/1000x1000/95/28/cartoon-male-teacher-vector-16659528.jpg",
    name: "Adam",
    gender: "male",
    email: "adam@gmail.com",
    city: "Mumbai",
    phone: 888888888,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image:
      "https://i.pinimg.com/originals/7f/68/fc/7f68fc74675dc2234ba931f826263cd3.jpg",
    name: "Swapna",
    gender: "female",
    email: "swapna@gmail.com",
    city: "Banglore",
    phone: 98989765431,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image: "https://wallpapercave.com/wp/wp7141936.jpg",
    name: "zoya",
    gender: "female",
    email: "zoya@gmail.com",
    city: "Hyderabad",
    phone: 98989876543,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
];

function showTable() {
  var divTable = document.getElementById("tableDiv");
  var radioRow = document.getElementById("radio");

  var showBtn = document.getElementById("show");
  var hideBtn = document.getElementById("hide");
  var tbody = document.getElementById("tbody");

  user.map(function (ele, index) {
    var tr = document.createElement("tr");
    tr.id = "tr" + (index + 1);
    // rows.push(tr.id)

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var img = document.createElement("img");

    img.src = ele.image;
    img.width = 50;
    img.height = 50;

    td1.appendChild(img);
    td2.innerText = ele.name;
    td3.innerText = ele.gender;
    td4.innerText = ele.city;
    td5.innerText = ele.email;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tbody.appendChild(tr);
  });

  divTable.style.display = "block";
  radioRow.style.display = "block";
  showBtn.disabled = true;
  hideBtn.disabled = false;
}

function hideTable() {
  var divTable = document.getElementById("tableDiv");
  var radioRow = document.getElementById("radio");
  var showBtn = document.getElementById("show");
  var hideBtn = document.getElementById("hide");

  var tr1 = document.getElementById("tr1");
  var tr2 = document.getElementById("tr2");
  var tr3 = document.getElementById("tr3");
  var tr4 = document.getElementById("tr4");

  //remove()

  divTable.style.display = "none";
  radioRow.style.display = "none";

  showBtn.disabled = false;
  hideBtn.disabled = true;

  tr1.remove();
  tr2.remove();
  tr3.remove();
  tr4.remove();
}

function fnFilter(value) {
  //   alert(value);
}
