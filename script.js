
$(document).ready(function() {    
    const cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

    for (i = 0; i < cards.length; i++) {
        const shuffleCards = Math.floor(Math.random() * cards.length);
        console.log(shuffleCards);  
    }

});

