

// Define the UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const clearBtn = document.querySelector("#clear-btn");
const ul = document.querySelector(".collection");
const label = document.querySelector(`[name="my-label"]`);



loadEventListeners();

function loadEventListeners() {

    // Add Task
    form.addEventListener("submit", addTask);

    // Remove Task
    ul.addEventListener("click", removeTask);

    // Clear Task
    clearBtn.addEventListener("click", clearTask);


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
        ul.appendChild(li)
        
        taskInput.value = "";

        label.classList.remove("active")

    }
}

function removeTask(e){
    console.log(e.target);
}

function clearTask(){
    ul.innerHTML = "";
}