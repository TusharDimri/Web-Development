console.log("Hello World");


let player1 = Math.ceil(Math.random()*6);
let player2 = Math.ceil(Math.random()*6);

let dice1 = document.querySelector('.img1').setAttribute('src', `images/dice${player1}.png`);
let dice2 = document.querySelector('.img2').setAttribute('src', `images/dice${player2}.png`);

if (player1 > player2){
    document.querySelector('h1').innerHTML = `🚩 Player 1 Wins!`;
}
else if(player2 > player1){
    document.querySelector('h1').innerHTML = `Player 2 Wins! 🚩`;
}
else{
    document.querySelector('h1').innerHTML = "It's a Draw!";
}

