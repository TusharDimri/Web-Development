var num  = 99
while (num >= 0){
    if (num == 0){
        console.log(`No bottle of beer on the wall, no more bottles of beer.\nGo to the store and buy some, 99 bottles of beer on the wall.\n`);
    }
    else if (num == 1) {
        console.log(`${num} bottle of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottle of beer on the wall.\n`);
    }
    else{
        console.log(`${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottles of beer on the wall.\n`);
    }
    num --;
}