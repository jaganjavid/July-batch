

// document.querySelector("#clear-btn").addEventListener("click", function(){
//   document.body.style.backgroundColor = "blue";
// })


document.querySelector("#clear-btn").addEventListener("click", onClick);

function onClick(event){


    console.log(event);
   
    let val; 

    val = event.target;
    val = event.target.id;
    val = event.target.className;

    console.log(val);
}

