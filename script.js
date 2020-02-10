
$(document).ready(function() {



// Target memoryCard Div
const cards = $('.memoryCard');
// const frontCard = $('.front');

// for statement to randomize card order:
// for (let i = 0; i < cards.length; i++) {
//     let shuffledCards = Math.floor(Math.random() * cards.length);
//     cards = shuffledCards;
// }




let flipped = false;
let firstCard;
let secondCard;


// Toggle "flip" class
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
                      
            checkForMatch();
        }
    })
    
}
flipCard();

function checkForMatch() {
    if (firstCard.dataset.icon === secondCard.dataset.icon) {
        $(firstCard).unbind('click');
        $(secondCard).unbind('click');

    } else {
        setTimeout(() => {
            $(firstCard).toggleClass('flip');
            $(secondCard).toggleClass('flip');
            console.log("Not a match");
        }, 1000);
    }
}

});  //end doc ready




