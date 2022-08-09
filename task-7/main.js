const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let a = parseInt(result.input) //3456
let b = parseInt(a%10) //6
let c = parseInt((a%100)/10) //5
let d = parseInt((a%1000)/100) //4
let k = parseInt(a/1000) //3
let cvb = ((b*1000)+(c*100)+(d*10)+(k*1))
console.log (cvb)

});
