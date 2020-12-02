'use strict';



// "userName" is the name of the person
var userName = prompt('Hello my name is Mikey, welcome to my page. What is your name?');
// console.log('the user\'s name is ' + userName)
alert(' Welcome ' + userName);

// ""
var playGame = prompt('I sense you have time, would you like to play a game? {yes or no}');
// console.log(user + ' said ' + playGame)
if (playGame === 'yes' || playGame === 'y') {
  alert('I thought you might say ' + playGame + ' lets continue');
}
else if (playGame < 'yes' || 'y') {
  alert('Unfortunately, no one can escape their fate. lets begin')
}

var rainDay = prompt('Question, is it raining where you are? {yes or no}')
if (rainDay === 'No' || rainDay === 'n' || rainDay === 'no') {
  alert('How sad, i love the smell of fresh rain');
}
else if (rainDay < 'No' || 'n') {
  alert('thats just wonderful, sometimes i feel like i could dance in the rain others that it reflects my inner most emotions.')
}



