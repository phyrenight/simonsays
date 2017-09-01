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

  function startGame(){
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
      //console.log(gameState.randomSequence[gameState.userSequence], color);
    }
    else{
      gameState.userSequence += 1;
    }
    // include the all the items below in the above else
    if(gameState.userSequence == gameState.randomSequence.length){
      if(gameState.stage == 20){
        var answer = prompt("You have won would you like to pplay again?(yes or no)");
        if(answer == 'yes'){
          startGame();
        }
        //set else to turn game off
      }
      else{
        gameState.userSequence = 0;
        gameState.stage += 1;
        gameState.randomSequence.push(randomColor(0,4));
        activate_sequence();
      }
    }
  }

var activate_sequence = function(light){  //move this into lightUpButton 
    //callback(4000, divColor)
    var div;
    var color;
    var timer = function(){
      var counter = 0;
      setTimeout(function(){
        console.log(color)
        div.style.backgroundColor = color;
        //callback(4000)
      }, 3000);
    }
  console.log(gameState.randomSequence)
  console.log(gameState.stage)
  if(gameState.randomSequence.length > 3){
    for(var i in gameState.randomSequence){
      if(gameState.randomSequence[i] == 'green'){
        //green

        div = document.getElementById(gameState.randomSequence[i]);
        div.style.backgroundColor = '#00FF00';
        color = '#00BB00';
       // lightUpButton(gameState.randomSequence[i], '#00FF00', '#00BB00', sleep);
      }
      else if(gameState.randomSequence[i] == 'red'){
        // red
        div = document.getElementById(gameState.randomSequence[i]);
        div.style.backgroundColor = '#FF0000';
        color = '#BB0000';
        //lightUpButton(gameState.randomSequence[i], '#FF0000', '#BB0000', sleep);
      }
      else if(gameState.randomSequence[i] == 'yellow'){
        // yellow
        div = document.getElementById(gameState.randomSequence[i]);
        div.style.backgroundColor = '#FFFF00';
        color = '#BBBB00';
        //lightUpButton(gameState.randomSequence[i], '#FFFF00', '#BBBB00', sleep);
      }
      else if(gameState.randomSequence[i] == 'blue'){
        // blue
        div = document.getElementById(gameState.randomSequence[i]);
        div.style.backgroundColor = '#0000FF';
        color = '#0000BB';
        //lightUpButton(gameState.randomSequence[i], '#0000FF', '#0000BB', sleep);
      }
      else{
      	console.log("Error: Invalid number in activate_sequence");
      }
      timer();
    }
    //timer();
  }
}
  //else{
  //	startGame();
 // }
// timer()
//}

var lightUpButton = function(divColor, newColor, color, callback){
  /*
    args: color - id of the divs
          newColor - this will be a color that  will simulate the button lighting up
    lights up buttons according to the sequence provided    
  */
  if(gameState.onOff){
    //callback(4000, divColor)
    var div = document.getElementById(divColor);
    div.style.backgroundColor = newColor;
    var timer = function(){
      var counter = 0;
      setTimeout(function(){
        console.log(color)

        div.style.backgroundColor = color;
        //callback(4000)
      }, 3000);
    }
  }
  timer();
};


var sleep = function(milliseconds){
 // var div = document.getElementById(divColor);
  var start = new Date().getTime();
  for(var i = 0; i < 4e7; i++){
    if((new Date().getTime() - start) > milliseconds){
      console.log("hi")
      //div.style.backgroundColor = newColor;
      break;
    }
  }
}
})();
