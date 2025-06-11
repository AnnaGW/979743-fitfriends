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
