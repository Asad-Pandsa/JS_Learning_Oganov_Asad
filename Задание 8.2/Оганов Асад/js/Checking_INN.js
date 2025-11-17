// Проверка ИНН
const input = document.getElementById('gmail_input');
const button = document.getElementById('gmail_button');
const result = document.getElementById('gmail_result'); 

const innRegExp = /^\d{14}$/; // проверка 14 цифр

button.addEventListener('click', () => {
    const value = input.value.trim();
    if (innRegExp.test(value)) {
        result.textContent = "ИНН корректный";
        result.style.color = "green";
    } else {
        result.textContent = "Неверный ИНН";
        result.style.color = "red";
    }
});


