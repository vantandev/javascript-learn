// arrow function
function getStudent() {

    return { name: 'Easy' };
}

const getStudent1 = () => ({ name: 'Easy'});

console.log(getStudent());


// contructor function
function Student (id, name) {

    this.id = id;
    this.name = name;
    this.sayHello = function () { console.log('My name is', this.name);

    };

    }
    const alice = new Student (1, 'Alice'); alice.sayHello(); // My name is Alice
    const bob = new Student (2, 'Bob'); bob.sayHello(); // My name is Bob


// rest
function sum(name, ...numberList) { 
    console.log(name);
    return numberlist.reduce((total, number) => total + number, 0);
    console.log(sum( 'Easy', 1)); // 1
    console.log(sum('Easy', 1, 2)); // 3
    console.log(sum( 'Easy', 1, 2, 3));


// spread
function sum1(...numberList) {
    return numberList.reduce((total, number) => total + number, 0);
    
    }
    
    const numberList = [2, 4, 6]; 
    console.log(sum1(...numberList)); // spread / expand

// Higher order function
    sum (1) (2); // 3
    function sum(x) {
    return function (y) { return x + y;
    };
    }
    const key = 'Power';
// property name
const student1 = {

id: 1,

name: 'Easy Frontend',

'herotype': 'iron man', // key with spaces

[key]: 50,

[`get${key}`]: function() { return 100;}

}

student. id; // 1
student.Power; // 50

student.herotype; // syntax error
student ['hero type']; // 'iron man'

student. Power; // 50 student [key]; // 50
student.getPower(); // 100


// method properties

const student2 = {
    sayHello: function() { 
        console.log('Easy Frontend') 
    }, // ES5
    getPower() { 
        return 100;
    }, // ES6 }

}

// destructuring 
const student3 = {
    id: 1, 
    name: 'Easy Frontend',
}

const {id: studentId, name, age = 18 } = student3; 
console.log(studentId); // 1 
console.log(age); // 18
console.log(id); // ReferenceError: id is not defined


// bind && call && apply
'use strict';
function sayHello() { console.log(this.name);

}
const student4 = {
name: 'Easy Frontend',
};

function sayHello(a, b) { console.log(this.name, a + b);
}

const studentSayHello = sayHello.bind(student); 
studentSayHello(5, 10);
sayHello.call(student, 10, 20); 
sayHello.apply(student, [1, 2]);


// includes
[1, 2].includes (1); // true
[1, 2].includes (2); // true [1, 2].includes (3); // false


// Exponentiation operator
Math.pow(2, 3); // 8
console.log(2 ** 3); // 8


// string padding
'1234'.padStart (8);
'1234'.padStart (8, '*'); // ****1234'
'123456'.padStart (8, '*'); // '**123456'

'1234'. padEnd (8, '*'); // '1234*******'
'12'. padEnd (8, '*'); // '12*******'


// Object.values

Object.values({

    id: 1, name: 'Easy Frontend', age: 18,
    
    });
    
    // [1, 'Easy Frontend', '18']

// flat

[1, 2, [3, 4]].flat(0); // [1, 2, [3, 4]]
[1, 2, [3, 4]].flat(1); // [1, 2, 3, 4]

[1, 2, [[3], 4]].flat(1); // [1, 2, [3], 4]
[1, 2, [[3], 4]].flat(2); // [1, 2, 3, 4]

[1, 2,, 4, 5].flat(); // [1, 2, 4, 5] as empty slot is removed



// flatMap
[5, 20] 
.map(x=> [x, x * 2]) // [[5, 10], [20, 40] ] 
.flat(1); // [5, 10, 20, 40]


//  sort 
[
    { id: 1, name: 'Alice' }, { id: 3, name: 'John' },
    
    { id: 2, name: 'Bob' },
    
    { id: 4, name: 'Alice' }, 
].sort((s1, s2) => {
    
    if (s1.name> s2.name) return 1; 
    if (s1.name <s2.name) return -1;
    return 0;
    });
    
    // output 
    // [
    
    // { id: 1, name: 'Alice' },
    
    // { id: 4, name: 'Alice' }, 
    // { id: 2, name: 'Bob' };
    
    // { id: 3, name: 'John' },






// Nullish Coalescing '??'
null ?? 'UTC2 CNTT'; // 'UTC2 CNTT'

// Optional Chaining '?.'
// it returns undefined if some ref in the chanin is nullish (null or undefined)
obj.prop; // if it undefined -> return TYPE ERROR
obj?.prop; // return undefined

//
//"Or Or Equals"
// x ||= y;
// x || (x = y);

// "And And Equals"
// x &&= y;
// x && (x = y);

// "QQ Equals"
// x ??= y;
// x ?? (x = y);
