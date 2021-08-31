// promise

 
// // cách 1  : đưa ra 1 file
// var fs = require('promise-fs');
// function readFile(path) {
//     return fs.readFile(path, { encoding: 'utf8'});
// }
// readFile('song1.txt')
// .then(function(song1) {
//     console.log(song1);
// }) 
// .catch(function(err) {
//     console.log(err);
// });



// // cách 2  : đưa ra 1 file
// var fs = require('promise-fs');
// fs.readFile('./song1.txt', { encoding: 'utf8'})
//   .then(function(song1) {
//       console.log(song1);
//   }) 
//   .catch(function(err) {
//       console.log(err);
//   });



// // cách 3  : đưa ra 1 file
// var fs = require('promise-fs');
// function onDone(song) {
//     console.log(song);
// }  
// function onError(error) {
//     console.log(error);
// }  

// function readFile(path) {
//     return fs.readFile(path,{ encoding: 'utf8'});
// }

// readFile('./song1.txt')
//     .then(onDone)
//     .catch(onError);


// //  : đưa ra 2 file
// var fs = require('promise-fs');
// function onDone(song) {
//     console.log(song);
// }  
// function onError(error) {
//     console.log(error);
// }  

// function readFile(path) {
//     return fs.readFile(path,{ encoding: 'utf8'});
// }

// readFile('./song1.txt')
//     .then(onDone) // nó sẽ đợi
//     .then(function() {
//         return readFile('./song2.txt'); // nếu ko return thì nó sẽ undefined
//     })
//     .then(onDone)
//     .catch(onError);



// cách khai báo promise 
var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {   // resolve: giải quyết , reject: từ chối   
        fs.readFile(path, { encoding: 'utf8'}, function(err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// // đưa ra 1 file
// readFilePromise('song1.txt') // nếu tên file ko hợp lệ nó sẽ báo lỗi
//     .then(function(song1) {
//         console.log(song1);
//     })      
//     .catch(function(err) {
//         console.log(err);
//     }); 

// đưa ra nhiều file
readFilePromise('song1.txt')
    .then(function(song1) {
        console.log(song1);
        return readFilePromise('./song2.txt');
    })
    .then(function(song2) {
        console.log(song2);
        return readFilePromise('./song3.txt');
    })
    .then(function(song2) {
        console.log(song2);
    })














 