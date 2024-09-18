

// document.getElementById();

// console.log(document.getElementById("task-title"));

const taskTitle = document.getElementById("task-title");

// Change Style
taskTitle.style.backgroundColor = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "20px";

// Change Content
taskTitle.innerText = "Hello jagan";
taskTitle.innerHTML = "<span>Hello jagan 2</span>";

// document.querySelector();

// console.log(document.querySelector("#task-title"));

// const taskTitle2 = document.querySelector("#task-title");

console.log(document.querySelector("li"));
document.querySelector(".card-action").style.backgroundColor = "green";
document.querySelector("ul li:nth-child(3)").innerText = "Hello";

