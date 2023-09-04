const countBuyValues__dis__ch = [200]; 
const prices__dis__ch = [11500]; 

const countContainers__dis__ch = document.querySelectorAll('.basket__buy__count__ch');

countContainers__dis__ch.forEach((container, index) => {
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
        if (count__product < countBuyValues__dis__ch) {
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

        if (count__product === countBuyValues__dis__ch) {
            plusButton.classList.add('disabled');
        } else {
            plusButton.classList.remove('disabled');
        }

        const totalPrice__dis__ch = count__product * prices__dis__ch;
        
        let outputElement__dis__ch = document.getElementById("price__present__dis__ch");
        
        outputElement__dis__ch.textContent = totalPrice__dis__ch;

        let outputElement__dis__ch__mobile = document.getElementById("price__present__dis__ch__mobile");
        
        outputElement__dis__ch__mobile.textContent = totalPrice__dis__ch;

        let element1 = document.getElementById("price__present__dis__f");
        let element2 = document.getElementById("price__present__dis__ch");
        let element3 = document.getElementById("price__present__dis__k");
        let resultElement__discount = document.getElementById("delivery__discount__countID");

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
const checkbox3 = document.getElementById('checkbox3');
let value__check__box2 = 0;

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
checkbox2.addEventListener('change', function () {
    const result = calculateValue();
    let sum = number1 - value__check__box1 + number2 - value__check__box2 + number3 - value__check__box3;
    resultElement__discount.textContent = sum;
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
resultElement__discount.textContent = sum;


        console.log(`Total price for product : ${totalPrice__dis__ch}`);
    }
});

