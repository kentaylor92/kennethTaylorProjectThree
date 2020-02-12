
$(document).ready(function() {

    const cards = $('.memoryCard');
    let flipped = false;
    let firstCard;
    let secondCard;
    let clicks = 0;

   

    
    // Toggle "flip" class
    function flipCard() {
        
        if(this === firstCard) return;
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
            $('.score').html(`clicks: ${clicks}`);
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
    };

    // if not a match, flip back over
    function noMatch() {
        setTimeout(() => {
            $(firstCard).toggleClass('flip');
            $(secondCard).toggleClass('flip');          
        }, 1000);
    };

    // function checkForWin() {
        
    // };
    // checkForWin();

    // function checkWin() {
    //     if ($(cards).flipped === true) {
    //         alert('You win!!!')
    //     };
    // }
   
    // checkWin();
    

    
    // function found via https://jsfiddle.net/C6LPY/2/
    function shuffle() {
        let parent = $('#shuffle');
        let divs = parent.children();
        for (i = 0; i < divs.length; i++) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length - 1), 1)[0]);
        }
    };
    shuffle();
      

});  //end doc ready




