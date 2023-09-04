// Получаем все чекбоксы с классом "checkbox-round-buy"
const checkboxes__buy = document.querySelectorAll('.checkbox-round-buy');
checkboxes__buy[0].checked = true;
// Добавляем слушатель события изменения (change) к каждому чекбоксу
checkboxes__buy.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (this.checked) {
            // Если чекбокс выбран, то показываем связанный с ним элемент
            targetElement.style.display = 'flex';

            // Отключаем остальные чекбоксы и скрываем связанные с ними элементы
            checkboxes__buy.forEach((otherCheckbox) => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                    const otherTargetId = otherCheckbox.getAttribute('data-target');
                    const otherTargetElement = document.getElementById(otherTargetId);
                    otherTargetElement.style.display = 'none';
                }
            });
        } else {
            // Если чекбокс отключен, то скрываем связанный с ним элемент
            targetElement.style.display = 'none';
        }
    });
});
