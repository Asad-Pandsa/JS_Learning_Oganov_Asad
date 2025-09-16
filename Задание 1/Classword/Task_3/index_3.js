alert('"Добро пожаловать"');
document.body.style.backgroundColor = "#333";
var userName = prompt("Введите ваше имя:");

var h1 = document.createElement("h1");
h1.textContent = "Привет, " + userName + "👋";
h1.style.color = "#fff";

var h2 = document.createElement("h2");
h2.textContent = "Как ваши дела?";
h2.style.color = "#fff";

document.body.appendChild(h1);
document.body.appendChild(h2);