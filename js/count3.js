const countBuyValues__k = [3]; 
const prices__k = [247]; 

const countContainers__k = document.querySelectorAll('.basket__buy__count__k');

countContainers__k.forEach((container, index) => {
    const minusButton = container.querySelector('.minus');
    const plusButton = container.querySelector('.plus');
    const countProductSpan = container.querySelector('.count__product');
    
    let count__product = 1;

    updateButtonsState();

    minusButton.addEventListener('click', () => {
        if (count__product > 1) {
            count__product--;
            updateButtonsState();
        }
    });

    plusButton.addEventListener('click', () => {
        if (count__product < countBuyValues__k) {
            count__product++;
            updateButtonsState();
        }
    });

    function updateButtonsState() {
        countProductSpan.textContent = count__product;

        if (count__product === 1) {
            minusButton.classList.add('disabled');
        } else {
            minusButton.classList.remove('disabled');
        }

        if (count__product === countBuyValues__k) {
            plusButton.classList.add('disabled');
        } else {
            plusButton.classList.remove('disabled');
        }

        const totalPrice__k = count__product * prices__k;
        
        let outputElement__k = document.getElementById("price__present__k");
        
        outputElement__k.textContent = totalPrice__k;

        let outputElement__k__mobile = document.getElementById("price__present__k__mobile");
        
        outputElement__k__mobile.textContent = totalPrice__k;

        const checkbox3 = document.getElementById('checkbox3');
        let value__check__box3 = 0;

        let element1 = document.getElementById("present-item-f");
        let element2 = document.getElementById("price__present__ch");
        let element3 = document.getElementById("price__present__k");
        let resultElement = document.getElementById("delivery__result__countID");
        let resultElement__del = document.getElementById("delivery__countID");

        // Извлекаем текст из элементов
        let text1 = element1.textContent;
        let text2 = element2.textContent;
        let text3 = element3.textContent;
        // Преобразуем текст в числа и выполняем сложение
        let number1 = parseInt(text1, 10);
        let number2 = parseInt(text2, 10);
        let number3 = parseInt(text3, 10);

/////////////////////////////////////////////////////////////////////////////
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

function calculateValue() {

    if (!checkbox1.checked) {
        value__check__box1 = number1;
    } else {
        value__check__box1 = 0;
    }

    if (!checkbox2.checked) {
        value__check__box2 = number2;
    } else {
        value__check__box2 = 0;
    }

    if (!checkbox3.checked) {
        value__check__box3 = number3;
    } else {
        value__check__box3 = 0;
    }
}
checkbox3.addEventListener('change', function () {
    const result = calculateValue();
    let sum = number1 - value__check__box1 + number2 - value__check__box2 + number3 - value__check__box3;
    resultElement.textContent = sum;
    resultElement__del.textContent = sum;
});
/////
if (!checkbox1.checked) {
    value__check__box1 = number1;
} else {
    value__check__box1 = 0;
}

if (!checkbox2.checked) {
    value__check__box2 = number2;
} else {
    value__check__box2 = 0;
}

if (!checkbox3.checked) {
    value__check__box3 = number3;
} else {
    value__check__box3 = 0;
}

let sum = number1 - value__check__box1 + number2 - value__check__box2 + number3 - value__check__box3;
resultElement.textContent = sum;
resultElement__del.textContent = sum;
////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////
        let element4 = document.getElementById("count__productID__f");
        let element5 = document.getElementById("count__productID__ch");
        let element6 = document.getElementById("count__productID__k");
        let element7 = document.getElementById("count__productID__f__mobile");
        let element8 = document.getElementById("count__productID__ch__mobile");
        let element9 = document.getElementById("count__productID__k__mobile");

        let resultElement__basket = document.getElementById("shopping-basketID");
        let resultElement__basket__mobile = document.getElementById("shopping-basketID__mobile");
        let resultElement__delivery__mini__f = document.getElementById("delivery__point__count__item-d");
        let resultElement__delivery__mini__ch = document.getElementById("delivery__point__count__item-a");
        let resultElement__delivery__mini__ch2 = document.getElementById("delivery__point__count__item-c");
        let resultElement__delivery__mini__k = document.getElementById("delivery__point__count__item-b");

        let text4 = element4.textContent;
        let text5 = element5.textContent;
        let text6 = element6.textContent;
        let text7 = element7.textContent;
        let text8 = element8.textContent;
        let text9 = element9.textContent;

        let number4 = parseInt(text4, 10);
        let number5 = parseInt(text5, 10);
        let number6 = parseInt(text6, 10);


        function calculateValueBasket() {
            if (!checkbox1.checked) {
                value__check__box1 = 0;
            } else {
                value__check__box1 = 1;
            }

            if (!checkbox2.checked) {
                value__check__box2 = 0;
            } else {
                value__check__box2 = 1;
            }

            if (!checkbox3.checked) {
                value__check__box3 = 0;
            } else {
                value__check__box3 = 1;
            }
        }


        resultElement__delivery__mini__k.textContent = number6;

        checkbox1.addEventListener('change', function () {
            const result = calculateValueBasket();
            let basket__sum = number4 * value__check__box1 + number5 * value__check__box2 + number6 * value__check__box3;
            resultElement__basket.textContent = basket__sum;
            resultElement__basket__mobile.textContent = basket__sum;
        });
        checkbox2.addEventListener('change', function () {
            const result = calculateValueBasket();
            let basket__sum = number4 * value__check__box1 + number5 * value__check__box2 + number6 * value__check__box3;
            resultElement__basket.textContent = basket__sum;
            resultElement__basket__mobile.textContent = basket__sum;
        });
        checkbox3.addEventListener('change', function () {
            const result = calculateValueBasket();
            let basket__sum = number4 * value__check__box1 + number5 * value__check__box2 + number6 * value__check__box3;
            resultElement__basket.textContent = basket__sum;
            resultElement__basket__mobile.textContent = basket__sum;
        });

        const result = calculateValueBasket();
        let basket__sum = number4 * value__check__box1 + number5 * value__check__box2 + number6 * value__check__box3;
        resultElement__basket.textContent = basket__sum;
        resultElement__basket__mobile.textContent = basket__sum;
        ///////////////////////////////////////////////////////////////////////////////////////////
        console.log(`Total price for product : ${totalPrice__k}`);
    }
});


checkbox3.addEventListener('change', function () {
    const result = calculateValue();
    let sum = number1 - value__check__box1 + number2 - value__check__box2 + number3 - value__check__box3
    resultElement.textContent = sum;
  });