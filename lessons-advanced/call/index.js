function greeting(){
    console.log(`Hi! ${this.name}. I am ${this.age}.`);
}

const cat = {
    name: 'Tom', 
    age: '10',
}

greeting.call(cat);  // gọi về hàm đó và trả về giá trị mà hàm trả về

// call(this, m1, m2)     ->   this sẽ đại diện biến this cho cái hàm này
//                             còn nó sẽ đọc từ đối số thứ 2 trở đi                         