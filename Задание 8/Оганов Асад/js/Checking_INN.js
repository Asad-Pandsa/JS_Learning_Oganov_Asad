// Проверка ИНН

const input = document.getElementById('#inn_input');
const button = document.getElementById('#inn_button');
const result = document.getElementById('#inn_result');

const innRegExp = /^d{14}$/; // проверка 14 цифр

button.addEventListener('click', ()=>{
    const value = input.value.trim();
    if (innRegExp.test(value)) {
        result.textContent = "ИНН корректный"
        result.style.color = "green";

    } else {
        result.textContent = "Неверный ИНН"
        result.style.color = "red";
    }});



