(function(){
  var gameState = {
    gameEnd : 'false',
    randomSequence : [],
    userSequence : 0,
    stage : 0,
    onOff : false,
    strict: false,
    strictCount: 0
  };

  var green = document.getElementById('green');
  var red = document.getElementById('red');
  var yellow = document.getElementById('yellow');
  var blue = document.getElementById('blue');
  var onOff = document.getElementById('onOff');
  var strict = document.getElementById('strict');

  blue.addEventListener('pointerdown', lightUpColor);
  blue.addEventListener('pointerup', backToNormal);
  
  red.addEventListener('pointerdown', lightUpColor);
  red.addEventListener('pointerup', backToNormal);
  
  yellow.addEventListener('pointerdown', lightUpColor);
  yellow.addEventListener('pointerup', backToNormal);
  
  green.addEventListener('pointerdown', lightUpColor);
  green.addEventListener('pointerup', backToNormal);
  
  onOff.addEventListener('click', startGame, false);
  strict.addEventListener('click', strictMode, false);

  function backToNormal(){
    /*
      changes the button color back to normal
    */
    if(gameState.onOff){
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
  }

  function lightUpColor(){
    /*
      Used to light up the different buttons
    */
    if(gameState.onOff){
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
  }

  function displayStage(){
    var div = document.getElementById('number');
    div.innerHTML = gameState.stage;
  }

  function strictMode(){
    if(gameState.strict){
      gameState.strict = true;
    }else{
      gameState.strict = false;
    }
  }

  function startGame(){
    // sets up random pattern and starts game
    displayStage();
    var i = 0;
    if(!gameState.onOff){
      while(i < 3){
        gameState.randomSequence.push(randomColor(0,4));
        i++;
        gameState.onOff = true;
      }
      activate_sequence();
    }
    else{
      gameState.onOff = false;
      gameState.stage = 0;
      gameState.randomSequence = [];
      gameState.userSequence = 0;
    }
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
      if(gameState.strict && gameState.strictCounter != 0){
        gameState.userSequence = 0;
        activate_sequence();
        console.log(gameState.userSequence)
        console.log(gameState.strict)
        gameState.strictCounter++;
        displayStage();
      }else{
        alert("Game Over!");
        gameState.randomSequence = [];
        gameState.stage = 0;
        gameState.userSequence = 0;
        //console.log(gameState.randomSequence[gameState.userSequence], color);
      }
    }
    else{
      gameState.userSequence += 1;
      displayStage();
    }
    // include the all the items below in the above else
    if(gameState.userSequence == gameState.randomSequence.length){
      if(gameState.stage == 20){
        var answer = prompt("You have won would you like to pplay again?(yes or no)");
        if(answer == 'yes'){
          displayStage();
          startGame();
        }
        //set else to turn game off
      }
      else{
        gameState.userSequence = 0;
        gameState.stage += 1;
        gameState.randomSequence.push(randomColor(0,4));
        activate_sequence();
        gameState.strictCounter = 0;
        displayStage();
      }
    }
  }

var activate_sequence = function(light){  //move this into lightUpButton 
  console.log(gameState.randomSequence)
  console.log(gameState.stage)
  if(gameState.randomSequence.length >= 3){
      for(var i in gameState.randomSequence){
        if(gameState.randomSequence[i] == 'green'){
          //green
          lightUpButton(gameState.randomSequence[i], '#00FF00', '#00BB00', sleep, i);
        }else if(gameState.randomSequence[i] == 'red'){
          // red
          lightUpButton(gameState.randomSequence[i], '#FF0000', '#BB0000', sleep, i);
        }else if(gameState.randomSequence[i] == 'yellow'){
          // yellow
          lightUpButton(gameState.randomSequence[i], '#FFFF00', '#BBBB00', sleep, i);
        }else if(gameState.randomSequence[i] == 'blue'){
          // blue
          lightUpButton(gameState.randomSequence[i], '#0000FF', '#0000BB', sleep, i);
        }else{
      	  console.log("Error: Invalid number in activate_sequence");
        }
      }
  }
}


var lightUpButton = function(divColor, newColor, color, callback, counter){
  /*
    args: color - id of the divs
          newColor - this will be a color that  will simulate the button lighting up
    lights up buttons according to the sequence provided    
  */
  if(gameState.onOff){
    var div = document.getElementById(divColor);
      setTimeout(function(){
        div.style.backgroundColor = newColor;
       callback(color, divColor);
       counter++;
      }, 100 + ((counter+1)*100));
    }
};


var sleep = function( color, divColor){
  var div = document.getElementById(divColor);
  setTimeout(function(){
    div.style.backgroundColor = color;
  }, 800)
}
})();
