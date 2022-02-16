var houseArray = [];
var playerArray = [];
let playerScore, houseScore, betAmount, myMoney = 0;
createDeck();
// remove jokers at 52 and 53
deckOfCards.splice(52,2);
shuffle();

updateMoney(1000);
//Prompt User to Enter thier name

//Update Name

//Click button to start asgame will load without cards

//Player will start with $1000

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
function updateMoney(amount){

        myMoney = myMoney + amount
        document.getElementById("myMoney").innerHTML = "$"+ myMoney.toFixed(2)

}
document.getElementById("play").addEventListener("click", deal);
function deal(){
    clearTable()
    // deal four cards,2 to each players hand array which will be an array of objects.
    // in this loop we need to radomly get the object from the deck, copt to player hand, then remove from the deck 
    playerArray.push(deckOfCards[0]);
    houseArray.push(deckOfCards[1]);
    playerArray.push(deckOfCards[2]);
    houseArray.push(deckOfCards[3]);
    
    deckOfCards.splice(0,4);
    console.log(deckOfCards.length);
    loadHands();
}
function loadHands(){
    clearTable()
    let = imgRoot = "./assets/cards/";
    //Load the house's hand
	for(let i = 0; i < houseArray.length; i++)
	{
        let cardImage = document.createElement("img");
		cardImage.className = "dealtCard";
        cardImage.src=`${imgRoot}${houseArray[i].img}`;
		let card = `<img src="${cardImage.src}" alt="${houseArray[i].type}_${houseArray[i].suite}" id="dealtCard">`
		houseDiv.innerHTML +=card;
	}
    // load player hand
    for(let i = 0; i < playerArray.length; i++)
	{
        let cardImage = document.createElement("img");
		cardImage.className = "dealtCard";
        cardImage.src=`${imgRoot}${playerArray[i].img}`;
		let card = `<img src="${cardImage.src}" alt="${playerArray[i].type}_${playerArray[i].suite}" id="dealtCard">`
		playerDiv.innerHTML +=card;
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
        loadHands();
        // Get Player Total
    } else if (player === "house"){
        console.log("Add to player hand")
        // Get House new Total
    }
}