const cards = document.querySelectorAll('.memory-card'); //select all cards by their class
let countTurns = document.querySelector('.turns'); //create a var to count turns
let countPairs = document.querySelector('.pairs'); //create a var to count pairs
let xPairs = 0;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


//shuffle the cards, invoked when the page is loaded by onload in body (htlm file) 
function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()* 12);
        card.style.order = randomPos;
    })
}; 

//reset the game
function resetGame() {
    cards.forEach(card => card.classList.remove('flip')); //return the card
    cards.forEach(card => card.addEventListener('click', flipCard));//allow the cards to be clicked again
    shuffle();//shuffle the cards
    resetCount()
    closeModal();
   
}

// create a function to flip cards
function flipCard() {
    if (lockBoard) return; //avoid clicking new cards while previous round is not finished
    if (this === firstCard) return; //avoid double click blocking game

this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true // check if it's the first or second flipped card
        firstCard = this;
    } else {
        secondCard = this;

        countUpTurns();
        checkForMatch();
        }
};
//check if there is a match
function checkForMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        countUpPairs();
       
    } else {
        unflipCards();
    }
}
//turn back the cards & stop from clicking them again
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
//block the board while the player can see the cards clicked
function unflipCards() {
lockBoard = true;

    setTimeout( () => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
    }, 1500)
   
}

//ensuring if this === first card works
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]; //destructuring assigement
    [firstCard, secondCard] = [null, null];
}

//make a card flip when it's clicked
cards.forEach(card => card.addEventListener('click', flipCard));

//count numbers of turns
function countUpTurns() {
    countTurns.innerHTML++;
}

//count numbers of pairs found
function countUpPairs() {
        countPairs.innerHTML++;  
        xPairs++; // creates a number value in order to work with iterator
        if (xPairs === 6) {  
            setTimeout( () => {
            
                displayModal(); 
            }, 1500)
             
        }
 }
        


//load the winning modal
function displayModal() {
        document.querySelector(".win-modal").style.display= 'flex';
}


//close the winning modal - triggered by close button(html doc) and resetGame function
function closeModal() {
    document.querySelector(".win-modal").style.display= 'none';
}



//reset pairs & turns counters
function resetCount() {
    countPairs.innerHTML = 0;
    countTurns.innerHTML = 0;
    xPairs = 0;

}

