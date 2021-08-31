var fs = require('fs');

fs.readFile('./song1.txt', { encoding: 'utf8'}, function(err, song1) {
    console.log(song1);
    fs.readFile('./song2.txt', { encoding: 'utf8'}, function(err, song2) {
        console.log(song2);
        fs.readFile('./song3.txt', { encoding: 'utf8'}, function(err, song3) {
            console.log(song3);
        });
    });
});