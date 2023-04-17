export const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/karachaevs.png',
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Elbrus.png',
  },
  {
    name: 'Озеро Лейк',
    link: './images/Louise-Lake.jpg',
  },
  {
    name: 'Исландия',
    link: './images/Iceland.jpg',
  },
  {
    name: 'Озеро Джун',
    link: './images/June-Lake.jpg',
  },
  {
    name: 'Валь-де-Шарме',
    link: './images/Val-de-Charmey.jpg',
  },
];

// Selectors for Validation
export const configValidation = {
  // formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active',
};

// Inputs for Values
export const inputNamePopupEdit = document.querySelector('#inputNameEditProfile');
export const inputDescriptionPopupEdit = document.querySelector('#inputDescriptionEditProfile');

// Buttons editForm and addCardForm
export const buttonEditUserFormPopup = document.querySelector('.profile__edit-button');
export const buttonAddCardFormPopup = document.querySelector('.profile__add-button');

// Container
export const containerElementsList = document.querySelector('.elements__list');

// Popups
export const popupEditUserProfile = document.querySelector('.popup_type_edit');
export const popupAddCardProfile = document.querySelector('.popup_type_add');
