

const taskInput = document.querySelector("#task");

// KetBoard

// Keydown
// taskInput.addEventListener("keydown", runEvent);

// Keyup
// taskInput.addEventListener("keyup", runEvent); // ***

// KeyPress
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Copy
// taskInput.addEventListener("copy", runEvent);

// Paste
taskInput.addEventListener("paste", runEvent);

function runEvent(e){
    console.log(`Event Type ${e.type}`);
    console.log(e.target.value);
}