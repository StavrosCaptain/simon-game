var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function random_number() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    var x = gamePattern.push(randomChosenColour);

    $("#", randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
    audio.play();

}

$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);

});



