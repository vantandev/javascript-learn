var fs = require('fs');
var co = require('co');

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

// // cách 1
// co(function*() {
//     var song1 = yield readFilePromise('./song1.txt');
//     var song2 = yield readFilePromise('./song2.txt');
//     var song3 = yield readFilePromise('./song3.txt');
//     console.log(song1, song2, song3);
// });



// // cách 2
// co(function*() {
//     var song1 = yield readFilePromise('./song1.txt');
//     var song2 = yield readFilePromise('./song2.txt');
//     var song3 = yield readFilePromise('./song3.txt');
//     return [song1, song2, song3];
// }).then(function(values) {
//     console.log(values);
// }).catch(function(err) { // kiểm tra lỗi
//     console.log(err);
// });



// cách 3
co(function*() {
    var values = yield [
        readFilePromise('./song1.txt'),
        readFilePromise('./song2.txt'),
        readFilePromise('./song3.txt')
    ]
    return values;
}).then(function(values) {
    console.log(values);
}).catch(function(err) { // kiểm tra lỗi
    console.log(err);
});















