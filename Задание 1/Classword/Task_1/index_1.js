var enteruserName = prompt("Введите ваше имя:");
var enteruserLastName = prompt("Введите вашу фамилию:");
var enteruserAge = prompt("Введите ваш возраст:");

var telegram = "Привет, меня зовут " + enteruserName + " " + enteruserLastName + ". Мне " + enteruserAge + " лет.";

console.log(telegram);

document.writeln(telegram);

alert(telegram);