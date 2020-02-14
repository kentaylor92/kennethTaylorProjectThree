
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
            if (matchApp.flipped === false) {
                matchApp.flipped = true;
                matchApp.firstCard = this;
        
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

    matchApp.checkForMatch = function() {
        if (matchApp.firstCard.dataset.icon === matchApp.secondCard.dataset.icon && matchApp.firstCard.id !== matchApp.secondCard.id) {
            matchApp.cardsMatch()
        } else {
            matchApp.noMatch();
        };
    };

    matchApp.cardsMatch = function () {
        $(matchApp.firstCard).off('click');
        $(matchApp.secondCard).off('click');
        matchApp.matchedCardsCounter++;
        matchApp.checkWin();
    };
  
    matchApp.noMatch = function () {
        setTimeout(() => {
            $(matchApp.firstCard).toggleClass('flip');
            $(matchApp.secondCard).toggleClass('flip');
        }, 1000);
    };

    matchApp.shuffle = function () {
        let parent = $('#shuffle');
        let divs = parent.children();
        let currentIndex = divs.length;
        let temporaryValue;
        let randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = divs[currentIndex];
            divs[currentIndex] = divs[randomIndex];
            divs[randomIndex] = temporaryValue;
        }
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
});  


    

    
 
    





