matchApp = {};

matchApp.init = () => {

}


$(document).ready(function() {

    const cards = $('.memoryCard');
    let flipped = false;
    let firstCard;
    let secondCard;
    let clicks = 0;
    let matchedCardsCounter = 0;

    
 
    function flipCard() {       
        $(cards).on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('flip');
            // first card selection
            if (flipped === false) {
                flipped = true;
                firstCard = this;
            //  2nd card selection
            } else {
                flipped = false;
                secondCard = this;
                clicks++;
                checkForMatch();                
            }
            $('.score').html(`Guesses: ${clicks}`);  
              
                  
        })      
    }
    flipCard();


    // check to see if cards are a match
    function checkForMatch() {
        if (firstCard.dataset.icon === secondCard.dataset.icon) {
            cardsMatch()
        } else {
            noMatch();         
        };             
    };

    // if a match, unbind click event
    function cardsMatch() {
        // TODO: add animation when they match!!!
        $(firstCard).unbind('click');
        $(secondCard).unbind('click');  
        matchedCardsCounter++;
        console.log(matchedCardsCounter);
        checkWin();
    };

    // if not a match, flip back over
    function noMatch() {
        setTimeout(() => {
            $(firstCard).toggleClass('flip');
            $(secondCard).toggleClass('flip');          
        }, 1000);
        
    };

    function shuffle() {
        // GET DIV
        let parent = $('#shuffle');
        let divs = parent.children();
        let currentIndex = divs.length;
        let temporaryValue;
        let randomIndex;

        // SHUFFLE DIV WITH FISHER YATES ALGORITHM 
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = divs[currentIndex];
            divs[currentIndex] = divs[randomIndex];
            divs[randomIndex] = temporaryValue;
        }

        // APPEND DIV
        parent.append(divs);  
    };
    shuffle();


    function checkWin() { 
        if (matchedCardsCounter === 8) {
            swal({
                title: 'You won!!!',
                text: `You matched the pairs in ${clicks} clicks!`,
                icon: 'success',
                button: 'RESET',
                closeOnClickOutside: false,
            }).then(() => {
                window.location.reload();
            })

        }
    }



});  //end doc ready




