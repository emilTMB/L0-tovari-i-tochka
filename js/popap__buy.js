let popup__bg__buy = document.querySelector('.popup__bg__buy'); // Фон попап окна
let popup__buy = document.querySelector('.popup__buy'); // Само окно
let openPopupButtons__buy = document.querySelectorAll('.change__a__buy'); // Кнопки для показа окна
let closePopupButton__buy = document.querySelector('.close-popup__buy'); // Кнопка для скрытия окна

openPopupButtons__buy.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popup__bg__buy.classList.add('active'); // Добавляем класс 'active' для фона
        popup__buy.classList.add('active'); // И для самого окна
    })
});

closePopupButton__buy.addEventListener('click',() => { // Вешаем обработчик на крестик
    popup__bg__buy.classList.remove('active'); // Убираем активный класс с фона
    popup__buy.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popup__bg__buy) { // Если цель клика - фот, то:
        popup__bg__buy.classList.remove('active'); // Убираем активный класс с фона
        popup__buy.classList.remove('active'); // И с окна
    }
});