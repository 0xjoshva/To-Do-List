//empty array for tasks
var indexArr = [];



//add new task
function addNewTask(event) {
  event.preventDefault();

  //get task input
const newTask = document.querySelector("#taskInput").value;

//get current date
let date = new Date();
let dateArr = date.toDateString().split(" ");
let dateFormat = dateArr[2] + " " + dateArr[1] + ", " + dateArr[3];
let dateNow = dateFormat.toString();

//get current time
let time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  let timeNow = time.toString();

  //add tasks to array
  indexArr.push(newTask);
  console.log(indexArr);

  //index of tasks
  for (var i = 0; i < indexArr.length; i++) {
    console.log(i);
    
  }
  //get index
  let index = i;

  //write task to HTML : DOM manipulation
  if (newTask === "") {
    return;
  } else {
    document.querySelector(".container").innerHTML += `
    <li class="item" ondblclick="dblClose()">
    <span id="index">${index}</span>
    <span id="newTask">${newTask}</span>
    <span id="dateNow">${dateNow}</span>
    <span><input type="checkbox" id="checkingbox"></span>
    <span id="timeNow">${timeNow}</span>
    <button id="delete-btn"><i class="bi bi-trash2-fill"></i></button>
    </li>
    `;
  }
}

// Add a "checked" class when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    document.getElementById("checkingbox").toggle(this.checked);
  }
});

function dblClose() {
  tasks.splice(tasks.indexOf(task), 1);
}

function sortDesc() {
  index.sort((a, b) => b - a);
}
