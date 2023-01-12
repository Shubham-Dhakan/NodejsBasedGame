var readlineSync = require("readline-sync");
var question = readlineSync.question("Which car do you like the most?");
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
  que: "What color do you prefer while buying car?",
  ans: "grey"
},

{
  que: "What segment do you prefer while buying car?",
  ans: "SUV"
},

{
  que: "What is your homeTowm? ",
  ans: "Jamnagar"
},

{
  que: "Where do you work? ",
  ans: "Walmart"
},

{
  que: "Where do you study?",
  ans: "UWindsor"
}
];

for (var i = 0; i <= array.length; i++) {
  var fnc = array[i];
  play(fnc.que, fnc.ans);
  console.log("current count of right answer: " + count);
  console.log("----------------------");

}