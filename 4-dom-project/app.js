

// Define the UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const clearBtn = document.querySelector("#clear-btn");
const ul = document.querySelector(".collection");
const label = document.querySelector(`[name="my-label"]`);



loadEventListeners();

function loadEventListeners() {

    // DOM LOAD EVENT
    document.addEventListener("DOMContentLoaded", getTasks);

    // Add Task
    form.addEventListener("submit", addTask);

    // Remove Task
    ul.addEventListener("click", removeTask);

    // Clear Task
    clearBtn.addEventListener("click", clearTask);


}

function getTasks(){

    let tasks;
    
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){

        // Create a li 
        const li = document.createElement("li");

        // Add class
        li.className = "collection-item";

        // Create a text 
        li.innerText = task;

        // Create a new link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add a icon into link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // append a link into li
        li.appendChild(link);

        // append a li into ul
        ul.appendChild(li);

    });
    

}


function addTask(e) {

    // To stop the browers refresh
    e.preventDefault();

    if (taskInput.value === "") {
        alert("Please fill the form");
    } else {

        // Create a li 
        const li = document.createElement("li");

        // Add class
        li.className = "collection-item";

        // Create a text 
        li.innerText = taskInput.value;

        // Create a new link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add a icon into link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // append a link into li
        li.appendChild(link);

        // append a li into ul
        ul.appendChild(li);

        // Store in LS
        storeTaskInLocalStorage(taskInput.value);
        
        taskInput.value = "";

        label.classList.remove("active")

    }
}


function storeTaskInLocalStorage(taskValue){
    
    let tasks;


    if(localStorage.getItem("tasks") === null){

        tasks = [];
        tasks.push(taskValue);
        console.log("STEP-1");

    } else {

        tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(taskValue);
        console.log("STEP-2");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


function removeTask(e){
    
    // if(e.target.parentElement.className === "delete-item secondary-content"){
    //    if(confirm("Are you sure?")){
    //       e.target.parentElement.parentElement.remove();
    //    }
    // }

    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();

            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskElement){
   
    console.log(taskElement);

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
       if(taskElement.innerText === task){
          tasks.splice(index, 1);
       }
    });


    localStorage.setItem("tasks", JSON.stringify(tasks));




}

function clearTask(){
    ul.innerHTML = "";

    clearTaskFromLocalStorage();
}

function clearTaskFromLocalStorage(){
    localStorage.removeItem("tasks");
}


// const f = ["orange", "apple", "Kiwi"];

// f.splice(1,0,"Lemon");

// console.log(f);