console.log('We are at Tutorial 59');

// Using Date Object in Javascript:-

let now = new Date(); // mow is a Date object
console.log(now);

let referenceTime = new Date(0);
console.log(referenceTime);

let referenceTime10 = new Date(10);
// referenceTime10 contains the reference date + 10ms of time
console.log(referenceTime10);

// Date in different formats:-

// date = new Date(year, month, date, hours, minutes , seconds, milliseconds); 

date1 = new Date('2029-07-19'); // Year-Month-Date
console.log(date1);

date2 = new Date(2020, 4, 6, 9, 3, 2, 34);
console.log(date2);


// Some Methods:-

let yr = date2.getFullYear();
console.log(yr);

let m = date2.getMonth();
console.log(m);

let d = date2.getDate();
console.log(d);

let h = date2.getHours();
console.log(h);

// Similarly we can use getMinutes(), getSeconds(), getMilliseconds() too.


console.log("Before Changing: "+date2);

date2.setDate(5); // Changing Date of a Date Object from 6 to 5
console.log("After Changing: " + date2);

date2.setDate(39); // Check Output(We have no date 39 for any month)
console.log("After Changing Again: " + date2);

date2.setYear(2021);
console.log("After Changing Year: " + date2);

// Similarly, we can use setMonths(), setHours(), setSeconds(), setMilliseconds too.

rightNow = Date.now(); 
console.log(rightNow);
// rightNow contains the timestamps(in milliseconds) from reference time up till now and it always keeps on increasing

// NOTE :- Date.now() can be used to calculate the execution time of our program(or code)
