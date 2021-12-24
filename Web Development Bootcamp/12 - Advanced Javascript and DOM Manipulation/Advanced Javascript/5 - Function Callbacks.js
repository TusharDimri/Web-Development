$0.addEventListener("click", function (event) {
    console.log(event);
})

// Here, the anonymous function is a Callback Function.

// Prototype of AddEventListener in Javascript:
function anotherAddEventListener(typeOfEvent, callback){
    // Detect Event Code..
    var eventThatHappened = {
        eventType: 'keydown',
        key: 'p', 
        durationOfKeyDown: 2
    }
    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}
document.addEventListener("keydown", function (event) {
    console.log(event);
})