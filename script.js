const inputBox = document.getElementById("input-box");
const btn = document.getElementById("btn");
const taskContainer = document.getElementById("task-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)

  }
  inputBox.value = '';
  saveData();
};


inputBox.addEventListener("keypress", function(event){
  if(event.key === 'Enter'){
    addTask();
  }
});

taskContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("taskData",taskContainer.innerHTML);
}


function showData(){
  taskContainer.innerHTML = localStorage.getItem("taskData");
}

showData();

