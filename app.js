const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');



rockbtn.addEventListener('click', function(){
    playerChoice = 'rock'
})

paperbtn.addEventListener('click', function(){
    playerChoice = 'paper'
})

scissorsbtn.addEventListener('click', function(){
    playerChoice = 'scissors'
})