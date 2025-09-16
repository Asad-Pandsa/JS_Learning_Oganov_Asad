var string = "Асаламуалейкум";     
var number = 4284;                
var boolean = true;              
var undefined;                    
var Null = null;             


var student = {
    name: "Асад",
    surname: "Оганов",
    age: 19,
    isEnrolled: true,
    grades: [5, 4, 5, 3, 4],
    passport: {
        series: "ID",
        number: "4984984",
        issuedBy: "КР Токмок",
        issueDate: "25.08.2025"
    }
};

console.log("_________________________________________");
console.log("String:", string);
console.log("Number:", number);
console.log("Boolean:", boolean);
console.log("Undefined:", undefined);
console.log("Null:", Null);

console.log("_________________________________________");
console.log("Имя:", student.name);
console.log("Фамилия:", student.surname);
console.log("Возраст:", student.age);
console.log("Зачислен:", student.isEnrolled);
console.log("Оценки:", student.grades);
console.log("_________________________________________");

console.log("Паспорт");
console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ");
console.log("Серия :", student.passport.series);
console.log("Номер :", student.passport.number);
console.log("Кем выдан :", student.passport.issuedBy);
console.log("Дата выдачи :", student.passport.issueDate);
console.log("_________________________________________");