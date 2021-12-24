// function handleClick() {  
//     console.log("I got clicked."); 
// }
// document.querySelector(".w").addEventListener('click', handleClick);

// // Using Anonymous Functions:-
// document.querySelector('.a').addEventListener('click', function(){
//     console.log('I got clicked.');
// })

document.querySelectorAll('button').forEach( function (item) {
    item.addEventListener('click', function () {
        console.log("I got clicked")
    })
});

// Alternative:-
// drum = document.querySelectorAll("button");
// for (let i = 0; i < drum.length; i++) {
//     drum[i].addEventListener('click', function () {
//         console.log("I got Clicked.");
//     })
// }