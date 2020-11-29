console.log('We are at Turorial 58');

// setTimeout - Allows us to run the function once after the given interval of time.
// setInterval - Allows us to run the function repeatedly after the given interval of time.

function greet(name, byeText) {
    console.log('Hello Good Morning ' + name);
    console.log(byeText);
}
// greet();

timeOut1 = setTimeout(greet, 5000, "Tushar", "Take Care");  // 5000ms = 5s
console.log(timeOut1)
// timeOut will contain the unique id of the setTimeout call.We can use clearTimeOut to stop that call.
// clearTimeout(timeOut);

// greet() function will run once after 5s.



// timeOut2 = setInterval(greet, 2000, "Ken", "Farewell");
// console.log(timeOut2);
// clearInterval(timeOut2)
// greet() function will repeatedly run after an interval of 2s(2000ms)
// clearInterval() wors exactly like clearTimeout()



// Application of setInterval():-
// function displayTime() {
//     time = new Date();
//     document.getElementById('time').innerHTML = time;
// }
// setInterval(displayTime, 1000);