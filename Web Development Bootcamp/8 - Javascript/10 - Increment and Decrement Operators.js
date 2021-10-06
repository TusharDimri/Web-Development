var x = 5;
x += 5; // Same as x = x = 5
console.log(x);
x++; // Same as x = x + 1
console.log(x);
x--; // Sameas x = x - 1
console.log(x);

// Note:- 
var x = 3;
var y = x++;
y += 1;
console.log(x, y);
// x gets assigned to y first before it gets incremented to 4.