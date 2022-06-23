//add new task
function addNewTask() {
  const newTask = document.querySelector("#taskInput").value;
   const id = ;
  
   const dateAdded = new Date().toLocaleDateString();
   const dateSlice = dateAdded.toDateString().split(' ');
   const dateFormat = dateSlice[2] + ' ' + dateSlice[1] + ' ' + dateSlice[3];
  
// const time = 
  document.querySelector(".container").innerHTML += `
    <li class="item">
    ${id}
    <span>${newTask}</span>
    ${dateFormat}
    <div id="time">${time}</div>
    </li>
    `;
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);




// localStorage.setItem('records', JSON.stringify(lists));

// //Load data

// (function loadData() {
//   console.log(lists)
// })();

// //load data
// //add event listener
// document.querySelector('#addRecord')
