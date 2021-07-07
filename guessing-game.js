/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

var y = Math.floor(Math.random() * 100 + 1 );

var guess = 5;

document.getElementById("submitguess").onclick = function(){
var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("Congratulations! Your guess is correct!" + guess + " Guess");
}
else if (x > y)
{
    guess++;
    alert("Sorry! Your guess is too high!");
}
else
{
    guess++;
    alert("Sorry! Your guess is too low!");
}
}