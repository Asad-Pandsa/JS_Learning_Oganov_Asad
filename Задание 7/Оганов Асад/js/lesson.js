// Проверка номера 

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

const reqExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', ()=>{
    if (reqExp.test(phoneInput.value)){
        phoneSpan.innerHTML = "Этот номер существует"
        phoneSpan.style.color = 'green' ; 
    } 
    else{
        phoneSpan.innerHTML = "Этот номер не существует"
        phoneSpan.style.color = 'red' ; 
    }

})