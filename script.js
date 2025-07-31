/*
Dicee Challenge Step 3 - Create a Random Number
Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.
*/

document.getElementById("rollBtn").addEventListener("click", function () {
    const diceImages = [
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png"
    ];
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    let interval = setInterval(() => {
        img1.src = diceImages[Math.floor(Math.random() * 6)];
        img2.src = diceImages[Math.floor(Math.random() * 6)];
    }, 75); // Fast animation

    setTimeout(() => {
        clearInterval(interval);
        // Final roll
        const randomNumber1 = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;
        img1.src = "images/dice" + randomNumber1 + ".png";
        img2.src = "images/dice" + randomNumber2 + ".png";

        // Display outcome
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins";
        }
        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 2 Wins &#128681";
        }
        else {
            document.querySelector("h1").innerHTML = "Draw!&#129309";
        }
        document.getElementById("rollBtn").innerHTML = "Roll again!";
    }, 2000); // 2 seconds
});