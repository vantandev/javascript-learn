// Default Parameter
const congHaiSo = (x, y = 2) => x + y;

const tong = congHaiSo(4);
console.log(tong);

// Template Literals
const age = 20;
console.log(`I am ${age} years old`);

// Destructure
// student co the la 1 mang, la 1 object
const student = {
  name: 'Henry',
  age: 20,
};

const { name, age } = student;
console.log(`My name is ${name} - ${age} years old`);

// Spread Operator
const buaAn = {
  buaSang: 'xoi',
  buaTrua: 'trua',
  buaToi: 'toi',
};
const buaAn1 = { ...buaAn, buaChieu: 'chieu' };
console.log(buaAn1);

// Computed Property
//example 1
const computedPropertyName = 'buoi';

const buaAn2 = {
  buoiSang: 'coca',
  buoiTrua: 'cafe',
  [computedPropertyName + 'Toi']: 'pesi',
};
console.log(buaAn);

// example 2
const ten = 'Ten';
const nguoi = {
  quocTich: 'Viet Nam',
  [`hova${ten}`]: 'Tomy',
};
const nguoi2 = {
  ...nguoi,
  hovaTen: 'chery',
  tuoi: '21',
};
console.log(nguoi2);

// For...in và For...of
const buaAn3 = {
  buoiSang: 'coca',
  buoiTrua: 'cafe',
  buoiToi: 'toi',
};
const bangChuCai = ['a', 'b', 'c'];

for (let moiBuaAn in buaAn3) console.log(buaAn3[moiBuaAn]);
for (let moiChuCai in bangChuCai) console.log(bangChuCai[moiChuCai]);

for (let moiBuaAn of buaAn3) console.log(moiBuaAn); // For...of ko dung cho object
for (let moiChuCai of bangChuCai) console.log(moiChuCai);
