

// document.getElementsByClassName();

const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION

// items[0].style.color = "green";
// items[0].innerText = "Hola";

// console.log(items.length);


// for(let i = 0; i < items.length; i++){
//    items[i].style.color = "red";
// }

// Convert to array

// let lists = Array.from(items);

// console.log(lists);
// console.log(Array.isArray(lists));

// lists.forEach(function(element, index){
//     element.style.color = "blue";
// })


const listItems = document.querySelectorAll(".collection-item"); // NODELIST


listItems.forEach(function(element, index, arr){

    element.style.color = "blue";
    console.log(index);
    // console.log(arr);
})

