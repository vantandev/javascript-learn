function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0); 
}

function average() {
    // sum
    const x = sum.apply(null, arguments);  // lấy ra 1 mảng 
    // sum/arguments.length
    return x/arguments.length;  
}

average(1, 2, 4, 7);

// average giống với call nhưng khác ở chỗ khi truyền vô (this, [])
