// node module
// constructor function
var Mouse = require('./mouse');  
var Cat = require('./cat');  

var mouse1 = new Mouse('red');
var mouse2 = new Mouse('white');

console.log(mouse1);
console.log(mouse2);

var tom = new Cat();
tom.eat(mouse1);
tom.eat(mouse2);
console.log(tom);



