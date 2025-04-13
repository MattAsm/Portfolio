let dialogue = document.getElementById("dialogue");
const mySubmit = document.getElementById("submitBtn");

const min = 1;
const max = 1000;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Answer is ${answer}`);

let counter = 0;

mySubmit.onclick = function()
    {
        let guess = document.getElementById("numberBox");
        guess = guess.value;
        guess = Number(guess);
        
            if(isNaN(guess))
            {
                dialogue.textContent = `Did you even type a number?`;
            }
            else if(guess < 1 || guess > 1000)
            {
                dialogue.textContent = "Please stay within the designated number range ;-;";
            }
            else if(guess === answer){
                dialogue.textContent = `${guess} is Correct! Changing Number!`;
                answer = Math.floor(Math.random() * (max - min + 1)) + min;
                console.log(`New Random Number is ${answer}`);
            }
            else{
                dialogue.textContent = `${guess} was Incorrect`;
                counter++;
                if(counter % 5 == 0)
                {
                    dialogue.textContent = `${guess} was Incorrect. Try checking the console 😉`;
                }
            }       
    }

    /////////////////

    function rollDice()
    {
        const numOfDice = document.getElementById("numberOfDice").value;
        const diceResult = document.getElementById("diceResult");
        const diceImages = document.getElementById("diceImages");
        const values = [];
        const images = [];

        for(let i = 0; i < numOfDice; i++)
        {
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            console.log();
            images.push(`<img src="Dice/${value}.png" style="width:250px;">`);
        }

        diceResult.textContent = `Dice: ${values.join(", ")}`;
        diceImages.innerHTML = images.join('');
    }