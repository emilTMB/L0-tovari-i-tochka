    // Получаем все чекбоксы с классом "checkbox-round"
    const checkboxess = document.querySelectorAll('.checkbox-round-address');

    // Получаем элемент с id "address__delivery"
    const addressDeliveryElement = document.getElementById('address__delivery');
    const addressDeliveryElement1 = document.getElementById('address__delivery__resultID');

    // Добавляем слушатель события изменения (change) к каждому чекбоксу
    checkboxess.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                // Устанавливаем содержимое элемента "address__delivery" равным значению атрибута data-address этого чекбокса
                addressDeliveryElement.textContent = this.getAttribute('data-address');
                addressDeliveryElement1.textContent = this.getAttribute('data-address');
                
                // Отключаем остальные чекбоксы
                checkboxess.forEach((otherCheckbox) => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });