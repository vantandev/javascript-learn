var fs = require('fs');

// // sync(đồng bộ): làm từng công việc, làm xong cái này rồi mới làm cái khác
// console.log('start');
// var song1 = fs.readFileSync('./song1.txt', { encoding: 'utf8'});
// console.log(song1);
// var song2 = fs.readFileSync('./song2.txt', { encoding: 'utf8'});
// console.log(song2);
// console.log('end');

// async(không đồng bộ): làm nhiều công việc cùng một lúc
console.log('start');
fs.readFile('./song1.txt', { encoding: 'utf8'}, function(err, song1) {
    console.log(song1);
});
console.log('end');





















