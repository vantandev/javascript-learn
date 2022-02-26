const airline = 'TAP Air Portugal';
const plane1 = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf()));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat ');
  else console.log('You got lucky ');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// viet hoa
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger = 'j0nAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// gmail
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas. Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmed Email = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97€';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));

console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${''.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

// ************************************************************************* //

[1, 2, 3]
  .push(4) // [1,2,3,4]

  [(1, 2, 3)].pop() // [1,2]

  [(1, 2, 3)].shift() // [2,3]

  [(1, 2, 3)].unshift(e) // [e,1,2,3]

  [('a', 'b')].concat('c') // ['a', 'b',

  [('a', 'b', 'c')].join('-') // a-b-c

  [('a', 'b', 'c')].slice(1) // ['a', 'b]

  [('a', 'b', 'c')].indexOf('b') // 1

  [('a', 'b', 'c')].includes('c') // true

  [(3, 5, 6, 8)].find((n) => n % 2 === 8) // 6

  [(2, 4, 3, 5)].findIndex((n) => n % 2 !== 0) // 2

  [(3, 4, 8, 6)].map((n) => n * 2) // [6,8,16,12]

  [(1, 4, 7, 8)].filter((n) => n % 2 === 0) // [4,8]

  [(2, 4, 3, 7)].reduce((acc, cur) => acc + cur) // 16

  [(2, 3, 4, 5)].every((x) => x < 6) // true

  [(3, 5, 6, 8)].some((n) => n > 6) // true

  [(1, 2, 3, 4)].reverse() // [4,3,2,1]

  [(3, 5, 7, 8)].at(-2); // 7
