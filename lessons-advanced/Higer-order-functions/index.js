// có thể nhận 1 function () làm tham số hoặc có thể trả về 1 function () 

function waitAndRun(ms, func) {
    setTimeout(func, ms);
}

function run() {
    console.log('Run');
}

waitAndRun(2000, run);