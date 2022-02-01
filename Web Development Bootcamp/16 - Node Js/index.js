console.log("Hey, I'm writing Javascript in my system with Node Js.");

// const fs = require("fs");

// fs.copyFileSync("testfile.txt", "copiedfile.txt");

const superheroes = require("superheroes");
let hero_name = superheroes.random();

console.log(hero_name);

const supervillians = require("supervillains");
let villian_name = supervillians.random();
console.log(villian_name);