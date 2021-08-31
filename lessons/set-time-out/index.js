//  setTimeOut: thời gian để xuất ra ngoài
// cách 1
console.log('start');
setTimeout(function() { 
    console.log('finish'); 
}, 1500);   // đợi tới khi nào chạy xong 1500(ms) mili giây -> rồi nó mới thực hiện nội dung trong function này
console.log('done');


// // cách 2
// function done() {
//     console.log('finish');
// }
// console.log('start');
// setTimeout(done, 1500);
// console.log('done');