// example 1: toss a coin (tung 1 đồng xu)
function tossCoin() {
    var value = Math.random();
    if(value < 0.5) {
        console.log('mặt sấp');
    } else {
        console.log('mặt ngửa');
    }
}
tossCoin(); // có khi sấp có khi ngửa

// example 2: Máy tính tiền

function countBills(bills) {
    var total = 0;
    
    for(var bill of bills) {    // bill: đại diện cho từng phần tử trong mảng bills
        if(!bill.fake) {
            total += bill.value;
        } else {
            console.log('fake bill', bill);
            break;    // thoát khỏi chương trình
        }
    }
    return total;
}

var bills = [
    { value: 10000 },
    { value: 20000 },
    { value: 20000 , fake: true},
    { value: 500000 }
];

var total = countBills(bills);
console.log(total);










