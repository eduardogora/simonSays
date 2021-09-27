var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var pressedButtons = [];
userClickPattern = [];

var started = false;
var level = 0;

$(document).keypress(function()  {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

function playSound(colorSelected){
    var audio = new Audio("sounds/" + colorSelected + ".mp3");
    audio.play()
}

function nextSequence(){
    level ++;
    var randVar = Math.floor(Math.random()*4)
    var randChosenColor = buttonColors[randVar];
    gamePattern.push(randChosenColor);
    console.log(gamePattern)
    $("#" + randChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); // Use Hashtag in order to obtain the id
    playSound(randChosenColor);
}

function handleClick(colorPressed){
    userClickPattern.push(colorPressed)
    pressedButtons.push(colorPressed);
    playSound(colorPressed);
    buttonAnimation(colorPressed);
    console.log(pressedButtons);
    checkAnswer();
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickPattern[currentLevel]{
        setTimeout(function () {
            nextSequence();
        }, 1000)
    } else{
        playSound("wrong");
        $("body").addClass("game-over");
        $('#level-title').text("Game over, Press Any Key To Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200)

        startOver();
    }

}

/*
$(".btn").click(function(){
    console.log()
})*/

function buttonAnimation(buttonPressed){
    var activeButton = document.querySelector("." + buttonPressed);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
}