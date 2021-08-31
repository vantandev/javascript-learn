var fs = require('fs');

// đọc file
var text = fs.readFileSync('./song.txt', { encoding: 'utf8'} ); // encoding: tiếng việt
console.log(text);


// ghi file ra 1 file khác (tạo 1 file mới bằng cách ghi file)
fs.writeFileSync('./song-2', 'I am is Tan');