import {
  initialCards,
  configValidation,
  inputNamePopupEdit,
  inputDescriptionPopupEdit,
  buttonAddCardFormPopup,
  buttonEditUserFormPopup,
  containerElementsList,
  popupEditUserProfile,
  popupAddCardProfile,
} from '../scripts/constans.js';
import { FormValidator } from '../scripts/FormValidator.js';
import { Card } from '../scripts/Card.js';
import { Section } from '../scripts/Section.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { UserInfo } from '../scripts/UserInfo.js';

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

function addCard(data) {
  const cardItem = new Card(data, '#element__template-card', () => {
    const popupWithImage = new PopupWithImage('.popup_type_image', data);
    popupWithImage.openPopup();
    popupWithImage.setEventListeners();
  });
  const cardElement = cardItem.createCard();
  return cardElement;
}

// AddCardSubmit Form
const popupWithAddCardForm = new PopupWithForm('.popup_type_add', (formData) => {
  containerElementsList.prepend(addCard(formData));
  addCardFormValidator.disableSubmitButton();
  popupWithAddCardForm.closePopup();
});

popupWithAddCardForm.setEventListeners();

buttonAddCardFormPopup.addEventListener('click', () => {
  popupWithAddCardForm.openPopup();
});

// UserInfo Form
const currentUserInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userInfoSelector: '.profile__subtitle',
});

const popupWithUserInfoForm = new PopupWithForm('.popup_type_edit', (formData) => {
  currentUserInfo.setUserInfo(formData);
  popupWithUserInfoForm.closePopup();
});
popupWithUserInfoForm.setEventListeners();

buttonEditUserFormPopup.addEventListener('click', () => {
  const getUserInfo = currentUserInfo.getUserInfo();
  inputNamePopupEdit.value = getUserInfo.name;
  inputDescriptionPopupEdit.value = getUserInfo.description;

  editUserFormValidator.clearInputsErrors();
  popupWithUserInfoForm.openPopup();
});
