li = document.getElementsByTagName("li");
console.log(li);
console.log(li.length);
/*
Difference between querySelector and getElementsByTagName
getElementsByTagName - ALL the elements.
querySelector - First Element Found.
*/

button = document.getElementsByClassName("btn"); // Note that name contains Elements(Plural).
console.log(button);

title = document.getElementById("title"); // Note that name contains Element(Singular) as id is unique to an element.
// console.log(title);
title.innerHTML = "Hey There";

console.log(document.querySelector('#title'));
console.log(document.querySelector('.btn'));
console.log(document.querySelector('li'));
console.log(document.querySelector('li a')); // Combining Selectors
console.log(document.querySelector('li.item')); 
console.log(document.querySelector('#list a')); // Combining Selectors 

// If more than one objects are there then querySelector returns the first element found. For getting all the elemnts by quering we use querySelectorAll.

console.log(document.querySelectorAll('.item'));

// querySelector and querySelectorAll are used more as comapred to getElement becuase they allow us to target specific elements by class, id, tag name and mixing all these.

document.querySelector('.item a').style.color = 'red';