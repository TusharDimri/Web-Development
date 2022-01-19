var buttonSequence = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var isGameStarted = false;

var redSound = new Audio("sounds/red.mp3");
var blueSound = new Audio("sounds/blue.mp3");
var greenSound = new Audio("sounds/green.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var wrongSound = new Audio("sounds/wrong.mp3");

var sounds = [redSound, blueSound, greenSound, yellowSound];

function playAudio(name) {
    sounds[buttonSequence.indexOf(name)].play();
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function () { 
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

function nextSequence() { 
    let randomIndex = Math.floor(Math.random()*4);
    // console.log(ind);
    let randomColor = buttonSequence[randomIndex];
    // console.log(randomColor);
    gamePattern.push(randomColor);
    console.log(gamePattern);
    $(`#${randomColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playAudio(randomColor);   
    level++;
    $("#level-title").html(`Level ${level}`);
}

function restart() {
    level = 0;
    isGameStarted = false;
    gamePattern = []
    userClickedPattern = [];
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");
        if (userClickedPattern.length == gamePattern.length) {
            userClickedPattern = []
            setTimeout(nextSequence, 1000);
        }
    } 
    else{
        console.log("Game Over");
        wrongSound.play();
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").html(`Game Over, Press any key to restart`);
        restart();
    }
}

$(".btn").on("click", function (){
    let userChosenColor = $(this).attr("id");
    // console.log(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playAudio(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

  
$(document).keypress(function () {  
    if (!isGameStarted) {
        nextSequence();
        isGameStarted = true;
    }
});   
