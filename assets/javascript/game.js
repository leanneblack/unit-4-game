$( document ).ready(function(){

let winningNumber = Math.floor(Math.random()* 101 +19)
        console.log (winningNumber);
        $(".winningNumber").append(winningNumber);
    let budScore = Math.floor(Math.random()* 1 + 0);
    let deschutesScore = Math.floor(Math.random()* 12 + 1);
    let fullSailScore = Math.floor(Math.random()* 12 + 1);
    let widmerScore = Math.floor(Math.random()* 12 + 1);
    let playerScore= 0;
    let winCount = 0;
    let lossCount= 0;
    
    var replay = function(){
        
         winningNumber = Math.floor(Math.random()* 101 +19);
         console.log(winningNumber);
         budScore = Math.floor(Math.random()* 1 + 1);
         deschutesScore = Math.floor(Math.random()* 12 + 1);
         fullSailScore = Math.floor(Math.random()* 12 + 1);
         widmerScore = Math.floor(Math.random()* 12 + 1);
         playerScore= 0;
        $(".winningNumber").text("Number to Score: " + winningNumber);
        $(".totalScore").text("Your Score: " + playerScore);
        $("#score1").text('');
        $("#score2").text(''); 
        $("#score3").text('');
        $("#score4").text(''); 

    }  

$("#bud").on("click", function(){
    playerScore +=  budScore;
    $("#score1").text(budScore);
    $(".totalScore").text("Your Total Score: " + playerScore);
    if (playerScore == winningNumber){
        win();
    }
    else if (playerScore > winningNumber){
        loss();
    }
})

$("#deschutes").on("click", function(){
    playerScore += deschutesScore;
    $("#score2").text(deschutesScore); 
    $(".totalScore").text("Your Total Score: " + playerScore);
    if (playerScore == winningNumber){
        win();
    }
    else if (playerScore > winningNumber){
        loss();
    }
})

$("#fullSail").on("click", function(){
    playerScore += fullSailScore;
    $("#score3").text(fullSailScore);
    $(".totalScore").text("Your Total Score: " + playerScore);
    if (playerScore == winningNumber){
        win();
    }
    else if (playerScore > winningNumber){
        loss();
    }
})

$("#widmer").on("click", function(){
    playerScore += widmerScore;
    $("#score4").text(widmerScore); 
    $(".totalScore").text("Your Total Score: " + playerScore);
    if (playerScore == winningNumber){
        win();
    }
    else if (playerScore > winningNumber){
        loss();
    }
})
var win = function(){
    winCount++;
    alert('Time to celebrate your win, drink up!!')
    if (playerScore === winningNumber){
        $(".winCount").text("Your Wins: " + winCount);
       replay();
    
    }  
}
var loss = function(){
    if (playerScore > winningNumber){  
    lossCount++;
    alert('Sorry you lost, try again so you can celebrate with a nice beer!')
    $(".lossCount").text("Your Losses: " + lossCount);
    replay();
    } 
}
         
})