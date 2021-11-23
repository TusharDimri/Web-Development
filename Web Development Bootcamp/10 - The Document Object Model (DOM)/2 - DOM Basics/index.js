console.log(document);
console.log(document.firstElementChild);
console.log(document.firstElementChild.firstElementChild);
console.log(document.firstElementChild.lastElementChild.firstElementChild);

var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = "Hello World";
heading.style.color = "cyan";

document.querySelector("input").click();

// DOM Object has:  1. Properties  2. Methods 
/*
For example: 
heading.innerHTML, here innerHTML is a property.
document.querySelector("input").click(), here .click() is a method.
*/

// Challenge:
third = document.firstElementChild.lastElementChild.querySelector('ul').lastElementChild;
third.innerHTML = "Edited";