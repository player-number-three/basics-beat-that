//There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins.

// different game modes
var diceRollGameMode = "DICE ROLL GAME MODE";
var diceChooseMode = "DICE CHOOSE MODE";
var gameMode = "DICE ROLL GAME MODE";
var diceCompareSCore = "DICE ROLL COMPARE SCORES";
// player rolls array
var currentPlayerRolls = [];
// current player
var currentPlayer = 1;
//player score
var allPlayerScore = [];
// player rolls function
var rollDiceForPlayer = function () {
  var counter = 0;
  while (counter < 2) {
    currentPlayerRolls.push(diceRoll());
    console.log(currentPlayerRolls, `dice roll for player`);
    counter = counter + 1;
  }
  return `Hello Player ${currentPlayer} ! Your dice rolls : <br> Dice 1 : ${currentPlayerRolls[0]} <br> Dice 2 : ${currentPlayerRolls[1]}`;
};
// dice roll function
var diceRoll = function () {
  var randomdecimal = Math.random() * 6;
  var randomIntegral = Math.floor(randomdecimal);
  var dicenumber = randomIntegral + 1;
  console.log(dicenumber, `computer rolled dice number`);
  return dicenumber;
};

// player score function

var getPlayerScore = function (playerInput) {
  var playerScore;
  // if input is not 1 or 2
  if (playerInput != 1 && playerInput != 2) {
    console.log(`if player fails to input 1 or 2`);
    return `Please key in either 1 or 2 to choose the Dice that you want to be the first number <br> Dice 1 : ${currentPlayerRolls[0]} <br> Dice 2 : ${currentPlayerRolls[1]}`;
  }

  // if input is 1
  if (playerInput == 1) {
    console.log(`if player manages to input 1`);
    var playerScore = Number(
      String(currentPlayerRolls[0]) + String(currentPlayerRolls[1])
    );
    // myOutputValue = `Hello Player ${currentPlayer},  your score is ${playerScore}`;
  }

  // if input is 2
  if (playerInput == 2) {
    console.log(`if player manages to input 2`);
    var playerScore = Number(
      String(currentPlayerRolls[1]) + String(currentPlayerRolls[0])
    );
    // myOutputValue = `Hello Player ${currentPlayer},  your score is ${playerScore}`;
  }

  // store the player score
  allPlayerScore.push(playerScore);
  console.log("score has been pushed to all player score");

  // clear the store value
  currentPlayerRolls = [];
  console.log(`current player rolls reset`);

  return "your chosen value is " + playerScore;

  // return `Hello player ${currentPlayer}! you have chosen ${playerScore}`;
};

var restartGame = function () {
  currentPlayer = 1;
  allPlayerScore = [];
  gameMode = diceRollGameMode;
  console.log(`restarting the game`);
};

var main = function (input) {
  console.log(gameMode, `current game mode`);
  console.log(currentPlayer, ` current player `);
  var myOutputValue = "";

  if (gameMode == diceRollGameMode) {
    console.log(`game mode == diceRollGameMode`);

    myOutputValue = `${rollDiceForPlayer()} <br> Please key in 1 or 2 to choose the Dice that you want to be the first number `;

    gameMode = diceChooseMode;
    console.log(`game mode changes to dice choose mode`);

    return myOutputValue;
  }

  if (gameMode == diceChooseMode) {
    console.log(`player score input`);
    myOutputValue = getPlayerScore(input);

    if (currentPlayer == 1) {
      console.log(` end of player 1 turn, beginning of player 2 turn`);
      currentPlayer = 2;
      gameMode = diceRollGameMode;
      return myOutputValue + `<br> it is now player 2's turn <br>`;
    }

    if (currentPlayer == 2) {
      console.log(`end of player 2 turn`);
      gameMode = diceCompareSCore;
      console.log(`gamemode changes to dice compare score`);
    }
    return `${myOutputValue} <br> Press submit to see the scores!`;
  }

  if (gameMode == diceCompareSCore) {
    // if tie
    if (allPlayerScore[0] == allPlayerScore[1]) {
      console.log(`its a tie`);
      myOutputValue = " It is a TIE! No one wins!";
    }

    //if player 1 win
    if (allPlayerScore[0] > allPlayerScore[1]) {
      console.log("player 1 wins!");
      myOutputValue = "Player 1 WINS!";
    }
    //if player 2 win
    if (allPlayerScore[0] < allPlayerScore[1]) {
      console.log("player 2 wins!");
      myOutputValue = "Player 2 WINS!";
    }
    console.log(`final score compared`);
    restartGame();

    return myOutputValue + `<br> Click Submit to play again!`;
  }
};
