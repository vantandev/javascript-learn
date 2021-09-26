// ...rest: bắt đầu từ dấu 3 chấm , sử dụng trong trường hợp không biết tham số đầu vào là bao nhiêu
// example 1
function sum(...nums) {
    return nums.reduce((a, b) => {
        return a + b;
    }, 0);
}

sum(1, 2, 3, 4, 5);

// example 2
function concat(separator, ...strings) {
    return strings.join(separator);
}

concat('.', 'a', 'b', 'c');