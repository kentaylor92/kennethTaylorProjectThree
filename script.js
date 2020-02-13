
matchApp = {};

matchApp.cards = $('.memoryCard');
matchApp.flipped = false;
matchApp.firstCard;
matchApp.secondCard;
matchApp.clicks = 0;
matchApp.matchedCardsCounter = 0;
matchApp.reset = $('.reset');


matchApp.init = () => {

    matchApp.flipCard = function () {
        $(matchApp.cards).on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('flip');
            // first card selection
            if (matchApp.flipped === false) {
                matchApp.flipped = true;
                matchApp.firstCard = this;
                //  2nd card selection
            } else {
                matchApp.flipped = false;
                matchApp.secondCard = this;
                matchApp.clicks++;
                matchApp.checkForMatch();
            }
            $('.score').html(`Guesses: ${matchApp.clicks}`);
        })
    }
    matchApp.flipCard();


    // check to see if cards are a match
    matchApp.checkForMatch = function() {
        if (matchApp.firstCard.dataset.icon === matchApp.secondCard.dataset.icon) {
            matchApp.cardsMatch()
        } else {
            matchApp.noMatch();
        };
    };

    // if a match, unbind click event
    matchApp.cardsMatch = function () {
        // TODO: add animation when they match!!!
        $(matchApp.firstCard).unbind('click');
        $(matchApp.secondCard).unbind('click');
        matchApp.matchedCardsCounter++;
        matchApp.checkWin();
    };

    // if not a match, flip back over
    matchApp.noMatch = function () {
        setTimeout(() => {
            $(matchApp.firstCard).toggleClass('flip');
            $(matchApp.secondCard).toggleClass('flip');
        }, 1000);
    };

    matchApp.shuffle = function () {
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
    matchApp.shuffle();


    matchApp.checkWin = function() {
        if (matchApp.matchedCardsCounter === 8) {
            swal({
                title: 'You won!!!',
                text: `You matched the pairs in ${matchApp.clicks} clicks!`,
                icon: 'success',
                button: 'RESET',
                closeOnClickOutside: false,
            }).then(() => {
                window.location.reload();
            })
        }
    }

    matchApp.reset.on('click', function () {
        window.location.reload();
    })   
}


$(document).ready(function() {
    matchApp.init();
});  //end doc ready


    

    
 
    





