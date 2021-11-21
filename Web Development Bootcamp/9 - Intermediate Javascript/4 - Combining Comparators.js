var ls = Math.floor(Math.random() * 100) + 1;

/*
&& - AND
|| - OR
!  - NOT
*/ 

if (ls >= 70) {
    console.log("You love each other like Tushar loves Tushar");
}
else if (ls > 30  && ls <= 69) {
    console.log("Your love score is:", ls);
}
else{
    console.log("Your  love score is:", ls + ". You go together like oil and water.");
}