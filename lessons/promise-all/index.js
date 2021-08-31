// bài cũ
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

Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt'),  // resolve: giải quyết
    ])
    .then(function(values) {
        console.log(values);
    })
    .catch(function(err) {
        console.log(err);
    }); 