// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max)
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

// Play again listener
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listener
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validation
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a Number between ${min} and ${max}`, 'red');
    }

    // Check for winner
    if(guess === winningNum) {
       
        // Game over - Won

        gameOver(true, `${winningNum} is Correct! YOU WIN!`);

    } else {
        // Wrong guess
        guessesLeft -= 1;

        if(guessesLeft === 0) {

        gameOver(false, `Game Over! You Lost. The Mystery Number was ${winningNum}`);

        } else {

        // Change border color
        guessInput.style.borderColor = 'red';

        // Clear input
        guessInput.value = '';

        // Tell user they guessed wrong number
      setMessage(`${guess} is not correct ~ ${guessesLeft} guesses remaining`, 'red');
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

    // Play again
    guessBtn.value = 'Click to Play Again';
    guessBtn.className +=  'play-again'
  }

// Get random number
function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}