// ternary operator (toán tử ngôi thứ ba)
function tossCoin() {
    var value = Math.random();
    var result = (value < 0.5) ? 'mặt sấp' : 'mặt ngửa';

    console.log(result)
}
tossCoin(); // có khi sấp có khi ngửa