const fs = require('fs');
// above line imports fs module.

let text = fs.readFileSync("File.txt", "utf-8");
// readFileSync() takes name offile as first argument and encoding type as the second argument
console.log('The content of the file is:-');
console.log(text);
console.log("\n");

// Making changes to the text of the file:-
text = text.replace('node.js', 'Node.js');
console.log(text);

// Applying the changes made to a new file:-
console.log("Creating a new File");
fs.writeFileSync("File_change.txt", text);
// First argument is the file name(A new file is created in this case as no file exists in cwd by the given name) and second argument is what we want to write to our file.

