/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

//Need to randomly get a selection
//Make new array everytime
//Push in random choice every time into array
//3 choices per round
//27 choices for 3 rounds
//go through for loop 27 times; 
//take random index form choices array
//push into a blank array
//after 3 choices in blank array, push into bigger array

//Input: None
//Output: Array of arrays
///Constraints : Only three rounds
var rockPaperScissors = function (
) {
	var choices = ['rock', 'paper', 'scissors'];
	var allround = [];
	var count = 0;
  console.log(randomIndex);
  for(var i = 0; i < 27; i++){
  var randomIndex = Math.floor(Math.random() * 3);
  var eachround = [];
        while(eachround.length !== 3){
        	eachround.push(choices[randomIndex]);
      
        }
        allround.push(eachround);
		}
    return allround;
} 

  // TODO: your solution here

