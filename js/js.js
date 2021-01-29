let balckjackgame = {
    'YOU' :{'Scorespan':'#your-blackjack-result','div' :'#your-box','score':0},
    'DEALER' :{'Scorespan':'#dealer-blackjack-result','div' :'#dealer-box','score':0},
};


const You = balckjackgame['YOU'];
const Dealer = balckjackgame.DEALER;
  const hitsound= new Audio ('sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);
  

function blackjackhit()
{
    Showcards(You);
  //  Showcards(Dealer);
}


let score =0
function Showcards(activeplayer)
{   
   let arraycardrs = ['A.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','J.png',
   'K.png','Q.png'];
   let randomcards=arraycardrs[Math.floor(Math.random()*arraycardrs.length)];
   let cardImage= document.createElement('img');
   
    cardImage.src="images/"+randomcards;
    document.querySelector(activeplayer['div']).appendChild(cardImage);

    let scorecard;
    
   
    if(randomcards==='J.png' || randomcards==='K.png' || randomcards==='Q.png' || randomcards==='A.png')
    {
         scorecard = 10;
    
    }
    else
         scorecard = randomcards.charAt(0);
         score = score + parseInt(scorecard);

         document.querySelector(activeplayer['Scorespan']).textContent=score;
         hitsound.play();

}

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);

function blackjackdeal()
{
    
    let yourimg=document.querySelector(You['div']).querySelectorAll('img');
    let dealerimg=document.querySelector(Dealer['div']).querySelectorAll('img');
    
    for (let index = 0; index < yourimg.length; index++) {
        yourimg[index].remove();
        
    }

    for (let index = 0; index < dealerimg.length; index++) {
        dealerimg[index].remove();
        
    }

   document.querySelector(You['Scorespan']).textContent=You['score'];
   document.querySelector(Dealer['Scorespan']).textContent=Dealer['score'];
   score=0;
}










