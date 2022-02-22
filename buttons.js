
// Deals the cards to the House and the player
document.getElementById("play").addEventListener("click", deal);
function deal(){
    if(deckOfCards.length < 35){
        createDeck();
        deckOfCards.splice(52,2);
        shuffle();
    }
    if (betAmount === 0){
        document.getElementById("betAmount").innerHTML = `Current bet is $0.00. Raise your bet.`;
    } else if (betAmount > 0 && myMoney <= 0){
        document.getElementById("betAmount").innerHTML = `Current bet of $${betAmount.toFixed(2)}is too high.`;
    }
    // new deal clears all variables
    clearHands()
    clearTable()
    inPlayCheck(true)
    playerScore = 0;
    houseScore= 0;
    playerStand=false;
    houseStand=false;
    document.getElementById("betAmount").innerHTML = `$${betAmount.toFixed(2)}`;
    document.getElementById("houseName").innerHTML = `${houseName}`;


    // deal four cards,2 to each players hand array which will be an array of objects.
    // in this loop we need to radomly get the object from the deck, copt to player hand, then remove from the deck 
    playerArray.push(deckOfCards[0]);
    houseArray.push(deckOfCards[1]);
    playerArray.push(deckOfCards[2]);
    houseArray.push(deckOfCards[3]);
    
    deckOfCards.splice(0,4);
    loadHands(true);
}

// Bet Up and Down Buttons. Each Bet is $20. Betting up will increase by $20
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

// Hit  adds a card to the player or houses hand then recalculates the score.
let hitBtn = document.getElementById("hitBtn");
hitBtn.addEventListener("click", hit);
function hit(hitMe){
    if(hitMe === "player"){

        playerArray.push(deckOfCards[0])   
        deckOfCards.splice(0,1)

        let x = playerArray.length -1;
        let cardImage = `${imgRoot}${playerArray[x].img}`;
        let card = `<img src="${cardImage}" alt="${playerArray[x].type}_${playerArray[x].suite}" id="dealtCard">`      
        playerDiv.innerHTML +=card;
        scoreHand('player');
    } else if (hitMe === "house"){
        houseArray.push(deckOfCards[0]);
        deckOfCards.splice(0,1);

        let x = houseArray.length - 1;
        let cardImage = `${imgRoot}${houseArray[x].img}`;
        let card = `<img src="${cardImage}" alt="${houseArray[x].type}_${houseArray[x].suite}" id="dealtCard">`      
        houseDiv.innerHTML +=card;
        scoreHand('house');
    }

}

// Stand ends the players turn and allow the dealer to reveal its hand, and make a hit if the House Hand is below 17.
let standBtn = document.getElementById("standBtn").addEventListener("click", stand);
function stand(){
    playerStand = true;
    // disable the Hit and Stand button
    document.getElementById("hitBtn").disabled = true;
    document.getElementById("standBtn").disabled = true;

    //switches the hole card to false so the House Hand reveals both cards.
    loadHands(false);


}