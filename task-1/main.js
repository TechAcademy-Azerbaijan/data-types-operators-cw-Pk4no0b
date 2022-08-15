const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
var input = result.input;
var numbers = input.split(' ');
var x =parseInt(numbers[0]);
var n =parseInt(numbers[1]);
var m =parseInt(numbers[2]);
var d =(x**n)%m

console.log(d)
  
});
