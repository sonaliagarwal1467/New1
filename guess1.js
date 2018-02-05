// Generates a random number for game.
// not 
//edit
var randomNumber = Math.floor(Math.random() * 100) + 1;
var count = 1;
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guess = document.querySelector('.guesses');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var reset;

function checkGuess() {
    guess.textContent = 'Your guess: ' + Number(guessField.value);
    // lastResult.textContent = 'Inform user your current game status. if user wins or not';
    // lowOrHi.textContent = 'Inform user if your guess is high or low than the random value';
    // Write your script below and change the above variables according to Game requirement.
  
  if(randomNumber === Number(guessField.value)) {
    lastResult.textContent = 'Congrats ! You Win!';
    lowOrHi.textContent = '';
    finish();
  }
  else if(count ===10)
    { lastResult.textContent = 'You Lose!!!';
     lowOrHi.textContent = '';
     finish();
    } else 
        {
      lastResult.textContent = 'Sorry! You Lose...try again!';
      if(guessField > randomNumber)
       lowOrHi.textContent = 'Guess low';
      else
        lowOrHi.textContent = 'Guess high';
    }
  guessField.value = '' ;
    
    
}

guessSubmit.addEventListener('click', checkGuess);

function finish()
{
  guessField.disabled = true;
  guessSubmit.disabled = true;
  reset = document.createElement('button')
  reset.textContent = 'Reset'
  document.body.appendChild(reset);
  reset.addEventListener('click',resetFunc);
}
function resetFunc() {
  count = 1;
  var reset1 = document.querySelectorAll('.result1 p');
  for(var i = 0 ; i < reset1.length ; i++) {
    reset1[i].textContent='';
  
}
