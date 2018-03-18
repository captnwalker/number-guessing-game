// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const   game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

// Assign min/max
minNum.textContent = min;
maxNum.textContent = max;

// Listener
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validation
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check for winner
    if(guess === winningNum) {
       
        // Game over - Won

        gameOver(true, `${winningNum} is Correct! YOU WIN!`);

    } else {
        // Wrong guess
        guessesLeft -= 1;

        if(guessesLeft === 0) {

        setMessage(`Game Over! You Lost. The mystery number was ${winningNum}`);

        } else {

        // Change border color
        guessInput.style.borderColor = 'red';
        // Set message

        // Clear input
        guessInput.value = '';

        // Tell user they guessed wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
  
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg);
  }
  
// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}