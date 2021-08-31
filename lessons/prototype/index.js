function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weigth = weight;
    
    /*  - không được chia sẽ ra bên ngoài
        - mỗi new 1 object mới nó sẽ chiếm 1 phần bộ nhớ để lưu cái function() này lại 
    */
    // this.sleep = function() {
    //     console.log('Sleeping...');
    // };

};

    /*  - public
        - tiết kiệm bộ nhớ, chỉ cần khai báo một lần 
    */
Mouse.prototype.sleep = function() {
    console.log('Sleeping...');
};

var mouse1 = new Mouse('white', 30);
var mouse2 = new Mouse('red', 28);
console.log(mouse1.sleep === mouse2.sleep); 



