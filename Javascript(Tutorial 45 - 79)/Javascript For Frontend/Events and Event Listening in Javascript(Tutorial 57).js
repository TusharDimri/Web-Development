console.log('We are at Tutorial 57');
/*
Browser Events:-

1. click - clicking any mouse button
2. contextmenu - right click 
3. mouseover - hovering the mouse over selected element
4. mouseout - mouse cursor out selected element
5. mouseup/mousedown - Mouse button Down(When Clicking) / Mose Button Up(After Clicking) 
6. Mouse Move - Moving the mouse over the Selected Element

7. submit - Form Event
8. foucs - Focusing on an element

9. DOMContentLoaded - When HTML Dom is successfully loaded

10. transitionend - When CSS transition ends  
*/

let para = document.getElementById('para');
para.addEventListener('mouseover', function () {
    console.log("Mouse Inside Paragraph");
})
para.addEventListener('mouseout', function () {
    console.log('Mouse is now Outside Paragrah');
})

// Note:- If we don't access element para using sleector we can still use para as modern browsers have a variable predefined with its name equal to the  element's id.