console.log('We are at Tutorial 56');

// Selecting Elements Using ID

let content = document.getElementById('content');
console.log(content);

let nav = document.getElementById('nav');
console.log(nav);
// Changing the HTML of the element we accessed :-
nav.innerHTML = `<li>Dynamic Element</li>`;


// Selecting Elements using Class Name 

container = document.getElementsByClassName('container');
// container is an HTML Collection of Elemnts with the class name Container.
console.log(container);
console.log(container[0]);
console.log(container[1]);



// Selecting Elements Using CSS Selectors
let selector = document.querySelector('.container');
// selector will contain the first element in the DOM with class name 'container'
console.log(selector);

li = document.querySelector('#nav > li');
console.log(li);

allContainer = document.querySelectorAll('.container');
// allContainer contains an HTML Collection of all the elements with class name 'container'
console.log(allContainer);
console.log(allContainer[0]);
console.log(allContainer[1]);