// example 1
// function greeting(name = 'friend') { 
//     return  `Hi, ${name}`;
// }

// greeting('minh');  // 1 tham số
// greeting();  // không tham số

// example 2
function greeting(name = 'friend', language = 'ja') {
    if (language === 'en') {
        return `Hi, ${name}`;
    }
    if (language === 'ja') {
        return `tokyo, ${name}`;
    }
    return 'hello';
}
greeting();  // không tham số
greeting('minh'); // 1 tham số
greeting('minh', 'ja');  // 2 tham số