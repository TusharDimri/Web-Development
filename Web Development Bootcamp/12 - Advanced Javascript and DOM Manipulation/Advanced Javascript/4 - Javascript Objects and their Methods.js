function BellBoy(name, age, hasLicence, languages) {
    this.name = name;
    this.age = age;
    this.hasLicence = hasLicence;
    this.languages = languages;
    this.moveSuitcase = function () { // This is a method
        console.log("Moving Suitcase...\nDone.");
    }
}

let bellBoy1 = new BellBoy("Timmy", 19, true, ["English", "Hindi", "Japanese"]);
bellBoy1.moveSuitcase(); // Calling the methods of an Object.