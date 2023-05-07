import './index.css';
import {
  apiSettings,
  // initialCards,
  configValidation,
  inputNamePopupEdit,
  inputDescriptionPopupEdit,
  buttonAddCardFormPopup,
  buttonEditUserFormPopup,
  buttonAvatarFormPopup,
  popupEditUserProfile,
  popupAddCardProfile,
  popupAvatarFormProfile,
} from '../constants/constans.js';

import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupDeleteConfirm } from '../components/PopupDeleteConfirm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api';

// Validation AddCardForm
const addCardFormValidator = new FormValidator(configValidation, popupAddCardProfile);
addCardFormValidator.enableValidation();

// Validation editUserInfoForm
const editUserFormValidator = new FormValidator(configValidation, popupEditUserProfile);
editUserFormValidator.enableValidation();

// Validation AvatarForm
const avatarFormValidator = new FormValidator(configValidation, popupAvatarFormProfile);
avatarFormValidator.enableValidation();

// API
const api = new Api(apiSettings);
let userId;
// UserInfo Form
const currentUserInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userInfoSelector: '.profile__subtitle',
  userAvatarSelector: '.profile__avatar',
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
    userId = data._id;
    // console.log(userId);
    currentUserInfo.setUserInfo(data);
    currentUserInfo.setUserInfo(data);
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

const popupWithUserInfoForm = new PopupWithForm('.popup_type_edit', (formData) => {
  popupWithUserInfoForm.showLoading(true);
  api
    .editUserInfo(formData)
    .then((data) => {
      currentUserInfo.setUserInfo(data);
      popupWithUserInfoForm.close();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .finally(() => {
      popupWithUserInfoForm.showLoading(false);
    });
});
popupWithUserInfoForm.setEventListeners();

buttonEditUserFormPopup.addEventListener('click', () => {
  const getUserInfo = currentUserInfo.getUserInfo();
  inputNamePopupEdit.value = getUserInfo.name;
  inputDescriptionPopupEdit.value = getUserInfo.about;

  editUserFormValidator.clearInputsErrors();
  popupWithUserInfoForm.open();
});

// Creat Section + render cards
const cardList = new Section(
  {
    renderer: (card) => {
      const cardElement = addCard(card);
      cardList.setItem(cardElement);
    },
  },
  '.elements__list'
);

// Popup Image
const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

function addCard(data) {
  const cardItem = new Card(data, userId, {
    templateSelector: '#element__template-card',
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleDeleteConfirm: () => {
      popupWithDeleteConfirm.open(cardItem);
    },

    handleLikeClick: () => {
      if (cardItem.checkIsLiked()) {
        api
          .dislikeCard(cardItem.id)
          .then((data) => {
            cardItem.removeLike(data.likes);
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });
      } else {
        api
          .likeCard(cardItem.id)
          .then((data) => {
            cardItem.addLike(data.likes);
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });
      }
    },
  });

  const cardElement = cardItem.createCard();
  return cardElement;
}

const popupWithDeleteConfirm = new PopupDeleteConfirm('.popup_type_confirm', (card) => {
  api
    .deleteCard(card.id)
    .then(() => {
      card.removeDOMCard();
      popupWithDeleteConfirm.close();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
});
popupWithDeleteConfirm.setEventListeners();

// AddCardSubmit Form
const popupWithAddCardForm = new PopupWithForm('.popup_type_add', (formData) => {
  popupWithAddCardForm.showLoading(true);
  api
    .addNewCard(formData)
    .then((data) => {
      cardList.setItem(addCard(data));
      addCardFormValidator.disableSubmitButton();
      popupWithAddCardForm.close();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .finally(() => {
      popupWithAddCardForm.showLoading(false);
    });
});
popupWithAddCardForm.setEventListeners();

buttonAddCardFormPopup.addEventListener('click', () => {
  popupWithAddCardForm.open();
});

// AvatarSubmit Form
const popupAvatarForm = new PopupWithForm('.popup_type_avatar', (formData) => {
  popupAvatarForm.showLoading(true);
  api
    .changeAvatar(formData)
    .then((data) => {
      currentUserInfo.setUserInfo(data);
      popupAvatarForm.close();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .finally(() => {
      popupAvatarForm.showLoading(true);
    });
});
popupAvatarForm.setEventListeners();

buttonAvatarFormPopup.addEventListener('click', () => {
  popupAvatarForm.open();
});
