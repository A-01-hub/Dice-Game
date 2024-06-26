'use strict'

// selecting the elements
let player0_element=document.querySelector('.player--0');
let player1_element=document.querySelector('.player--1');
 let score0_element=document.querySelector('#score--0');
 let score1_element=document.getElementById('score--1');
 let dice_element= document.querySelector('.dice');
 let dice_button=document.querySelector('.btn--roll');
 let current0_element=document.getElementById('current--0');
 let current1_element=document.getElementById('current--1');
 let holdButton=document.querySelector('.btn--hold');
 let new_game_button=document.querySelector('.btn--new');
// Starting conditions 
let scores,current_score,active_player,playing;
const init=function(){
     scores=[0,0];

     current_score=0;

     active_player=0;
     playing=true;


    document.querySelector('.score').textContent=0;
    score0_element.textContent=0;
    score1_element.textContent=0;
    current0_element.textContent=0;
    current1_element.textContent=0;
    

    player0_element.classList.remove('player--winner')
    player1_element.classList.remove('player--winner')
    dice_element.classList.add('hidden');
    player0_element.classList.add('player--active');
    player1_element.classList.remove('player--active')
    


}


const switch_profile=function(){
    document.getElementById(`current--${active_player}`).textContent=0;
    current_score=0;
    active_player=active_player===0?1:0;

    player0_element.classList.toggle('player--active')   
    player1_element.classList.toggle('player--active');



}


init();




// function to roll the dice
dice_button.addEventListener('click',function(){
    if(playing){
    // display the dice 
    dice_element.classList.remove('hidden');
    // generating the random function 
    let random_dice=Math.trunc(Math.random()*6)+1;
    dice_element.src=`dice-${random_dice}.png`;

    // check the rolled
    if(random_dice!=1){
        current_score+=random_dice;
        // selecting the element dynamically
        document.getElementById(`current--${active_player}`).textContent=current_score
        //current0_element.textContent=current_score;// change later

     
    }
   else{
    switch_profile();
  
    }
    }});
 


holdButton.addEventListener('click',function(){
    if(playing){
    scores[active_player]+=current_score;
    document.getElementById(`score--${active_player}`).textContent=scores[active_player];
    if(scores[active_player]>=20){
        playing=false;
        document.querySelector(`.player--${active_player}`).classList.add('player--winner');
        document.querySelector(`.player--${active_player}`).classList.remove('player--active');
       dice_element.classList.add('hidden');
    }
    else{
    switch_profile();
    }

}});


new_game_button.addEventListener('click',init);



