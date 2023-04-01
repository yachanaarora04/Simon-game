buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
var level=0;
// var size = 0;
$(document).on("keydown", function () 
{ 
    nextSequence();
});
function nextSequence()
{
    
    userClickedPattern = [];

    level+=1;
    $("h1").text("level "+level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    // return randomNumber;
    var randomChosenColour;
    randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
}

$(".btn").click(function()
{
    var userChosenColour;
    userChosenColour = $(this).attr("id");
    
    userClickedPattern.push(userChosenColour);
    // size++;
    $(this).fadeIn(100).fadeOut(100).fadeIn(100);
    // nextSequence();
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(userChosenColour)
{
    var audio = new Audio("sounds/" + userChosenColour + ".mp3");
    audio.play();
}
// var currentColour;
function animatePress(currentColour)
{
    $("."+currentColour).addClass("pressed");
    setTimeout(function () {
        $(".btn").removeClass("pressed");
      }, 100);
}

function checkAnswer(currentLevel)
{
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel])
    {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length)
        {
            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
        }
    }
        else 
        {
            console.log("wrong");
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            
            $("body").addClass("game-over");
            setTimeout(function () 
            {
                $("body").removeClass("game-over");
            }, 200);
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver();
        }
}  

function startOver()
{
    gamePattern = [];
    userClickedPattern = [];
    level=0;
    
   

}






