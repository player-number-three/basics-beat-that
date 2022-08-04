//There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins.

// different game modes
var diceRollGameMode = "DICE ROLL GAME MODE";
var diceChooseMode = "DICE CHOOSE MODE";
var gameMode = "DICE ROLL GAME MODE";
// player rolls array
playerRolls = [];
// player rolls function
var rollDiceForPlayer = function () {
  var counter = 0;
  while (counter < 2) {
    playerRolls.push(diceRoll());
    console.log(playerRolls, `dice roll for player`);
    counter = counter + 1;
  }
  return `Hello Player ! Your dice rolls : <br> Dice 1 : ${playerRolls[0]} <br> Dice 2 : ${playerRolls[1]}`;
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
  // if input is not 1 or 2
  if (playerInput != 1 && playerInput != 2) {
    console.log(`if player fails to input 1 or 2`);
    myOutputValue =
      "Please key in either 1 or 2 to choose the Dice that you want to be the first number.";
  }
  // if input is 1
  if (playerInput == 1) {
    console.log(`if player manages to input 1`);
    var playerScore = Number(String(playerRolls[0]) + String(playerRolls[1]));

    myOutputValue = `Hello Player,  your score is ${playerScore}`;
  }

  // if input is 2
  if (playerInput == 2) {
    console.log(`if player manages to input 2`);
    var playerScore = Number(String(playerRolls[1]) + String(playerRolls[0]));
    myOutputValue = `Hello Player,  your score is ${playerScore}`;
  }
  return myOutputValue;
};

var main = function (input) {
  console.log(gameMode, `current game mode`);
  var myOutputValue = "";

  if (gameMode == diceRollGameMode) {
    console.log(`game mode == diceRollGameMode`);

    myOutputValue = `${rollDiceForPlayer()} <br> Please key in 1 or 2 to choose the Dice that you want to be the first number`;

    gameMode = diceChooseMode;
    console.log(`game mode changes to ${diceChooseMode}`);

    return myOutputValue;
  }

  if (gameMode == diceChooseMode) {
    myOutputValue = getPlayerScore(input);
    return myOutputValue;
  }

  //   // if input is not 1 or 2
  //   if (input != 1 && input != 2) {
  //     console.log(`if player fails to input 1 or 2`);
  //     myOutputValue =
  //       "Please key in either 1 or 2 to choose the Dice that you want to be the first number.";
  //   }
  //   // if input is 1
  //   if (input == 1) {
  //     console.log(`if player manages to input 1`);
  //     var playerScore = Number(String(playerRolls[0]) + String(playerRolls[1]));

  //     myOutputValue = `Hello Player,  your score is ${playerScore}`;
  //   }

  //   // if input is 2
  //   if (input == 2) {
  //     console.log(`if player manages to input 2`);
  //     var playerScore = Number(String(playerRolls[1]) + String(playerRolls[0]));
  //     myOutputValue = `Hello Player,  your score is ${playerScore}`;
  //   }

  //   return myOutputValue;
  // }
};
