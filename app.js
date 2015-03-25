// modifying hw5
// this actually works, unlike hw5 - yay!
// a second chance at success...

// some inspiration came from:
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

"use strict";

var express = require('express'); // call express
var app = express();
var port = process.env.PORT || 3000; // set the port

// inspiration for the following from:
// http://codeforgeek.com/2014/06/express-nodejs-tutorial/
require('./router/main')(app);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// i got the idea for the following from:
// http://expressjs.com/guide/using-middleware.html
//app.use(express.static('/public'));

app.listen(port);
console.log('Magic happening on port ' + port);

/*var index = 0,
  winCount = 0,
  loseCount = 0,
  tieCount = 0,
  outcome = "",
  choiceArray = ["rock", "paper", "scissors", "lizard", "spock"];

function getRandomArbitrary(min, max) { // random # between min and max inclusive
  /*I found out about the following random function call from:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // Math is a built-in Javascript object
}*/

//index = getRandomArbitrary(0, 4);

/*  if (choiceArray[index] === "rock") {
    tieCount++;
    outcome = "I chose rock too. We tie.";
  } else if (choiceArray[index] === "paper") {
    loseCount++;
    outcome = "I chose paper. You lose.";
  } else if (choiceArray[index] === "scissors") {
    winCount++;
    outcome = "I chose scissors. You win.";
  } else if (choiceArray[index] === "lizard") {
    winCount++;
    outcome = "I chose lizard. You win.";
  } else if (choiceArray[index] === "spock") {
    loseCount++;
    outcome = "I chose spock. You lose.";
  }

  if (choiceArray[index] === "rock") { // paper, rock
    winCount++;
    outcome = "I chose rock. You win.";
  } else if (choiceArray[index] === "paper") { // paper, paper
    tieCount++;
    outcome = "I chose paper too. We tie.";
  } else if (choiceArray[index] === "scissors") { // paper, scissors
    loseCount++;
    outcome = "I chose scissors. You lose.";
  } else if (choiceArray[index] === "lizard") { // paper, lizard
    loseCount++;
    outcome = "I chose lizard. You lose.";
  } else if (choiceArray[index] === "spock") { // paper, spock
    winCount++;
    outcome = "I chose spock. You win.";
  }
*/
// inspiration for the following line from:
// http://grokbase.com/t/gg/nodejs/151matr2bw/how-to-use-variables-declared-in-server-js-to-router-files
/*global.outcome = outcome;
global.winCount = winCount;
global.loseCount = loseCount;
global.tieCount = tieCount;*/
// note to Dr. Avery or Ms. Beth: i really don't like using globals,
// but i couldn't figure out another way to make router/main.js
// recognize these variables

//random_pick = outcome;
//app.set(random_pick, outcome);
// inspiration for the above line from:
// http://expressjs.com/api.html

// inspiration for the following from:
// http://codeforgeek.com/2014/06/express-nodejs-tutorial/
/*app.get('/', function (req, res) {
  res.send('Hello, World!');
});*/
