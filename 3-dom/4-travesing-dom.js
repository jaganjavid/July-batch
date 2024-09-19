

let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector("ul li:nth-child(5)");

// Get the children element nodes

val = list.children; // HTMLCOLLECTION
val = list.children[0];
val = list.children[1];
// val = list.children[1].innerText = "Hello";
// val = list.children[3].style.background = "blue";
val = list.children[0].children[0];

// FirstChild
val = list.firstElementChild;

// LastChild
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get parent node
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

val = listItem;

// nextElementSibling

// val = listItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

val = listItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

console.log(val);