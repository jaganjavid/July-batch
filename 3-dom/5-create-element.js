
{/* <li class="collection-item">
    List Item 5
    <a href="#" class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
    </a>
</li> */}


const ul = document.querySelector(".collection");

// Create Element

const li = document.createElement("li");


// Add Class
li.className = "collection-item";

// Add ID
li.id = "test";

// Add Attribute
li.setAttribute("title", "New Item");

// Add a inner Text
li.innerText = "Hello"; // ***

// li.appendChild(document.createTextNode("Hello world"));

// Create a new link element
const link = document.createElement("a");

// Add class to link
link.className = "delete-item secondary-content";

// Add icon HTML
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link to li
li.appendChild(link);

// Append li to ul
ul.appendChild(li)