'use strict';



// "userName" is the name of the person
var userName = prompt('Hello my name is Mikey, welcome to my page. What is your name?');
// console.log('the user\'s name is ' + userName)
alert(' Welcome ' + userName);


//questions 1-5 below this point

//question 1 done
// "they defintely dont want to play this game but oh well"
var playGame = prompt('I sense you have time, would you like to play a game? {yes or no}');
// console.log(' its not difficult ' user + ' said ' + playGame)
if (playGame === 'yes' || playGame === 'y') {
  alert('I thought you might say ' + playGame + ' lets continue');
}
else if (playGame < 'yes' || 'y') {
  alert('Unfortunately, no one can escape their fate. Lets begin')
}
//question 2 done

var rainDay = prompt('Question, do you enjoy the rain? {yes or no}')
if (rainDay === 'No' || rainDay === 'n' || rainDay === 'no') {
  alert('How sad, i love the smell of fresh rain. Its my favorite weather');
}
else if (rainDay < 'No' || 'n') {
  alert('thats just wonderful, sometimes i feel like i could dance in the rain others that it reflects my inner most emotions. its my favorite weather')
}
//question 3 done

var coldDay = prompt('do you ejoy the snow? {yes or no}');
// console.log(ss)
if (coldDay === 'yes' || coldDay === 'y') {
  alert('the first time i ever saw snow was the day after i moved to Wa, it used to be my favorite but not any more. To hard to drive in');
}
else if (coldDay < 'yes' || 'y') {
  alert('hmmm ill figure you out')
}

//question 4 done

var windyDay = prompt(' do you love the wind? {yes or no}');
// console.log()
if (windyDay === 'yes' || windyDay === 'y') {
  alert('windy days always remind me on Winnie the Pooh in his first book, im not sure why');
}
else if (windyDay < 'yes' || 'y') {
  alert('so you just dont like anything good do you.')
}
// //question 5 started

var sunnyDay = prompt('you must love a good sunny day? {yes or no}');
// console.log()
if (sunnyDay === 'no' || sunnyDay === 'n') {
  alert('i was right when i said you didnt like anything good');
}
else if (sunnyDay < 'no' || 'n') {
  alert('i love feeling the heat while im laying on a sandy beach by the ocean. However good i feel, i still find my self awaiting the next rainy day.')
}

alert(' Thank you ' + userName + ' it was nice getting to learn a little about you, i hope you find my page to be enjoyable.')