var deckOfCards = [];
function createDeck()
{
	deckOfCards = [
        {value: 11, type: "Ace", suite: "Clubs", img: "01 1 CLUBS final.png"},
        {value: 11, type: "Ace", suite: "Diamond", img: "01 1 DIAMOND final ps.png"},
        {value: 11, type: "Ace", suite: "Heart", img: "01 1 HEART final ps.png"},
        {value: 11, type: "Ace", suite: "Spade", img: "01 1 SPADE final ps.png"},
        {value: 2, type: "2", suite: "Clubs", img: "02 2 CLUBS final.png"},
        {value: 2, type: "2", suite: "Diamond",img: "02 2 DIAMOND final ps.png"}, 
        {value: 2, type: "2", suite: "Heart", img: "02 2 HEART final ps.png"},
        {value: 2, type: "2", suite: "Spade", img: "02 2 SPADE final.png"},
        {value: 3, type: "3", suite: "Clubs", img: "03 3 CLUBS final.png"},
        {value: 3, type: "3", suite: "Diamond", img: "03 3 DIAMOND final ps.png"},
        {value: 3, type: "3", suite: "Heart", img: "03 3 HEART final ps.png"},
        {value: 3, type: "3", suite: "Spade", img: "03 3 SPADE final ps.png"},
        {value: 4, type: "4", suite: "Clubs", img: "04 4 CLUBS final.png"},
        {value: 4, type: "4", suite: "Spade", img: "04 4 DIAMOND final ps.png"},
        {value: 4, type: "4", suite: "Heart", img: "04 4 HEART final.png"},
        {value: 4, type: "4", suite: "Spade", img: "04 4 SPADE final.png"},
        {value: 5, type: "5", suite: "Clubs", img: "05 5 CLUBS final ps.png"},
        {value: 5, type: "5", suite: "Diamond", img: "05 5 DIAMOND final ps.png"},
        {value: 5, type: "5", suite: "Heart", img: "05 5 HEART final.png"},
        {value: 5, type: "5", suite: "Spade", img: "05 5 SPADE final ps.png"},
        {value: 6, type: "6", suite: "Clubs", img: "06 6 CLUBS final ps.png"},
        {value: 6, type: "6", suite: "Diamond", img: "06 6 DIAMOND final ps.png"},
        {value: 6, type: "6", suite: "Heart", img: "06 6 HEART final ps.png"},
        {value: 6, type: "6", suite: "Spade", img: "06 6 SPADE final ps.png"},
        {value: 7, type: "7", suite: "Clubs", img: "07 7 CLUBS final ps.png"},
        {value: 7, type: "7", suite: "Diamond", img: "07 7 DIAMOND final ps.png"},
        {value: 7, type: "7", suite: "Heart", img: "07 7 HEART final ps.png"},
        {value: 7, type: "7", suite: "Spade", img: "07 7 SPADE final ps.png"},
        {value: 8, type: "8", suite: "Clubs", img: "08 8 CLUBS final ps.png"},
        {value: 8, type: "8", suite: "Diamond", img: "08 8 DIAMOND final ps.png"},
        {value: 8, type: "8", suite: "Heart", img: "08 8 HEART final ps.png"},
        {value: 8, type: "8", suite: "Spade", img: "08 8 SPADE final ps.png"},
        {value: 9, type: "9", suite: "Clubs", img: "09 9 CLUBS final ps.png"},
        {value: 9, type: "9", suite: "Diamond", img: "09 9 DIAMOND final ps.png"},
        {value: 9, type: "9", suite: "Heart", img: "09 9 HEART final ps.png"},
        {value: 9, type: "9", suite: "Spade", img: "09 9 SPADE final ps.png"},
        {value: 10, type: "10", suite: "Clubs", img: "10 10 CLUBS final ps.png"},
        {value: 10, type: "10", suite: "Diamond", img: "10 10 DIAMOND final ps.png"},
        {value: 10, type: "10", suite: "Heart", img: "10 10 HEART final ps.png"},
        {value: 10, type: "10", suite: "Spade", img: "10 10 SPADE final ps.png"},
        {value: 10, type: "Jack", suite: "Clubs", img: "12 J CLUBS final ps.png"},
        {value: 10, type: "Jack", suite: "Diamond", img: "12 J DIAMOND final ps.png"},
        {value: 10, type: "Jack", suite: "Heart", img: "12 J HEART final ps.png"},
        {value: 10, type: "Jack", suite: "Spade", img: "12 J SPADE final ps.png"},
        {value: 10, type: "Queen", suite: "Clubs", img: "13 Q CLUBS final ps.png"},
        {value: 10, type: "Queen", suite: "SDiamond", img: "13 Q DIAMOND final ps.png"},
        {value: 10, type: "Queen", suite: "Heart", img: "13 Q HEART final ps.png"},
        {value: 10, type: "Queen", suite: "Spade", img: "13 Q SPADE final ps.png"},
        {value: 10, type: "King", suite: "Clubs", img: "14 K CLUBS final ps.png"},
        {value: 10, type: "King", suite: "Diamond", img: "14 K DIAMOND final ps.png"},
        {value: 10, type: "King", suite: "Heart", img: "14 K HEART final ps.png"},
        {value: 10, type: "King", suite: "Spade", img: "14 K SPADE final ps.png"},
        {value: 15, type: "Little Joker", suite: "Joker", img: "JOKER BLACK.png"},
        {value: 16, type: "Big joker", suite: "Joker", img: "JOKER RED.png"},
    ];

    var deckBack = [

        {value: 1, type: "back", suite: "ZigZag1", img: "BACK1 ZIGZAG.png"},
        {value: 2, type: "back", suite: "back1", img: "BACK1.png"},
        {value: 3, type: "back", suite: "ZigZag2", img: "BACK2 ZIGZAG.png"},
        {value: 3, type: "back", suite: "Back2", img: "BACK2.png"},
        {value: 4, type: "back", suite: "Back3", img: "BACK3.png"},
        {value: 4, type: "back", suite: "Back4", img: "BACK4.png"}
    ]
    // the render is just for testing on the card_viwer page.
    // renderDeck();
	return deckOfCards, deckBack;
}

// Shuffe the deck
//This code originated from thatsoftwaredude.com, i had to add the image location code to the code.
function shuffle()
{
	// for 200 turns
	// switch the values of two random cards
	for (let i = 0; i < 200; i++)
	{
		let location1 = Math.floor((Math.random() * deckOfCards.length));
		let location2 = Math.floor((Math.random() * deckOfCards.length));
		let tmp = deckOfCards[location1];

		deckOfCards[location1] = deckOfCards[location2];
		deckOfCards[location2] = tmp;
	}

}

createDeck();
// remove jokers at 52 and 53
deckOfCards.splice(52,2);
shuffle();