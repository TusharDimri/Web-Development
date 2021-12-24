// var bellBoy1 = {
//     nm: "Timmy",
//     age: 19,
//     hasWorkPermit: true,
//     languages: ["English", "Japanese"]
// } // This is an Object

// console.log(bellBoy1.nm);
// console.log(bellBoy1.age);

function BellBoy(nm, age, hasWorkPermit, languages) {
    this.nm = nm;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}// This is a Constructor Function

let bellBoy1 = new BellBoy("Timmy", 19, true, ["English", "Japanese"]); // Creating an object using construxtor function
console.log(bellBoy1.nm);
console.log(bellBoy1.age);
console.log(bellBoy1.hasWorkPermit);
console.log(bellBoy1.languages);

// Another Example:-
function HouseKeeper(name, age, yearsOfExperience, cleaningRepertiore) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertiore = cleaningRepertiore;
}

let houseKeeper1 = new HouseKeeper("Jane", 56, 12, ["Bathroom", "Lobby", "Bedroom"]);
console.log(houseKeeper1.name);
console.log(houseKeeper1.age);
console.log(houseKeeper1.yearsOfExperience);
console.log(houseKeeper1.cleaningRepertiore);
