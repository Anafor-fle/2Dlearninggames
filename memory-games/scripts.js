const cards = document.querySelectorAll('.memory-card'); 

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; //avoid double click blocking game

this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true // check if it's the first or second flipped card
        firstCard = this;
    } else {
        secondCard = this;

        checkForMatch();
        
        }
};

function checkForMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

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

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()* 12);
        card.style.order = randomPos;
    });
})(); // mettre entre parathèse la fonction permet de l'invoquer dès le chargement

cards.forEach(card => card.addEventListener('click', flipCard));
