// Movie guessing game


let movie = "avatar";

let guess = prompt("guess the movie name");

while((guess!=movie)&&(guess!="quit")){
    console.log("Wrong guess")
    guess=prompt("guess Again")
}
if(guess=="avatar"){
    console.log(alert("Correct guess"))
}
else(
    console.log(alert("You quit the game"))
)

