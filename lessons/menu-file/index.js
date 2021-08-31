// trước tiên muốn hỏi người dùng phải require cái này trước
var readlineSync = require('readline-sync');
var fs = require('fs');


var students = [];
function loadData () {
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showMenu() {
    console.log('1. show all students');
    console.log('2. create a new student');
    console.log('3. save & edit');

    var option = readlineSync.question('> ');
    switch(option) {
        case '1':
            showStudent();
            showMenu();
            break;
        case '2':
            showCreateStudents();
            showMenu();
            break;
        case '3':
            saveAndExit();
            showMenu();
            break;
        default:
            console.log('wrong option')
            showMenu();
            break;            

    }
}

function showStudent() {
    for (var student of students) {
        console.log(student.name, student.age);
    }
}

function showCreateStudents() {
    // input
    var name = readlineSync.question('name: ');
    var age = readlineSync.question('age: ');
    var student = {
        // thuộc tính : biến
        name: name,
        age: parseInt(age)
    };
    students.push(student);

}

function saveAndExit() {
    // stringify: chuyển object thành string
    var contentString = JSON.stringify(students);
    fs.writeFileSync('./data.json', contentString, { encoding: 'utf8'});  // ecoding: tiếng việt
}

function main() {
    loadData(); 
    showMenu();
    console.log(students);
    
}
main();