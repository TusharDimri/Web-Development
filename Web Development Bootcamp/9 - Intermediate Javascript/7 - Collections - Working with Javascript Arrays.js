var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);

console.log(guestList.includes("James"));

nm = prompt("Enter your name");

if (guestList.includes(nm)) {
    console.log("Welcome", nm);
}
else{
    console.log("Sorry, maybe next time");
}