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



// //TAB SLIDER

// const tabsContentCards = document.querySelectorAll('.tab_content_block');
// const tabsItems = document.querySelectorAll('.tab_content_item');
// const tabsItemsParents =  document.querySelector('.tab_content_items');


// const hightTabsContentCards = () =>{
//     tabsContentCards.forEach((tabsContentCard)=>{
//         tabsContentCard.style.display = 'none'
//     })
//     tabsItems.forEach((tabItem)=>{
//         tabItem.classList.remove('tab_content_item_active')
//     })
// }

// const showTabsContentCards = (indexElement = 0)=>{
//     tabsContentCards[indexElement].style.display = 'block';
//     tabsItems[indexElement].classList.add('tab_content_item_active')
// }

// hightTabsContentCards();
// showTabsContentCards();


// tabsItemsParents.onclick = (event) => {
//     if (event.target.classList.contains('tab_content_item')){
//         tabsItems.forEach((tabItem, tabItemIndex)=>{
//             if(event.target === tabItem){
//                 hightTabsContentCards()
//                 showTabsContentCards(tabItemIndex)
//             }
//         })
//     }
// }

// let curretIndex = 0; // Первая вкладка
// let intervalId; //Переменная для хранения интервала

// //Ф-ция для автоматического переключения

// const startAuthoSlider = ()=>{
//     intervalId = setInterval(()=>{
//         hightTabsContentCards();
//         showTabsContentCards(curretIndex);
//         curretIndex = (curretIndex +1) % tabsItems.length;
//     }, 2000); // 2сек
// }
// //Запуск автослайдера
// startAuthoSlider();

// //Остановка слайдера при клике на вкладку

// tabsItemsParents.onclick = (event) => {
//     clearInterval(intervalId);
//     if (event.target.classList.contains('tab_content_item')){
//         tabsItems.forEach((tabItem, tabItemIndex) =>{
//             if(event.target === tabItem){
//                 hightTabsContentCards();
//                 showTabsContentCards(tabItemIndex);
//                 curretIndex = tabItemIndex;
//                 startAuthoSlider();
//             }
//         })
//     }
// }


// TAB SLIDER

const tabsContentCards = document.querySelectorAll('.tab_content_block');
const tabsItems = document.querySelectorAll('.tab_content_item');
const tabsItemsParents = document.querySelector('.tab_content_items');

// Массив ссылок на изображения
const images = [
    "https://webdiz.com.ua/wp-content/uploads/2018/07/delegirovanie-sobitii-javascript.png",
    "https://zalts-man.com/ru/wp-content/uploads/sites/3/2020/08/javascript_class_list_api.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8Jz0KwQ2sxWZfoy7kO_bS1REh9DIewgWcg&s",
    "https://media.lpgenerator.ru/uploads/2016/03/14/r43ty54.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnkB9NtsROOvWNjkOff3j9E1hpdwSsL-EmQ&s"
];

// Подставляем изображения в HTML
tabsContentCards.forEach((tab, index) => {
    const img = tab.querySelector('img');
    img.src = images[index];
});

// Функции показа вкладок
const hideTabsContentCards = () => {
    tabsContentCards.forEach(card => card.style.display = 'none');
    tabsItems.forEach(item => item.classList.remove('tab_content_item_active'));
};

const showTabsContentCards = (index = 0) => {
    tabsContentCards[index].style.display = 'block';
    tabsItems[index].classList.add('tab_content_item_active');
};

// Инициализация
hideTabsContentCards();
showTabsContentCards();

let currentIndex = 0;
let intervalId;

// Автоматическое переключение
const startAutoSlider = () => {
    intervalId = setInterval(() => {
        hideTabsContentCards();
        showTabsContentCards(currentIndex);
        currentIndex = (currentIndex + 1) % tabsItems.length;
    }, 2000);
};

startAutoSlider();

// Остановка при клике
tabsItemsParents.onclick = (event) => {
    clearInterval(intervalId);
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, index) => {
            if (event.target === tabItem) {
                hideTabsContentCards();
                showTabsContentCards(index);
                currentIndex = index;
                startAutoSlider();
            }
        });
    }
};


