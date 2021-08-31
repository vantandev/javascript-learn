var readlineSync = require('readline-sync');

// example 1
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');


// example 2
// var languages = [];
// var language = readlineSync.question('what is your mother languages ?');
// languages.push(language);
// console.log(languages);


//example 3
var pet = {};

var name = readlineSync.question('Your pet name?: ');
var gender = readlineSync.question('pet gender (male/female)?: ');
var weight = readlineSync.question('weight?: ');

// thuộc tính() = biến
pet.name = name;
pet.gender = gender;
// pet.weight = weight;   // kiểu dữ liệu lúc in ra console là string
pet.weight = parseInt(weight); // kiểu số (int)

console.log(pet);

