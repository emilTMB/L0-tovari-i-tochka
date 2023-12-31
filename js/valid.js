const delivery__form__email_error = document.getElementById('email_error');
const delivery__form__email__error_mobile = document.getElementById('email__error_mobile');
const delivery__form__phone_error = document.getElementById('phone_error');
const delivery__form__phone__error_mobile = document.getElementById('phone__error_mobile');
const delivery__form__lastName_error = document.getElementById('lastName_error');
const delivery__form__inn_error = document.getElementById('inn_error');
const delivery__form__firstName_error = document.getElementById('firstName_error');
const delivery__form__firstName__error_mobile = document.getElementById('firstName__error_mobile');

const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const innInput = document.getElementById('inn');
const submitButton = document.getElementById('submitBtn');

function hideError(span__error__element) {
  span__error__element.classList.remove('span__visibility__visible');
}

function updateClass(input, span) {
  const inputValue = input.value.trim();

  if (inputValue !== '') {
    span.classList.add('span__visibility__visible');
  } else {
    span.classList.remove('span__visibility__visible');
  }
}

// Находим все спаны
const span__firstName = document.getElementById('span__firstName');
const span__lastName = document.getElementById('span__lastName');
const span__lastName_mobile = document.getElementById('span__lastName_mobile');
const span__email = document.getElementById('span__email');
const span__phone = document.getElementById('span__phone');
const span__phone_mobile = document.getElementById('span__phone_mobile');
const span__inn = document.getElementById('span__inn');
const span__inn_mobile = document.getElementById('span__inn_mobile');

// Добавляем обработчики для каждой пары инпут-спан
firstNameInput.addEventListener('input', () => {
  updateClass(firstNameInput, span__firstName);
  clearError(firstNameInput); // Добавляем эту строку для удаления ошибок
});

lastNameInput.addEventListener('input', () => {
  updateClass(lastNameInput, span__lastName);
  clearError(lastNameInput); // Добавляем эту строку для удаления ошибок
});

emailInput.addEventListener('input', () => {
  updateClass(emailInput, span__email);
  clearError(emailInput); // Добавляем эту строку для удаления ошибок
});

phoneInput.addEventListener('input', () => {
  updateClass(phoneInput, span__phone);
  clearError(phoneInput); // Добавляем эту строку для удаления ошибок
});

innInput.addEventListener('input', () => {
  updateClass(innInput, span__inn);
  clearError(innInput); // Добавляем эту строку для удаления ошибок
});

lastNameInput.addEventListener('input', () => {
  updateClass(lastNameInput, span__lastName_mobile);
  clearError(lastNameInput); // Добавляем эту строку для удаления ошибок
});

phoneInput.addEventListener('input', () => {
  updateClass(phoneInput, span__phone_mobile);
  clearError(phoneInput); // Добавляем эту строку для удаления ошибок
});

innInput.addEventListener('input', () => {
  updateClass(innInput, span__inn_mobile);
  clearError(innInput); // Добавляем эту строку для удаления ошибок
});

// ВВОД ТЕЛЕФОНА
////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
  }
  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});
////////////////////////////////////////////////////////////////////////


phoneInput.addEventListener('input', () => {
  let inputValue = phoneInput.value;


  // Ограничиваем количество символов до 16 (включая символ "+")
  if (inputValue.length > 16) {
    inputValue = inputValue.slice(0, 16);
  }

  // Обновляем значение в поле ввода
  phoneInput.value = inputValue;
});

const validateEmail = (email) => {
  function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  if (isValidEmail(email)) {
    return true;
  } else {
    console.log('Некорректный адрес электронной почты.');
  }
};

const validatePhone = (phone) => {
  // Проверьте, соответствует ли длина номера ожидаемой длине
  if (phone.length !== 16) {
    return false;
  }
  return true;
};

phoneInput.addEventListener('input', () => {
  let inputValue = phoneInput.value;

  const isValid = validatePhone(inputValue);
  console.log(isValid);
});

const validateInn = (inn) => {
  return inn.length === 14;
};

const showError = (input, message) => {
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  input.parentNode.appendChild(errorElement);
};

const clearError = (input) => {
  const errorElement = input.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
};

const validateInput = (input, validationFunction, errorMessage) => {
  const value = input.value.trim();
  if (value === '') {
    showError(input, errorMessage);
    return false;
  } else if (!validationFunction(value)) {
    showError(input, errorMessage);
    return false;
  } else {
    clearError(input);
    return true;
  }
};
/////////////////////////////////////////////////////////
function validateForm() {
  let isValid = true;

  isValid &= validateInput(firstNameInput, (value) => true);
  if (!isValid) {
    delivery__form__firstName_error.classList.add('span__visibility__visible');
    delivery__form__firstName__error_mobile.classList.add('span__visibility__visible');
    firstNameInput.classList.add('error-red');
    const el = document.getElementById('recipient');
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    delivery__form__firstName_error.classList.remove('span__visibility__visible');
    delivery__form__firstName__error_mobile.classList.remove('span__visibility__visible');
    firstNameInput.classList.remove('error-red');
  }
  isValid &= validateInput(lastNameInput, (value) => true);
  if (!isValid) {
    delivery__form__lastName_error.classList.add('span__visibility__visible');
    lastNameInput.classList.add('error-red');
    const el = document.getElementById('recipient');
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    delivery__form__lastName_error.classList.remove('span__visibility__visible');
    lastNameInput.classList.remove('error-red');
  }
  isValid &= validateInput(emailInput, validateEmail);
  if (!isValid) {
    delivery__form__email_error.classList.add('span__visibility__visible');
    delivery__form__email__error_mobile.classList.add('span__visibility__visible');
    emailInput.classList.add('error-red');
    const el = document.getElementById('recipient');
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    delivery__form__email_error.classList.remove('span__visibility__visible');
    delivery__form__email__error_mobile.classList.remove('span__visibility__visible');
    emailInput.classList.remove('error-red');
  }
  isValid &= validateInput(phoneInput, validatePhone);
  if (!isValid) {
    delivery__form__phone_error.classList.add('span__visibility__visible');
    delivery__form__phone__error_mobile.classList.add('span__visibility__visible');
    phoneInput.classList.add('error-red');
    const el = document.getElementById('recipient');
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    delivery__form__phone_error.classList.remove('span__visibility__visible');
    delivery__form__phone__error_mobile.classList.remove('span__visibility__visible');
    phoneInput.classList.remove('error-red');
  }
  isValid &= validateInput(innInput, validateInn);
  if (!isValid) {
    delivery__form__inn_error.classList.add('span__visibility__visible');
    innInput.classList.add('error-red');
    const el = document.getElementById('recipient');
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    delivery__form__inn_error.classList.remove('span__visibility__visible');
    innInput.classList.remove('error-red');
  }

  return isValid;
}


submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Предотвращаем стандартное поведение формы
  const isValid = validateForm(); // Выполняем валидацию при клике

  if (isValid) {

    console.log('Форма валидна. Выполняем сабмит.');
  } else {
    firstNameInput.addEventListener('input', () => {
      updateClass(firstNameInput, delivery__form__firstName__error_mobile);
      clearError(firstNameInput);
      validateForm(); // Вызываем функцию валидации при каждом вводе символа
    });
    lastNameInput.addEventListener('input', () => {
      updateClass(lastNameInput, span__lastName);
      clearError(lastNameInput);
      validateForm(); // Вызываем функцию валидации при каждом вводе символа
    });
    emailInput.addEventListener('input', () => {
      updateClass(emailInput, span__email);
      clearError(emailInput);
      validateForm(); // Вызываем функцию валидации при каждом вводе символа
    });
    emailInput.addEventListener('input', () => {
      updateClass(emailInput, delivery__form__email__error_mobile);
      clearError(emailInput);
      validateForm(); // Вызываем функцию валидации при каждом вводе символа
    });
    phoneInput.addEventListener('input', () => {
      updateClass(phoneInput, span__phone);
      clearError(phoneInput);
      validateForm(); // Вызываем функцию валидации при каждом вводе символа
    });
    phoneInput.addEventListener('input', () => {
      updateClass(phoneInput, span__phone_mobile);
      clearError(phoneInput);
      validateForm(); // Вызываем функцию валидации при каждом вводе символа
    });
    innInput.addEventListener('input', () => {
      updateClass(innInput, span__inn);
      clearError(innInput);
      validateForm(); // Вызываем функцию валидации при каждом вводе символа
    });
    //под вопросом проверить innInput mobile
    innInput.addEventListener('input', () => {
      updateClass(innInput, span__inn_mobile);
      clearError(innInput);
      validateForm(); // Вызываем функцию валидации при каждом вводе символа
    });
    console.log('Форма не валидна. Сабмит не выполнен.');
  }
});
//////////////////////////////////////////////////////////
submitButton.addEventListener('click', () => {
  let isValid = true;

  isValid &= validateInput(firstNameInput, (value) => true);
  if (!isValid) {
    delivery__form__firstName_error.classList.add('span__visibility__visible');
    delivery__form__firstName__error_mobile.classList.add('span__visibility__visible');
    firstNameInput.classList.add('error-red');
  } else {
    delivery__form__firstName_error.classList.remove('span__visibility__visible');
    delivery__form__firstName__error_mobile.classList.remove('span__visibility__visible');
    firstNameInput.classList.remove('error-red');
  }
  isValid &= validateInput(lastNameInput, (value) => true);
  if (!isValid) {
    delivery__form__lastName_error.classList.add('span__visibility__visible');
    lastNameInput.classList.add('error-red');
  } else {
    delivery__form__lastName_error.classList.remove('span__visibility__visible');
    lastNameInput.classList.remove('error-red');
  }
  isValid &= validateInput(emailInput, validateEmail);
  if (!isValid) {
    delivery__form__email_error.classList.add('span__visibility__visible');
    delivery__form__email__error_mobile.classList.add('span__visibility__visible');
    emailInput.classList.add('error-red');
  } else {
    delivery__form__email_error.classList.remove('span__visibility__visible');
    delivery__form__email__error_mobile.classList.remove('span__visibility__visible');
    emailInput.classList.remove('error-red');
  }
  isValid &= validateInput(phoneInput, validatePhone);
  if (!isValid) {
    delivery__form__phone_error.classList.add('span__visibility__visible');
    delivery__form__phone__error_mobile.classList.add('span__visibility__visible');
    phoneInput.classList.add('error-red');
  } else {
    delivery__form__phone_error.classList.remove('span__visibility__visible');
    delivery__form__phone__error_mobile.classList.remove('span__visibility__visible');
    phoneInput.classList.remove('error-red');
  }
  isValid &= validateInput(innInput, validateInn);
  if (!isValid) {
    delivery__form__inn_error.classList.add('span__visibility__visible');
    innInput.classList.add('error-red');
  } else {
    delivery__form__inn_error.classList.remove('span__visibility__visible');
    innInput.classList.remove('error-red');
  }
});