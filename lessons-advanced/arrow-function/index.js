// example 1
// var arr = [1, 2, 3];
// arr.map(function(x) {
//     return x*x;
// });

// cách viết gọn hơn
// var arr = [1, 2, 3];
// arr.map(x => x*x);


// example 2
var a = {
    name: 'AAA', 
    run: function() {
        var run2 = () => {
            console.log(this.name);
        };
        run2();
    }
};
a.run();


// example 3
var a = {
    foo: 'bar',
    run: function() {
        setTimeout( () => {
            console.log(this.foo);
        }, 2000);
    }
};
a.run();