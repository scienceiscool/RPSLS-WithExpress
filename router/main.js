// inspiration from:
// http://codeforgeek.com/2014/06/express-nodejs-tutorial/
// and
// http://robdodson.me/how-to-use-ejs-in-express/

// module.exports exposes the functions we want to make use of in app.js
module.exports = function(app) {
  var index = 0,
    winCount = 0,
    tieCount = 0,
    loseCount = 0,
    outcome = "",
    choiceArray = ["rock", "paper", "scissors", "lizard", "spock"];

  function getRandomArbitrary(min, max) { // random # between min and max inclusive
  /*I found out about the following random function call from:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/
    return Math.floor(Math.random() * (max - min + 1)) + min;
  // Math is a built-in Javascript object
  } 

  app.set('json spaces', 4);

  app.get('/', function (req, res) {
    res.render('index.html')
  });

  app.get('/play/rock', function (req, res) {
    index = getRandomArbitrary(0, 4);

    if (choiceArray[index] === "rock") {
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

    res.json({"outcome": outcome, "wins": winCount, "losses": loseCount, "ties": tieCount});

    // as you can tell from the following lines, I learned the hard way
    // that you can't just call res.json() multiple times, but you need
    // to place the multiple parameters inside of the brackets in the
    // first call only. i got this idea from:
    // http://stackoverflow.com/questions/503627/how-to-pass-multiple-parameters-in-json-format-to-a-web-service-using-jquery
    //res.json({"outcome": global.outcome, "wins": global.winCount, "losses": global.loseCount, "ties": global.tieCount});
    //res.json({"wins": global.winCount});
    //res.json({"losses": global.loseCount});
    //res.json({"ties": global.tieCount});
    //res.render('rock', { computer_choice:  global.outcome });
  });

  app.get('/play/paper', function (req, res) {
    index = getRandomArbitrary(0, 4);

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

    res.json({"outcome": outcome, "wins": winCount, "losses": loseCount, "ties": tieCount});
    //res.render('paper.html');
  });

  app.get('/play/scissors', function (req, res) {
    index = getRandomArbitrary(0, 4);

    if (choiceArray[index] === "rock") { // scissors, rock
      loseCount++;
			outcome = "I chose rock. You lose.";
		} else if (choiceArray[index] === "paper") { // scissors, paper
			winCount++;
			outcome = "I chose paper. You win.";
		} else if (choiceArray[index] === "scissors") { // scissors, scissors
		 	tieCount++;
			outcome = "I chose scissors too. We tie.";
		} else if (choiceArray[index] === "lizard") { // scissors, lizard
			winCount++;
			outcome = "I chose lizard. You win.";
		} else if (choiceArray[index] === "spock") { // scissors, spock
		  loseCount++;
			outcome = "I chose spock. You lose.";
		}

    res.json({"outcome": outcome, "wins": winCount, "losses": loseCount, "ties": tieCount});
    //res.render('scissors.html');
  });

  app.get('/play/lizard', function (req, res) {
    index = getRandomArbitrary(0, 4);

    if (choiceArray[index] === "rock") { // lizard, rock
				loseCount++;
				outcome = "I chose rock. You lose.";
		} else if (choiceArray[index] === "paper") { // lizard, paper
				winCount++;
				outcome = "I chose paper. You win.";
		} else if (choiceArray[index] === "scissors") { // lizard, scissors
				loseCount++;
				outcome = "I chose scissors. You lose.";
		} else if (choiceArray[index] === "lizard") { // lizard, lizard
				tieCount++;
				outcome = "I chose lizard. We tie.";
		} else if (choiceArray[index] === "spock") { // lizard, spock
				winCount++;
				outcome = "I chose spock. You win.";
		}

    res.json({"outcome": outcome, "wins": winCount, "losses": loseCount, "ties": tieCount});
    //res.render('lizard.html');
  });

  app.get('/play/spock', function (req, res) {
    index = getRandomArbitrary(0, 4);

    if (choiceArray[index] === "rock") { // spock, rock
				winCount++;
				outcome = "I chose rock. You win.";
		} else if (choiceArray[index] === "paper") { // spock, paper
				loseCount++;
				outcome = "I chose paper. You lose.";
		} else if (choiceArray[index] === "scissors") { // spock, scissors
				winCount++;
				outcome = "I chose scissors. You win.";
		} else if (choiceArray[index] === "lizard") { // spock, lizard
				loseCount++;
				outcome = "I chose lizard. You lose.";
		} else if (choiceArray[index] === "spock") { // spock, spock
				tieCount++;
				outcome = "I chose spock too. We tie.";
		}

    res.json({"outcome": outcome, "wins": winCount, "losses": loseCount, "ties": tieCount});
    //res.render('spock.html');
  });
}

/*$.getJSON('', function (data) {
  $('#update').html(data);
});*/
