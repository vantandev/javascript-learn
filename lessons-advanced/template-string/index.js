function greeting1(name) { // cách thông thường
    return 'Hi, ' + name + '!';
}

function greeting2(name) { // rút gọn lại
    return `Hi, 
    

    ${name} ${1 + 2}`;
}

var result = greeting2('Minh');
console.log(result);