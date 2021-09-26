// định nghĩa hoisting chỉ có ở biến var,  ko có ở 2 biến còn lại 

// hoisting 
//  ----------------------------------
// khi đó sẽ tự động tìm tất cả những cái biến được khai báo là var -> cho var lên cùng

// var x;
console.log(x);

var x = 5;
//  ----------------------------------





var a = 1;
let b = 2;
const c = 3; // hằng số


var a = 2; // chỉ có biến var mới khai báo lại được mà thôi
// let b = 3;  lỗi ngoại lệ
// const c = 4;  lỗi biên dịch vì nó là 1 hằng số
console.log(a);
