alert('Hello welcome to the numbers guessing game');
const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
let attemts = 7;
const checkBtn = document.getElementById('checkBtn');
const guessInput = document.getElementById('guess');
const message = document.getElementById('message');
checkBtn.addEventListener('click',function () {
    const userGuess = parseInt (guessInput.value);
    if(isNaN(userGuess) || userGuess < min || userGuess > max){
        message.textContent = 'Error please enter a valid number between 1 and 100';
    }else{
        attemts --;
        if(userGuess === randomNumber){
            alert('You win');
            alert('Thank you very much for using the game I hope you liked it');
            alert('Please refresh the page');
            message.textContent = `desired number : ${randomNumber}`;
        }
        else if(userGuess < randomNumber){
            alert('It is smaller');
            message.textContent = `Number of remaining guesses : ${attemts}`;
        }
        else{
            alert('It is bigger');
            message.textContent = `Number of remaining guesses : ${attemts}`;
        }
        if(attemts === 0){
            alert('You lose !  game over !');
            message.textContent = `the number was : ${randomNumber}`;
            disableInputBtn();
            alert('Thank you very much for using the game I hope you liked it');
            alert('Please refresh the page');
        }
    }
});
function disableInputBtn () {
    guessInput.disabled = true;
    checkBtn.disabled = true;
}