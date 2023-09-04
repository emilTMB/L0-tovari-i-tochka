// Находим элементы на странице
const checkbox = document.getElementById('checkbox-result');
const button = document.getElementById('submitBtn');

// Добавляем слушатель события изменения состояния чекбокса
checkbox.addEventListener('change', function() {
    // Проверяем, выбран ли чекбокс
    if (this.checked) {
        // Если чекбокс выбран, меняем текст на кнопке
        button.textContent = 'Оплатить 2 101 063';
    } else {
        // Если чекбокс не выбран, меняем текст на кнопке
        button.textContent = 'Заказать';
    }
});