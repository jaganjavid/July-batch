
// For Loop

// Loop can execute a block of code number of times

// for(let i = 0; i <= 10; i++){


//     if(i === 3){
//         console.log(`3 is my fav number`);
//         continue;
//     }

//     if(i === 5){
//         console.log(`Hit 5 stop the loop`);
//         break;
//     }

//     console.log(i);
// }


const arr = ["Hello", 1, true, "Vakanam"];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(function(element, index, arr){
    console.log(`${element} ${index}`);
    // console.log(arr);
})