

$( document ).ready(function(){
  
 // Players Random number to reach displayed at start of game //

        // number is between 19-120 //

       

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

// ??? HELP  if wins and loss not working, will it have to be in each on click function ???? //

//bottles given random number between 1 and 12 //


// ??? HELP how to make them not get chosen twice ??? //

// 5 beers displayed for buttons //
// onclick function for bottle of beers//

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
  

// add loss //
var loss = function(){
    if (playerScore > winningNumber){  
    lossCount++;
    alert('Sorry you lost, try again so you can celebrate with a nice beer!')
    $(".lossCount").text("Your Losses: " + lossCount);
    replay();
    } 
}




// ??? HELP  if wins and loss not working, will it have to be in each on click function ???? //
// when player reaches score equal to number displayed they win //
  




   
//new random number is generated after win or loss //
// new random values for beer when game restart //


// game restarts once player wins or looses //
// add wins //
         
})