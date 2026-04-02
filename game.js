var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function newSequence() {
    var rnum = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[rnum];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    level++;
    $("#level-title").text("Level " + level);
    // console.log(gamePattern);
}

$(document).ready(function() {
  $(".btn").click(function() {
    playSound(this.id);
    userClickedPattern.push(this.id);

    checkAnswer();

    // console.log(userClickedPattern);
  });
});

function playSound(name) {
  $("#" + name).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  animatePress(name);
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

$(document).keypress(function(event) {
    if (level === 0) {
        newSequence();
    }
});

function checkAnswer() {
    var currentColorNo = userClickedPattern.length - 1;
    if (userClickedPattern[currentColorNo] === gamePattern[currentColorNo]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                newSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}































// if(userClickedPattern.length <= gamePattern.length) {
//         var isCorrect = true;
//         for(var i=0; i<userClickedPattern.length; i++) {
//             if(userClickedPattern[i] !== gamePattern[i]) {
//                 isCorrect = false;
//                 break;
//             }
//         }
//         if(isCorrect) {
//             if(userClickedPattern.length === gamePattern.length) {
//                 setTimeout(function() {
//                     newSequence();
//                     userClickedPattern = [];
//                 }, 1000);
//             }
//         }else{
//             var wrongAudio = new Audio("sounds/wrong.mp3");
//             wrongAudio.play();
//             level = 0;
//             gamePattern = [];
//             userClickedPattern = [];
//             $("#level-title").text("Game Over, Press Any Key to Restart");
//         }
//     }
