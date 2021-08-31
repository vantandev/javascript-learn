var classes = [
    {
        id: 0,
        name: '1A', 
        teacher: 0
    },

    {
        id: 1,
        name: '2A', 
        teacher: 1
    },

    {
        id: 2,
        name: '3A', 
        teacher: 2
    },

    {
        id: 3,
        name: '4A', 
        teacher: 3
    },

    {
        id: 4,
        name: '5A', 
        teacher: 4
    },
];

var teachers = [

    {
        id: 0,
        name: 'thao',
        age: 20
    },

    {
        id: 1,
        name: 'thu',
        age: 19
    },

    {
        id: 2,
        name: 'hien',
        age: 26
    },

    {
        id: 3,
        name: 'nhu',
        age: 25
    },

    {
        id: 4,
        name: 'tien',
        age: 40
    },
];

var students = [
    { id: 0, name: 'Tan', height: 180, class: 2 },
    { id: 1, name: 'tinh', height: 160, class: 2 },
    { id: 2, name: 'cuong', height: 160, class: 1 },
    { id: 3, name: 'sang', height: 170, class: 2 },
    { id: 4, name: 'quynh', height: 170, class: 3 },
];


// tìm số học sinh của 1 lớp bằng id
function getStudentsInClass(className) {
    var classObject = classes.find(function(x) {
        return x.name === className;
    });
    var studentsInClass = students.filter(function(student) {
        return student.class === classObject.id; //  class = id
    });

    return studentsInClass;
}

var studentsInClass =  getStudentsInClass('3A');
console.log(studentsInClass);














