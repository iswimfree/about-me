'use strict';


function user() {
  // "userName" is the name of the person
  var userName = prompt('Hello my name is Mikey, welcome to my page. What is your name?');
  // console.log('the user\'s name is ' + userName)
  alert(' Welcome ' + userName);
  return userName;
}

var userName = user();

//questions 1-5 below this point

//question 1 done
// "they defintely dont want to play this game but oh well"
function qOne() {
  var playGame = prompt('I sense you have time, would you like to play a game? yes or no').toLowerCase();
  // console.log(' its not difficult ' user + ' said ' + playGame)
  if (playGame === 'yes' || playGame === 'y') {
    alert('I thought you might say ' + playGame + ' lets continue');
  } else {
    alert('Unfortunately, no one can escape their fate. Lets begin');
  }
}
qOne();

// //question 2 done
function qTwo() {
  var rainDay = prompt('Question, do you enjoy the rain? {yes or no}').toLowerCase();
  if (rainDay === 'no' || rainDay === 'n') {
    alert('How sad, i love the smell of fresh rain. Its my favorite weather');
  } else {
    alert('thats just wonderful, sometimes i feel like i could dance in the rain others that it reflects my inner most emotions. its my favorite weather');
  }
}
qTwo();

//question 3 done
function qThree() {
  var coldDay = prompt('do you ejoy the snow? {yes or no}').toLowerCase();
  if (coldDay === 'yes' || coldDay === 'y') {
    alert('the first time i ever saw snow was the day after i moved to Wa, it used to be my favorite but not any more. To hard to drive in');
  } else {
    alert('hmmm ill figure you out');
  }
}
qThree();

//question 4 done
function qFour() {
  var windyDay = prompt(' do you love the wind? {yes or no}').toLowerCase();
  // console.log()
  if (windyDay === 'yes' || windyDay === 'y') {
    alert('windy days always remind me on Winnie the Pooh in his first book, im not sure why');
  } else {
    alert('so you just dont like anything good do you.');
  }
}
qFour();
// //question 5 started
function qFive() {
  var sunnyDay = prompt('you must love a good sunny day? {yes or no}').toLowerCase();
  // console.log()
  if (sunnyDay === 'no' || sunnyDay === 'n') {
    alert('i was right when i said you didnt like anything good');
  } else {
    alert('i love feeling the heat while im laying on a sandy beach by the ocean. However good i feel, i still find my self awaiting the next rainy day.');
  }
}
qFive();


// question 6: started
// question must Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some
// this is so hard lol

function qSix() {
  var correctAnswer = 5;
  var numberOfGuesses = 4;
  for (var i = 0; i < numberOfGuesses; i++) {
    var userAnswer = parseInt(prompt('How many questions did i ask?'));
    if (userAnswer === correctAnswer) {
      alert('nicely done ' + userName + ' the correct answer is ' + correctAnswer);
      break;
    } else if (userAnswer > correctAnswer) {
      alert('thats too high');
    } else if (userAnswer < correctAnswer) {
      alert('thats too low ');
    }

  }
  alert('you anwsered 5 questions so far');
}
qSix();

// //question 7 not finished

function qSeven() {
  var mostFav = ['wind', 'snow', 'rain'];
  var atTempts = 0;
  var numGuess = 6;
  var rice = true;
  while (rice && atTempts <= numGuess); {
    atTempts++;
    var weaTher = prompt('what is my favorite weather?');
    for (var j = 0; j < mostFav.length; j++) {
      if (weaTher === mostFav[j]) {
        alert('i love ' + mostFav + ' days ');
        break;
      }
    } if (rice); {
      alert('I dont think so.');
    }
  }
}
qSeven();

function pine() {
  alert(' Thank you ' + userName + ' it was nice getting to learn a little about you, i hope you find my page to be enjoyable.');
}

pine();
