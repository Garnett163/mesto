import './index.css';
import {
  initialCards,
  configValidation,
  inputNamePopupEdit,
  inputDescriptionPopupEdit,
  buttonAddCardFormPopup,
  buttonEditUserFormPopup,
  popupEditUserProfile,
  popupAddCardProfile,
} from '../constants/constans.js';

import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

// Validation AddCardForm
const addCardFormValidator = new FormValidator(configValidation, popupAddCardProfile);
addCardFormValidator.enableValidation();

// Validation editUserInfoForm
const editUserFormValidator = new FormValidator(configValidation, popupEditUserProfile);
editUserFormValidator.enableValidation();

// Creat Section + render cards
const cardList = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      const cardElement = addCard(card);
      cardList.setItem(cardElement);
    },
  },
  '.elements__list'
);

cardList.renderItems();

// Popup Image
const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

function addCard(data) {
  const cardItem = new Card(data, '#element__template-card', (name, link) => {
    popupWithImage.open(name, link);
  });
  const cardElement = cardItem.createCard();
  return cardElement;
}

// AddCardSubmit Form
const popupWithAddCardForm = new PopupWithForm('.popup_type_add', (formData) => {
  cardList.setItem(addCard(formData));
  addCardFormValidator.disableSubmitButton();
  popupWithAddCardForm.close();
});

popupWithAddCardForm.setEventListeners();

buttonAddCardFormPopup.addEventListener('click', () => {
  popupWithAddCardForm.open();
});

// UserInfo Form
const currentUserInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userInfoSelector: '.profile__subtitle',
});

const popupWithUserInfoForm = new PopupWithForm('.popup_type_edit', (formData) => {
  currentUserInfo.setUserInfo(formData);
  popupWithUserInfoForm.close();
});
popupWithUserInfoForm.setEventListeners();

buttonEditUserFormPopup.addEventListener('click', () => {
  const getUserInfo = currentUserInfo.getUserInfo();
  inputNamePopupEdit.value = getUserInfo.name;
  inputDescriptionPopupEdit.value = getUserInfo.description;

  editUserFormValidator.clearInputsErrors();
  popupWithUserInfoForm.open();
});
