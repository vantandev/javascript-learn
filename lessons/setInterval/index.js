
// var i = 0;
// setInterval(function() {
//     ++i;
//     console.log(i);
// }, 1000);


// cách làm cho nó dừng ở 1 con số tùy ý
var i = 0;
var intervalId = setInterval(function() {
    ++i;
    console.log(i);
    if(i === 5) {
        clearInterval(intervalId);
    }
}, 1000);