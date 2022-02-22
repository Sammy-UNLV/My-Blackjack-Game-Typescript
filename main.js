// Initialize Variables
let myMoney = 0,
  betAmount = 0;
(playerScore = 0), (houseScore = 0);
let playerBJ = 0,
  playerBJBool = false,
  houseBJ = 0,
  gamesPlayed = 0,
  gamesWon=0;
let playerName, houseName;
let playerStand = false;
let houseStand = false;
let playerArray = [];
let houseArray = [];
playerName = "Player 1";
houseName = "The House";
inPlayCheck(false);
let hole = true;

// let gameStats
// myBlackJackStorage.setItem(
//    "pName",
//    "pMoney",
//    "pGames",
//    "pWins",
//    "pBlackJacks"
//  );



updateMoney(1000);


// Update the players money
function updateMoney(amount) {
  myMoney = myMoney + amount;
  document.getElementById("myMoney").innerHTML = "$" + myMoney.toFixed(2);
}

// Loads the hands to the table
function loadHands(hole) {
  clearTable();
  let = imgRoot = "./assets/cards/";

  //Load the house's hand, but the inital deal will show the hole card in the dealers hand.
  if (hole === true) {
    let cardImage = `${imgRoot}BACK1.png`;
    let card = `<img src="${cardImage}" alt="Hole Card" id="dealtCard">`; //Image for the hole card
    houseDiv.innerHTML += card;
    let cardImage2 = `${imgRoot}${houseArray[1].img}`;
    card = `<img src="${cardImage2}" alt="${houseArray[1].type}_${houseArray[1].suite}" id="dealtCard">`;
    houseDiv.innerHTML += card;

    // show player hand on initial deal
    for (let i = 0; i < playerArray.length; i++) {
      let cardImage = document.createElement("img");
      cardImage.className = "dealtCard";
      cardImage.src = `${imgRoot}${playerArray[i].img}`;
      let card = `<img src="${cardImage.src}" alt="${playerArray[i].type}_${playerArray[i].suite}" id="dealtCard">`;
      playerDiv.innerHTML += card;
      
    }
    scoreHand("player");
  } 
  if (hole === false) { // This if loop means the player has seletected to Stand
    for (let i = 0; i < houseArray.length; i++) {
      let cardImage = `${imgRoot}${houseArray[i].img}`;
      let card = `<img src="${cardImage}" alt="${houseArray[i].type}_${houseArray[i].suite}" id="dealtCard">`;
      houseDiv.innerHTML += card;
    }
    scoreHand("house");
    for (let i = 0; i < playerArray.length; i++) {
      let cardImage = document.createElement("img");
      cardImage.className = "dealtCard";
      cardImage.src = `${imgRoot}${playerArray[i].img}`;
      let card = `<img src="${cardImage.src}" alt="${playerArray[i].type}_${playerArray[i].suite}" id="dealtCard">`;
      playerDiv.innerHTML += card;
      
    }
  }

}
// clear table to reload hands
function clearTable() {
  document.querySelectorAll("#dealtCard").forEach((e) => e.remove());
}

//clears the hands for a new game
function clearHands() {
  houseArray = [];
  playerArray = [];
}

// Scores both hands
function scoreHand(x) {
  if (x === "house") {
    let sum = 0;
    houseArray.forEach((obj) => (sum += obj.value));
    houseScore = sum;
    // Update House Label
    if (houseScore === 21 && houseArray.length === 2) {
      document.getElementById("houseName").textContent = `${houseName} : ${houseScore} - BLACKJACK!`;
      houseStand = true;
    } else if (houseScore > 21) {
      document.getElementById("houseName").textContent = `${houseName} : ${houseScore} - BUST`;
      houseStand = true;
    } else {
      document.getElementById("houseName").textContent = `${houseName} : ${houseScore}`;
    }
        // Check if House will stand or hit.. This loop is where the game ends  
    if (playerStand === true){
      if (houseScore < playerScore && playerScore <= 21) { // This can only be true after the house hits atleast once.
        hit("house")
        console.log("House Hit: House has lower hand than player and Player did not bust")
      } else {  // Game will only end when the house stands
        houseStand = true
        statusCheck();
      }
    } 
  } else if (x === "player") {
    let sum = 0;
    playerArray.forEach((obj) => (sum += obj.value));
    playerScore = sum;
    // Update the player labels
    if (playerScore === 21 && playerArray.length === 2) {
      document.getElementById("playerName").textContent = `${playerName} : ${playerScore} - BLACKJACK!`;
      playerBJBool = true; // recognizes a Blackjackl was dealt.
      document.getElementById("hitBtn").disabled = true;

    } else if (playerScore > 21) {
      document.getElementById("playerName").textContent = `${playerName} : ${playerScore} - BUST`;
      document.getElementById("hitBtn").disabled = true;
    } else {
      document.getElementById("playerName").textContent = `${playerName} : ${playerScore}`;
    }
 }
}

//Disables button if game is in play
function inPlayCheck(bool) {
  if (bool === true) {
    document.getElementById("play").disabled = true;
    document.getElementById("raiseBet").disabled = true;
    document.getElementById("lowerBet").disabled = true;
    document.getElementById("hitBtn").disabled = false;
    document.getElementById("standBtn").disabled = false;
  } else {
    document.getElementById("play").disabled = false;
    document.getElementById("raiseBet").disabled = false;
    document.getElementById("lowerBet").disabled = false;
    document.getElementById("hitBtn").disabled = true;
    document.getElementById("standBtn").disabled = true;
  }
}
function statusCheck() {
  // checks if house and player both stand
  if (houseStand === true & playerStand === true) {
    if ((playerScore <= 21 && houseScore < playerScore) || (playerScore <= 21 && houseScore > 21)) {
      win('player');
    } else if (playerScore <= 21 && playerScore === houseScore) {
      win('push');
    } else {
      win('house');
    }
  }
}
function win(x) {
  let message;
  if (x === "push") {
    message = `This game was a push. Current Bet: $${betAmount.toFixed(2)}`;
  } else if (x === "player") {
    message = `You Won $${betAmount.toFixed(2)}! Current Bet: $${betAmount.toFixed(2)}`;
    youWin();
    document.getElementById("betAmount").style.animationIterationCount = "infintite"
    myMoney += betAmount;
    gamesWon +=1;
  } else if (x === "house"){
    youLost();
    message = `You Lost $${betAmount.toFixed(2)}`;
    myMoney -= betAmount;
  }
  document.getElementById("betAmount").innerHTML = message;
  inPlayCheck(false);  
  // Update stats

  updateStats()
}
function updateStats(){
  gamesPlayed += 1;
  if (playerBJBool === true){
    playerBJ += 1;
    playerBJBool =false;
  }
  let wlp = (gamesWon/gamesPlayed)*100;
  console.log(`Games: ${gamesPlayed} - Games Won: ${gamesWon} - ${Date.now()}`)
  document.getElementById("myMoney").innerHTML = "$" + myMoney.toFixed(2);
  document.getElementById("gamesPlayed").innerHTML = gamesPlayed;
  document.getElementById("wins").innerHTML = gamesWon;
  document.getElementById("wlp").innerHTML = wlp.toFixed(2) + "%";
  document.getElementById("blackJacks").innerHTML = playerBJ;
  
  localStorage.setItem('pMoney', myMoney)
  localStorage.setItem('pGames', gamesPlayed)
  localStorage.setItem('pWins', gamesWon)
  localStorage.setItem('pBlackjacks', playerBJ)
}