let crash = new Audio("sounds/crash.mp3");
let kick_bass = new Audio("sounds/kick-bass.mp3");
let snare = new Audio("sounds/snare.mp3");
let tom_1 = new Audio("sounds/tom-1.mp3");
let tom_2 = new Audio("sounds/tom-2.mp3");
let tom_3 = new Audio("sounds/tom-3.mp3");
let tom_4 = new Audio("sounds/tom-4.mp3");

document.querySelectorAll('button').forEach( function (item) {
    item.addEventListener('click', function () {
        // console.log(this);
        // console.log(this.innerHTML);
        // this.classList.toggle('color-white');
        buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case 'w':
                tom_1.play();
                break;
            
            case 'a':
                tom_2.play();
                break;
            
            case 's':
                tom_3.play();
                break;
            
            case 'd':
                tom_4.play();
                break;
            
            case 'j':
                snare.play();
                break;
            
            case 'k':
                kick_bass.play();
                break;
            
            case 'l':
                crash.play();
                break;            
            
            default:
                break;
        }
    })
});
