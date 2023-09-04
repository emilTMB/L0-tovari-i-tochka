    const selectAllCheckbox = document.querySelector(".custom-checkbox input[name='subscribe']");
    const checkboxes = document.querySelectorAll(".choose-checkbox input[name='subscribe']");

    // Функция для обновления состояния чекбоксов
    function updateCheckboxes() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    }
    // Добавляем обработчик события для чекбокса "Выбрать все"
    selectAllCheckbox.addEventListener("change", updateCheckboxes);

    // Добавляем обработчик события для остальных чекбоксов
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            // Если какой-либо из остальных чекбоксов снят, снимаем "Выбрать все"
            if (!checkbox.checked) {
                selectAllCheckbox.checked = false;
            }
        });
    });
