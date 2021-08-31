var coffeeMachine = {


    makeCoffee: function(onFinish) {
        console.log('making coffee...');
        onFinish();
    }
};

var beep = function() {
    console.log('tip tip');
}

coffeeMachine.makeCoffee(beep);  // gọi lại biến beep thay cho tham số onFinish     