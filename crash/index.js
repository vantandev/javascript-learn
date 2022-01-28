//string, nurber, boolean, demay, object

//faley, 0, '', undefined, null, false, NaN

//truthy: còn lại

// template Literal
// string method
//.Length - do dai string
//.toUppercase() in hoa
//.toLowercase () - in thương.
//.repeat(n) - Lap Lai n Lan
//.stice - cat string
//.substring - Lay chuỗi
//.substr - Lay chuỗi con
//.trim() - xóa khoảng trắng đầu cuối

// str.slice(a, b) => lấy chuỗi con từ vị trí index a->b, không lấy b
// str.slice(a) => lấy chuỗi con từ vị trí a-> cuối chuỗi

// .push them cuối mang
// .pop Lay pt cuối
//.shift- Lay pt dau
//.unshift- add dau
//.slice
//.splice
// .map
// .filter
// .reduce
// .indexOf
//.findIndex
// .find

// map
const numbers = [0, 1, 2, 3]; // [4,6,8,10, 12, 14]

// lặp qua từng phần tử của mảng

// - map trả về mảng mới có sl pt bằng mảng cũ
// - giá trị sau return sẽ đc push vào mảng mới
const result = numbers.map((val, index) => {
  return val > 2;
});

console.log(result);

// Lc1: val = 2, index = e

// Lc2....

//.filter
const numbers = [2, 0, 1, null]; // [6,7]

// - filter tra ve 1 mang moi, co the [] đi
// - nếu giá trị sau return là true, push val vào mảng m

const result = numbers.filter((val, index) => {
  return val;
});

// Lc1 - val = 2, false
// Lc2 val = 5, false
// Lc3 val = 6, true
console.log(result);

//.reduce
const numbers = [1, 2, 3, 4]; // tỉnh tong = 10

// TH1: không có giá trị initialValue, Val- ace = arr[1, Val = arr[1], giá trị sau return sẽ được tích trữ vào biến acc

// --> giá trị sau cùng của acc là giá trị trả về của reduce
const sum = numbers.reduce((acc, val) => {
  return acc + val;
});

// Lc1-acc = 1, val= 2, acc = 3
// Lc2-acc = 3, val = 3, acc = 6
// Lc3- acc = 6, val = 4, acc = 10
console.log(sum);

// reduce

const numbers = (1, 2, 3, 4); // tỉnh tong = 18

// TH2: có giá trị initialvalue, val- acc = initiesvalue, val = arr[0], giá trị sẽ được tích trữ vào biến vào acc

// --> giá trị sau cùng của acc là giá trị trả về của reduce
const sum = numbers.reduce((acc, val) => {
  return acc + val;
}, 5);

// Lel-acc =5, val = 1, acc = 6
// Le2-acc = 6, val = 2, acc = 8
// Le3-acc = 8, val = 3, acc = 11
// Le4-acc = = 11, val = 4, acc = 15

console.log(sun);

const users = [
  {
    id: 1,

    balance: 10,
  },
  {
    id: 2,

    balance: 20,
  },

  {
    id: 3,
    balance: 30,
  },
];

// tong balance của cac users = 60
const totalBalance = users.reduce((acc, val) => {
  return acc + val.balance;
}, 0);

console.log(totalBalance);

// .map
// .filter
// .reduce
// .indexOf - tim vi tri - index xuat hien dau t // .findIndex
// .find

const numbers = [1, 3, 4, 1, 100];
console.log(numbers.indexOf(1, 1));

const numbers = [1, 3, 4, 1, 100];
console.log(numbers.findIndex((val) => val === 3));

const users = [
  {
    id: 1,

    age: 18,
    name: 'Teo',
  },
  {
    id: 2,

    age: 24,
    name: 'Tum',
  },
  {
    id: 3,

    age: 13,
    name: 'Ti',
  },
];

// tim user age = 18

const idx = users.findIndex((val, idx) => val.age === 18);

if (idx == -1) {
  console.log(users[idx].name);
} else {
  console.log('khong co thang nao');
}

// tin user age = 18
const user = users.find((val, idx) => val.age === 18);
if (user) {
  console.log(user.name);
} else {
  console.log('noone');
}

// console.log(user);

const user = {
  name: 'Ti',
  age: 20,
};

console.log(user['name']);
console.log(user.name);

// kiểm tra key có trong object hay không
console.log('name' in user);

// lấy mảng các key
console.log(Object.keys(user));
console.log(Object.values(user));

setTimeout(() => {
  console.log('hello');
}, 2000);

setInterval(() => {
  console.log('hello');
}, 2000);

const user = {
  name: 'Ti',
  age: 20,
};
// chuyển từ string -> number,
// spread operator
const copyUser = { ...user };
console.log(`copyUser`, copyUser);

// destructuring
const user = {
  name: 'Ti',
  age: 20,
  myName: 'David',
};

const { myName, myAge } = user;
console.log(myName);
console.log(myAge);

// promise - pending, fullfill, resolve, reject
const test = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve('thanh cong');
    } else {
      reject('that bai');
    }
  });
};
test(15)
  .then(data > console.log(data))
  .catch((err) => console.log(err));
