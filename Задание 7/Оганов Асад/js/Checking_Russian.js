// Проверка Российски номер телефона 
const input = document.getElementById('russian_phone_input');
const button = document.getElementById('russian_phone_button');
const result = document.getElementById('russian_phone_result');

// +7 XXX XXX-XX-XX
const phoneRegExp = /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/;

button.addEventListener('click', () => {
    const value = input.value.trim();
    if (phoneRegExp.test(value)) {
        result.textContent = "Этот номер существует";
        result.style.color = "green";
    } else {
        result.textContent = "Этот номер не существует";
        result.style.color = "red";
    }
});

