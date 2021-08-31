// // stringify: chuyển object thành string
// var myDog = { name: 'milu', age: 1, dead: false };
// var myDogString = JSON.stringify(myDog);
// console.log(typeof myDog);
// console.log(typeof myDogString);



// parse: chuyển string thành object
var myCatString = '{ "name": "tommy", "age": 2, "dead": false }';
var myCat = JSON.parse(myCatString);
console.log(typeof myCatString);
console.log(typeof myCat);

// exercise 