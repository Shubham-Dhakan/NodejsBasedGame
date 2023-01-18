var readlineSync = require("readline-sync");
var question = readlineSync.question("Which car shubham likes the most?");
console.log("Great " + question + " is a beautiful car! ");
count = 0;

function play(question, answer) {
  var userData = readlineSync.question(question);
  if (userData === answer) {
    console.log("Data is valid!");
    count = count + 1;
  }
  else {
    console.log("Data is not valid");
    count = count - 1;
  }
}


var array = [{
  que: "Which color shubham will prefer while buying car?",
  ans: "grey"
},

{
  que: "Which segment Shubham will prefer while buying car?",
  ans: "SUV"
},

{
  que: "What is Shubhams homeTowm? ",
  ans: "Jamnagar"
},

{
  que: "Where does Shubham work? ",
  ans: "Walmart"
},

{
  que: "Where does Shubham you study?",
  ans: "UWindsor"
},
{
  que: "Where Shubham is living right now?",
  ans: "Windsor"
},
{
  que: "What is Shubham's favorite fast food restaurant?",
  ans: "Subway"
},
{
  que: "Which Car Shubham drives?",
  ans: "Ecosport"
},
{
  que: "Who is the best NBA Player?",
  ans: "lebronJames"
},
{
  que: "Who won 2022 NBA Championship?",
  ans: "GSW"
}

];

for (var i = 0; i <= array.length; i++) {
  var fnc = array[i];
  play(fnc.que, fnc.ans);
  console.log("current count of right answer: " + count);
  console.log("----------------------");
  if (count == 5) {
    console.log("You reached to level two");
  } else if (count == 10) {
    console.log("You reached level three");
  }
}