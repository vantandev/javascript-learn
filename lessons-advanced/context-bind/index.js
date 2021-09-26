// bind: sẽ trả về 1 hàm, hàm đó hoạt động giống như hàm mà gọi nó (nó sẽ trỏ đúng cái this có trong cái hàm được gọi) 

// example 1
// var mouse = {
//     name: 'Mickey',
//     sayHi: function() {
//         console.log('Hi, my name is', this.name);
//     }
// };

// var cat = {
//     name:'Tom'
// };

// var say = mouse.sayHi.bind(cat);  // bind: được gọi bởi 1 {}
// say();


// example 2
function run(cb) {
    console.log('run...');
    cb();
}

var mouse = {
    name: 'Mickey', 
    sayHi: function() {
        console.log(this.name);
    }
};

run(mouse.sayHi.bind(mouse)); // bind: được gọi bởi 1 {}
