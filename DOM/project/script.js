// Initial state
var isPlayer1Turn = true;

// Function to roll the dice and update the image
function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomDiceImage = "side_" + randomNumber + "_pips.png"; // side_1_pips.png - side_6_pips.png
    return {randomNumber, randomDiceImage};
}

// Function to determine and display the winner
function determineWinner(player1Score, player2Score) {
    var winnerText = "";
    if (player1Score > player2Score) {
        winnerText = "Player 1 Wins!";
    } else if (player1Score < player2Score) {
        winnerText = "Player 2 Wins!";
    } else {
        winnerText = "It's a Draw!";
    }

    // Display the winner
    var winnerElement = document.createElement("h2");
    winnerElement.textContent = winnerText;
    document.querySelector(".contaner").appendChild(winnerElement);
}

// Initialize scores
var player1Score = 0;
var player2Score = 0;

// Event listener for dice images
document.querySelectorAll(".dice-img").forEach((img, index) => {
    img.addEventListener("click", function() {
        if ((isPlayer1Turn && index === 0) || (!isPlayer1Turn && index === 1)) {
            var result = rollDice();
            img.setAttribute("src", "/DOM/project/images/" + result.randomDiceImage);
            if (isPlayer1Turn) {
                player1Score = result.randomNumber;
            } else {
                player2Score = result.randomNumber;
                determineWinner(player1Score, player2Score);
            }
            isPlayer1Turn = !isPlayer1Turn; // Toggle turn
        }
    });
});
