// jQuery or $ mean the same thing i.e. document.querySelector() and document.querySelectorAll();

// .ready() method is required when we have the script tags for our Javascript and jQuery both at the head of the page.
// $(document).ready(function () {
    // jQuery("h1").css("color", "blue");
// })

// $("h1").css("color", "blue");

// It's better to incorporate your Javascript and Jquery before the end of the body tags.


// 1.  Selecting Elements using Jquery:
// Using Javascript:
console.log(document.querySelector("h1"));
// Using Jquery:
console.log($("h1"));
console.log($("button"));


// 2. Manipulating CSS styles using Jquery:
// Using Javascript:
document.querySelector("h1").style.color = "blue";
// Using Jquery:
$("h1").css("color", "blue")
$("button").css("padding", "10px");
