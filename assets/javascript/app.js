//when document is loaded, run function
document.ready(function game(){

//run event that starts the game once start button is pressed


//declare some global variables such as time remaining, correct Guesses, and incorrect guesses
var timeRemaining = 60;
var correctGuesses = 0;
var incorrectGuesses= 0;

//create a boolean to use for when the gmae is running
var gameRunning = false;



//on click event to start the game
$("#start-button").click(function(){
    $("#start-button").hide();
    var gameRunning = true;
    
});

//create an array of Answers, and an array of questions

var answersArray ={};
var questionsArray={};


//create a timer  that will decrement the timeRemaining until it hits 0

function Time(){
    
    timerCount = setInterval(timerDecrease, 1000);
}

    function timerDecrease(){
             timeRemaining-- ;
           $("#timer").html(timeRemaining);
    
           if(timeRemaining === 0){
      gameRunning = false;
       clearInterval(timerDecrease)
      $("#timer").html(timeRemaining)
      $("#instructions").html()
      }
    }
  
})


//create a function to call that will display both Incorrectguesses and correct guesses

function gameEnd(){
    $("#game-over").html("Thats All Folks You have " + correctGuesses + " Answers Correct. You have " + incorrectGuesses + " Answers Incorrect")
}


// when timer hits 0 make an event that displays both values for guesses

  
//create a functions that allows user to choose one choice froim the array

//create an if scenario if answers are correct



//append child to empty divs for instructions content, and for actual trivia questions
