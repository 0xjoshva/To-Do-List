//add new task
function addNewTask() {
  const newTask = document.querySelector("#taskInput").value;
  document.querySelector(
    ".container"
  ).innerHTML += `<li class="item">${newTask}</li>`;
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