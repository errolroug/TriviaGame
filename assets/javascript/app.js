//when document is loaded, run function
// document.ready()
//run event that starts the game once start button is pressed


//declare some global variables such as time remaining, correct Guesses, and incorrect guesses
var timeRemaining = 60;
var correctGuesses = 0;
var incorrectGuesses= 0;

//create an array of Answers, and an array of questions

var answersArray = [];
var questionsArray=["What is another name for the title, Avatar The Last Airbender ?","How old is Aang in the show ?", "In the intro of Avatar : The Last Airbender, what is the third element Katara says ?","Who is the painted lady in episode 3 book 3 ?"]
;

//create a boolean to use for when the game is running
var gameRunning = false;

//create a timer  that will decrement the timeRemaining until it hits 0

function timer(){
    timeRemaining--;
    if(timeRemaing<= 0){
        clearInterval(counter);
        return;
    };

    $("#timer").html("Time left " + timeRemaining + " secs.");

};

//create a function to call that will display both Incorrectguesses and correct guesses

function gameEnd(){
    if(timeRemaining = 0){
    $("#game-over").html("Thats All Folks You have " + correctGuesses + " Answers Correct. You have " + incorrectGuesses + " Answers Incorrect")
}
};

function triviaGame(){
    //when guess is chosen display

}


  //on click event to start the game
$("#start-button").click(function (){
    $(this).hide();
    gameRunning = true;
    counter = setInterval(timer,1000);
    triviaGame();
    timer();
    
});
//create a functions that allows user to choose one choice from the array

//create an if scenario if answers are correct



//append child to empty divs for instructions content, and for actual trivia questions
