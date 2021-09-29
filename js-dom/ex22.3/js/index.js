const gussedLetterBlock = document.querySelector('.gessed-letter');
const message = document.querySelector('.message');
const keysGuessedLabel = document.querySelector('.keys-guessed-label');
const inputs = document.querySelector('.inputs-array');
const inputText = document.querySelector('#input-text');
const reload = document.querySelector('#reload-btn');

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let randomIndex = Math.floor(Math.random() * alphabet.length);
let randomLetter = alphabet[randomIndex];

let triedLetters = "";
console.log(randomLetter);
inputText.addEventListener('keyup', () => {
    let str = inputText.value.toLowerCase();
    
    if (/^[a-z]+$/.test(str)) {
        if (triedLetters.includes(str)) {
            message.innerHTML = `${str} has already been guessed!`;
            message.style.fontSize = "20px"
        } else {
            triedLetters += str + ",";
            message.innerHTML = `Nope, wrong letter!`;
            message.style.fontSize = "20px"
            message.style.color = "red"
            inputs.innerHTML = `${triedLetters}`;
        }
        inputText.value = '';

        if (str === randomLetter) {
            message.innerHTML = `Right letter!`;
            message.style.color = "green"
            message.style.fontSize = "20px"
            gussedLetterBlock.innerHTML = randomLetter;
            keysGuessedLabel.innerHTML = "Would you like to play again?";
            inputs.innerHTML = "";
            inputText.style.display = "none";
            reload.style.display = "block";

            reload.addEventListener("click", () => {
                inputText.style.display = "block";
                message.innerHTML = ``;
                gussedLetterBlock.innerHTML = "?";
                keysGuessedLabel.innerHTML = "Key Guessed?";
                reload.style.display = "none";
                triedLetters = "";
                randomIndex = Math.floor(Math.random() * alphabet.length);
                randomLetter = alphabet[randomIndex];
                console.log(randomLetter);

            });
        }
    } else {
        message.innerHTML = `please inter a valid letter`;
        message.style.color = "red";
        inputText.value = "";
    }
})
