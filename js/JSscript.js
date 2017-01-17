(function(){
  var gameState = {
    gameEnd : 'false',
    randomSequence : [],
    userSequence : 0,
    stage : 0,
    onOff : false
  };

  var green = document.getElementById('green');
  var red = document.getElementById('red');
  var yellow = document.getElementById('yellow');
  var blue = document.getElementById('blue');
  var onOff = document.getElementById('onOff');

  blue.addEventListener('mousedown', lightUpColor, false);
  blue.addEventListener('mouseup', backToNormal, false);
  
  red.addEventListener('mousedown', lightUpColor, false);
  red.addEventListener('mouseup', backToNormal, false);
  
  yellow.addEventListener('mousedown', lightUpColor, false);
  yellow.addEventListener('mouseup', backToNormal, false);
  
  green.addEventListener('mousedown', lightUpColor, false);
  green.addEventListener('mouseup', backToNormal, false);
  
  onOff.addEventListener('click', startGame, false);

  function backToNormal(){
    /*
      changes the button color back to normal
    */
    if(this.id == 'green'){
      green.style.backgroundColor = '#00BB00';
    }
    else if(this.id == 'red'){
      red.style.backgroundColor = '#BB0000';
    }
    else if(this.id == 'yellow'){
      yellow.style.backgroundColor = '#BBBB00';
    }
    else if(this.id == 'blue'){
      blue.style.backgroundColor = '#0000BB';
    }
  }

  function lightUpColor(){
    /*
      Used to light up the different buttons
    */

    if(this.id == 'green'){
      green.style.backgroundColor = "#00FF00";
    }
    else if(this.id == 'red'){
      red.style.backgroundColor = "#FF0000";
    }
    else if(this.id == 'yellow'){
      yellow.style.backgroundColor = "#FFFF00";
    }
    else if(this.id == 'blue'){
      blue.style.backgroundColor = "#0000FF";

    }
    checkUserInput(this.id);
  }

  function startGame(){
    var i = 0;
    if(!gameState.onOff){
      while(i < 4){
        gameState.randomSequence.push(randomColor(0,4));
        i++;
        gameState.onOff = true;
      }
    }
    else{
      gameState.onOff = false;
    }
    activate_sequence();
    //console.log(gameState.randomSequence)
  }

  var randomColor = function(min, max){
    /*
      args: min- min boundary for random generator
            max- max boundary for random generator
      generates a random number then assigns a color based on the that number.
      returns: returns a string
    */
    var number = Math.floor(Math.random() * (max - min)) + 
      min;
      if(number === 0){
        return 'green';
      }
      else if(number === 1){
        return 'red';
      }
      else if(number === 2){
        return 'yellow';
      }
      else if(number === 3){
        return 'blue';
      }
  };

  function checkUserInput(color){
    /*
      args: color - the color of the button the user clicked on.
      validates user choices
    */
    if( color != gameState.randomSequence[gameState.userSequence]){
      console.log(gameState.randomSequence[gameState.userSequence], color);
    }
    else{
      gameState.userSequence += 1;
    }
    if(gameState.userSequence == gameState.randomSequence.length){
      if(gameState.stage == 20){
        var answer = prompt("You have won would you like to pplay again?(yes or no)");
        if(answer == 'yes'){
          startGame();
        }
      }
      else{
        gameState.userSequence = 0;
        gameState.stage += 1;
        gameState.randomSequence.push(randomColor(0,4));
        console.log(gameState.randomSequence);
        activate_sequence();
      }
    }
  }

var activate_sequence = function(){  //move this into lightUpButton 
  if(gameState.randomSequence.length > 3){
    for(var i in gameState.randomSequence){
      if(gameState.randomSequence[i] == 'green'){
        //green
        lightUpButton(gameState.randomSequence[i], '#00FF00');
        // sleep();
      }
      else if(gameState.randomSequence[i] == 'red'){
        // red
        lightUpButton(gameState.randomSequence[i], '#FF0000');
      }
      else if(gameState.randomSequence[i] == 'yellow'){
        // yellow
        lightUpButton(gameState.randomSequence[i], '#FFFF00');
      }
      else if(gameState.randomSequence[i] == 'blue'){
        // blue
        lightUpButton(gameState.randomSequence[i], '#0000FF');
      }
      else{
      	console.log("Error: Invalid number in activate_sequence");
      }
    }
  }
  else{
  	startGame();
  }
};

var lightUpButton = function(color, newColor){
  /*
    args: color - id of the divs
          newColor - this will be a color that  will simulate the button lighting up
    lights up buttons according to the sequence provided    
  */
      var div = document.getElementById(color);
      div.style.backgroundColor = newColor;
      setTimeout(function(){
        div.style.backgroundColor = color
        setTimeout(function(){
          lightUpButton(color, newColor);
        }, 3000);
      }, 3000) 
    //sleep();
};
startGame();
})();
/*
var sleep = function(){
  /*
  /
  var start = new Date().getTime();
  var milliseconds = 3000;
  var longNumber = 1000000000000000000;
  for(var i = 0; i < longNumber; i++){
  	if((new Date().getTime() - start) > milliseconds){
  		console.log(new Date().getTime() - start);
  		break;
  	}
  }
};
*/