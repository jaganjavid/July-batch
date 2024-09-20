
// Remove Element
const lists = document.querySelectorAll(".collection-item"); // NodeList

// lists[0].remove();
// lists[4].remove();

// Class & Attr

const firstLi = document.querySelector("li:nth-child(1)");

const link = firstLi.children[0];

let val;

val = link.className; // String
val = link.classList; // DOMTOKENLIST

val.add("test");
// console.log(val.contains("jagan"));
val.add("jagan");
val.replace("test", "Javid");
val.remove("jagan");

// const clearBtn = document.querySelector("#clear-btn");

// const card = document.querySelector(".card-action");

// clearBtn.addEventListener("click", function(){
//     card.classList.add("add-color");
// })