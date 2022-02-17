var houseArray = [];
var playerArray = [];
let playerScore = 0,  houseScore=0;
let betAmount = 0, myMoney = 0; myWins=0, myLosses=0, blackJacks=0;
let houseName = "The House", playerName = "Guest";
let inPlay = false;
let hole = true;


createDeck();
// remove jokers at 52 and 53
deckOfCards.splice(52,2);
shuffle();

//Player will start with $1000
updateMoney(1000);
//Prompt User to Enter thier name

//Update Names
updateLabel();
//Click button to start asgame will load without cards



// Each Bet is $20. Beetting up will increase by $20


// Bet Up and Down Buttons
var raiseBtn = document.getElementById("raiseBet");
raiseBtn.addEventListener("click", () =>{

    if(myMoney!=0) {
        betAmount = betAmount + 10
        // update bet value in the index.html
        document.getElementById("betAmount").innerHTML = "$"+betAmount.toFixed(2)
        updateMoney(-10)
    } else {
        myMoney = 0
    }

})
var lowerBtn= document.getElementById("lowerBet");
lowerBtn.addEventListener("click", () =>{
    if(betAmount === 0 ){
        betAmount = 0
    } else {
        betAmount = betAmount -10
        updateMoney(10)
    }
    // update bet value in the index.html
    document.getElementById("betAmount").innerHTML = "$"+ betAmount.toFixed(2)

})

// Update the players money
function updateMoney(amount){

        myMoney = myMoney + amount
        document.getElementById("myMoney").innerHTML = "$"+ myMoney.toFixed(2)

}

// Deals the cards to the House and the player
document.getElementById("play").addEventListener("click", deal);
function deal(){
    if (betAmount === 0){
        alert("You need to enter a bet.");
        return false;
    }
    inPlayCheck(true)
    
    clearHands()
    clearTable()
    
    // deal four cards,2 to each players hand array which will be an array of objects.
    // in this loop we need to radomly get the object from the deck, copt to player hand, then remove from the deck 
    playerArray.push(deckOfCards[0]);
    houseArray.push(deckOfCards[1]);
    playerArray.push(deckOfCards[2]);
    houseArray.push(deckOfCards[3]);
    
    deckOfCards.splice(0,4);
    console.log(deckOfCards.length);
    loadHands(true);
}

// Loads the hands to the table
function loadHands(){
    console.log(hole)
    clearTable()
    let = imgRoot = "./assets/cards/";
    //Load the house's hand, but the inital deal will show the hole card in the dealers hand.
    if(hole === true) {
        let cardImage = document.createElement("img");
        cardImage.className = "dealtCard";
        cardImage.src=`${imgRoot}BACK1.png`;
        let card = `<img src="${cardImage.src}" alt="Hole Card" id="dealtCard">`    //Image for the hole card  
        houseDiv.innerHTML +=card;
        cardImage.src=`${imgRoot}${houseArray[1].img}`
        card = `<img src="${cardImage.src}" alt="${houseArray[1].type}_${houseArray[1].suite}" id="dealtCard">` 
        houseDiv.innerHTML +=card;
        // scoreHand('house')
    } else if (hole === false){
        for(let i = 0; i < houseArray.length; i++)
        {
            let cardImage = document.createElement("img");
            cardImage.className = "dealtCard";
            cardImage.src=`${imgRoot}${houseArray[i].img}`;
            let card = `<img src="${cardImage.src}" alt="${houseArray[i].type}_${houseArray[i].suite}" id="dealtCard">`      
            houseDiv.innerHTML +=card;
            scoreHand('house')
        }
    }
    // load player hand
    for(let i = 0; i < playerArray.length; i++)
	{
        let cardImage = document.createElement("img");
		cardImage.className = "dealtCard";
        cardImage.src=`${imgRoot}${playerArray[i].img}`;
		let card = `<img src="${cardImage.src}" alt="${playerArray[i].type}_${playerArray[i].suite}" id="dealtCard">`
		playerDiv.innerHTML +=card;
        scoreHand('player')
	}
}
function clearTable(){
    // clear table to reload hands
    document.querySelectorAll("#dealtCard").forEach(e => e.remove());

}
//***********BUTTON FUNCTIONS********** */
// Hit  adds a card to the player or houses hand then recalculates the score.

hitBtn.addEventListener("click", hit());
function hit(player){
    if(player === "player"){
        playerArray.push(deckOfCards[0])
        deckOfCards.splice(0,1)
        loadHands(true);
        // Get Player Total
    } else if (player === "house"){
        console.log("Add to player hand")
        // Get House new Total
    }
}

// .Stand ends the players turn and allow the dealer to reveal its hand, and make a hit if the House Hand is below 17.
// standBtn.addEventListener("click", standBtn());
// function standBtn(){
//     console.log('stand button - `)
//     // switches the hole position as false so the Hose Hands reavelas both cards.
//     hole === false;
//     loadHands();
// }
//clears the hands for a new game
function clearHands(){
    houseArray = [];
    playerArray = [];

}

// Scores both hands
function scoreHand(x){
    if (x==="house"){
        let sum =0;
        houseArray.forEach(obj => sum += obj.value);
        houseScore=sum;
        console.log(sum);
    } else if(x==="player") {
        let sum = 0;
        playerArray.forEach(obj => sum += obj.value);
        playerScore=sum;
    }
    updateLabel()
}
// Update sthe player names with total score of hand
function updateLabel(){
    document.getElementById('houseName').textContent=`${houseName} : ${houseScore}`;
    document.getElementById('playerName').textContent=`${playerName} : ${playerScore}`;

}
//Disables button if game is in play
function inPlayCheck(bool) {
    if (bool === true ){
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