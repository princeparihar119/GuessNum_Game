document.addEventListener('DOMContentLoaded', function () {
    const quit = document.querySelector("#quit");
    quit.onclick = function () {
        // console.log("quit");
        message.textContent = `you Quit the game`;
        message.style.color = "red";
        submitGuessBtn.disabled = true;
        maxButton.disabled = true;
    };

    let maxNum = document.querySelector("#maxNum");
    let maxButton = document.querySelector("#maxButton");
    maxButton.addEventListener("click", function () {
        let max = maxNum.value;
        const randomNumber = Math.floor(Math.random() * max) + 1;
        // console.log(max);
        // console.log(randomNumber);
        let attempts = 0;

        const guessNum = document.querySelector('#guessNum');
        const submitGuessBtn = document.querySelector('#submitGuessBtn');
        const message = document.querySelector('#message');
        const message2 = document.querySelector('#message2');

        submitGuessBtn.addEventListener('click', function () {
            const userGuess = parseInt(guessNum.value);
            guessNum.value = " ";

            if (userGuess === randomNumber) {
                message.textContent = `Congratulations! you are right! random number was: ${randomNumber}`;
                message2.textContent = `Your attempts is : ${attempts}`;
                submitGuessBtn.disabled = true; 
            } else if (userGuess < randomNumber) {
                message.textContent = 'Hint : Ooh! your guess was too small. please try again.';
                message2.textContent = `Your attempts is : ${attempts}`;
            } else {
                message.textContent = 'Hint : Ooh! your guess was too large. please try again.';
                message2.textContent = `Your attempts is : ${attempts}`;
            }
            attempts++;
        });
    });
});
