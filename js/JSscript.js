var sequence = [];

var start_game = function(){
  var i = 0;
  while(i < 4){
    sequence.push(random(0, 4));
    i++;
  }
  console.log(sequence);
} 

var random = function(min, max){
  number = Math.floor(Math.random() * (max - min)) + 
    min;
  return number;
}
