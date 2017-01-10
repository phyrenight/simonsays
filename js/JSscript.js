(function(){
  var green = document.getElementById('green');
  var red = document.getElementById('red');
  var yellow = document.getElementById('yellow');
  var blue = document.getElementById('blue');

  blue.addEventListener('mousedown', lightUpColor, false);
  blue.addEventListener('mouseup', backToNormal, false);
  red.addEventListener('mousedown', lightUpColor, false);
  red.addEventListener('mouseup', backToNormal, false);
  yellow.addEventListener('mousedown', lightUpColor, false);
  yellow.addEventListener('mouseup', backToNormal, false)
  green.addEventListener('mousedown', lightUpColor, false);
  green.addEventListener('mouseup', backToNormal, false);
  
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
  }
})();

var sequence = [];

var start_game = function(){
  var i = 0;
  sequence = [];
  while(i < 4){
    sequence.push(random(0, 4));
    i++;
  }
  console.log(sequence);
  activate_sequence(sequence);
} 

var random = function(min, max){
  number = Math.floor(Math.random() * (max - min)) + 
    min;
  return number;
}

var activate_sequence = function(sequence){
  var color = "";
  var newColor = "";
  if(sequence.length > 3){
    for(var i in sequence){
      if(sequence[i] === 0){
        //green
        color = "green";
        newcolor = "";
        lightUpButton(color, newColor);
        sleep()
      }
      else if(sequence[i] == 1){
        // red
        color = "red";
        newColor = "";
        lightUpButton(color, newColor);
      }
      else if(sequence[i] == 2){
        // yellow
        color = "yellow";
        newColor = "";
        lightUpButton(color, newColor);
      }
      else if(sequence[i] == 3){
        // blue
        color = "blue";
        newColor = "";
        lightUpButton(color, newColor);
      }
      else{
      	console.log("Error: Invalid number in activate_sequence")
      }
    }
  }
  else{
  	start_game()
  }
}

var lightUpButton = function(color, newColor){
  /*
    args: color - id of the divs
          newColor - this will be a color that  will simulate the button lighting up
    lights up buttons according to the sequence provided    
  */
  var div = document.getElementById(color);
  var divOriginalColor = div.style.backgroundColor;
  div.style.backgroundColor = "pink"
  //setTimeout(function(){div.style.backgroundColor = divOriginalColor}, 3000) 
  //sleep();
  //div.style.backgroundColor =  divOriginalColor;
}


var sleep = function(){
  /*
  */
  var start = new Date().getTime();
  var milliseconds = 3000;
  var longNumber = 1000000000000000000;
  for(var i = 0; i < longNumber; i++){
  	if((new Date().getTime() - start) > milliseconds){
  		console.log(new Date().getTime() - start)
  		break;
  	}
  }
}