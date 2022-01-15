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
// It is not preferred to use Javascript for styling as we need to seperate our concers so we can use a CSS class with Javascript.

// Adding a Class:
$("h1").addClass("big-title center");
// Removing a Class:
$("h1").removeClass("big-title");
// Checking for the presence of a Class:
console.log($("h1").hasClass("big-title"));


// 3. Manipulating Test using Jquery:
// Using Javascript:
document.querySelector("h1").innerText = "Javascript";
document.querySelector("h1").innerHTML = `<i>Javascript</i>`;
// Using Jquery:
$("h1").text("Jquery");
$("h1").html("<em>Jquery</em>");


//  4. Manipulating Attributes using Jquery:
// Using Javascript:
let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("class", "btn");
    console.log(buttons[i].getAttribute("class"));
}
// Using Jquery:
console.log($("button").attr("class"));
console.log($("button").attr("class", "btnn"));


// 5. Adding Event Listeners using Jquery:
// Using Javascript:
document.querySelectorAll("button").forEach(function (item) {
    item.addEventListener('click', function () {
        console.log("I got clicked");
    });
});
// Using Jquery:
$("button").click(function () {
    $("h1").css("color", "pink")
});
/*
$(document).keypress(function (event) {
    $("h1").text(event.key);
});
*/
// Alternative way to add Event Listeners:
$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");    
});



//  6. Adding or Removing Elements using Jquery:
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");


// 7. Website Animations using Jquery:
$("button").on("click", function () {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5});

    // Chaining Animations:
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})


