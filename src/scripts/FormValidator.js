export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = this._formElement.querySelector(config.submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
    const formError = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._config.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._config.errorClass);
  };

  _hideInputError = (inputElement) => {
    const formError = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._config.inputErrorClass);
    formError.classList.remove(this._config.errorClass);
    formError.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  clearInputsErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
  disableSubmitButton() {
    this._buttonElement.classList.add('popup__submit-button_disabled');
    this._buttonElement.setAttribute('disabled', 'disabled');
  }

  enableValidation = () => {
    this._inputList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
    });
  };
}
