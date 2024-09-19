

{/* <li class="collection-item">
List Item 5
<a href="#" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
</a>
</li> */}


// Create Element

const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add id
li.id = "test-1"

// Add innerText to li
li.innerText = "Hello";

// Create a link
const link = document.createElement("a");

// Add a class to link 
link.className = "delete-item secondary-content";

// Add a inner HTML
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link to li
li.appendChild(link);

document.querySelector(".collection").appendChild(li);

console.log(li);
