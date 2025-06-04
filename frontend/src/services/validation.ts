export const lengthMismatch = (inputString: string, min: number, max: number): boolean => {
  if (min > 0 || max > 0) {
    return inputString.length < min || inputString.length > max;
  }
  return false;
};

export const checkInputValidity = (inputElement: EventTarget & HTMLInputElement): void => {
  if (
    inputElement.validity.patternMismatch ||
    inputElement.validity.typeMismatch ||
    lengthMismatch(inputElement.value, inputElement.minLength, inputElement.maxLength)
  ) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage ?? 'ошибка');
  } else {
    inputElement.setCustomValidity('');
  }
};

export const toggleInputError = (inputElement: EventTarget & HTMLInputElement): void => {
  console.log(inputElement.validity);
  if (!inputElement.validity.valid) {
    toggleErrorSpan(inputElement, inputElement.validationMessage);
  } else {
    toggleErrorSpan(inputElement, '');
  }
};

export const toggleErrorSpan = (inputElement: EventTarget & HTMLInputElement, errorMessage: string): void => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  if (errorElement) {
    if (errorMessage !== '') {
      inputElement.classList.add('form__type-input-error');
      errorElement.textContent = errorMessage;
      errorElement.classList.add('form__error-active');
    } else {
      inputElement.classList.remove('form__type-input-error');
      errorElement.textContent = '';
      errorElement.classList.remove('form__error-active');
    }
  }
};

// const form = document.querySelector('.form');
// const inputList = Array.from(form.querySelectorAll('.form__type-input'));
// const checkboxElement = form.querySelector('.form__type-checkbox');
// const buttonElement = form.querySelector('.button');
// const formErrorElement = form.querySelector('.form__empty-error');

// startValidation();

// function startValidation() {
//   toggleButton();
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if (hasInvalidInput()) {
//       formError();
//       inputList.forEach((inputElement) => {
//         checkInputValidity(inputElement);
//         toggleInputError(inputElement);
//       });
//       toggleInputError(checkboxElement);
//     }
//   });
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(inputElement);
//       toggleButton();
//     });
//     inputElement.addEventListener('blur', () => {
//       toggleInputError(inputElement);
//     });
//     inputElement.addEventListener('focus', () => {
//       toggleErrorSpan(inputElement);
//     });
//     checkboxElement.addEventListener('change', () => {
//       toggleInputError(checkboxElement);
//       toggleButton();
//     });
//   });
// }

// function checkLengthMismatch(inputElement) {
//   if (inputElement.type !== 'text') {
//     return '';
//   }
//   const valueLength = inputElement.value.trim().length;
//   if (valueLength < inputElement.minLength) {
//     return `Минимальное количество символов: ${inputElement.minLength}`;
//   }
//   return '';
// }

// function hasInvalidInput() {
//   return inputList.some((inputElement) => !inputElement.validity.valid) || !checkboxElement.validity.valid;
// }

// function toggleErrorSpan(inputElement, errorMessage) {
//   const errorElement = document.querySelector(`.${inputElement.id}-error`);
//   if (errorMessage) {
//     inputElement.classList.add('form__type-input-error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('form__error-active');
//   } else {
//     inputElement.classList.remove('form__type-input-error');
//     errorElement.textContent = '';
//     errorElement.classList.remove('form__error-active');
//   }
// }

// function toggleButton() {
//   if (hasInvalidInput()) {
//     buttonElement.classList.add('button-inactive');
//     buttonElement.setAttribute('aria-disabled', 'true');
//   } else {
//     buttonElement.classList.remove('button-inactive');
//     buttonElement.setAttribute('aria-disabled', 'false');
//     formErrorElement.textContent = '';
//   }
// }

// function formError() {
//   const errorMessage = 'Заполните все поля для отправки формы.';
//   formErrorElement.textContent = errorMessage;
// }
