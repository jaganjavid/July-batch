

let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector("ul li:nth-child(5)");
// child Node

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[1];
// val = list.childNodes[2];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeName;
// val = list.childNodes[2].nodeName;
// val = list.childNodes[0].nodeType;

// 1 - Element none
// 3 - Text node
// 8 - Comment node

// Get the children element


val = list.children; // ***
val = list.children[0];
// val = list.children[1].innerText = "Hello";
// val = list.children[2].style.background = "blue";
// val = list.children[0].children[0].className;

// FirstChild
val = list.firstElementChild; // ***

// LastChild
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get parent
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get the next sibling

// val = listItem.nextElementSibling.nextElementSibling;

// Get the previous sibling
val = listItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;



console.log(val);