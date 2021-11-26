document.querySelector("h1").style.color = "cyan";
// document.querySelector("h1").style.fontSize= "4rem";

// We can change all CSS properties using DOM in Javascript but we have to follow naming convention in Javascript which is camel case while in CSS it is kebab case. Also the property to be set should be a string.

document.querySelector("h1").style.textAlign= "center";


// Challenge Solution:-
// document.querySelector(".btn").style.backgroundColor = "yellow";
document.querySelector(".btn").style.color = "black";

// Always remmember that HTML is for structure, CSS is for styling and Javascript is for providing functionality to our website.
// So, we should seperate our conerns by letting each do their job and write simple and readable code.
console.log(document.querySelector("button").classList);
document.querySelector("button").classList.add("change");
document.querySelector("button").classList.remove("change");
document.querySelector("button").classList.toggle("change");
// toggle means that if given class is in class list we remove it else we add the given class to the class list.

// Challenge Solution:-
document.querySelector("h1").classList.toggle("huge");