export const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65/',
  headers: {
    authorization: '2d21610b-41f6-470d-8829-f4586478ebfc',
    'Content-Type': 'application/json',
  },
};

// const karachaevs = new URL('../images/karachaevs.png', import.meta.url);
// const elbrusPicture = new URL('../images/Elbrus.png', import.meta.url);
// const lakeLouisePicture = new URL('../images/Louise-Lake.jpg', import.meta.url);
// const icelandPicture = new URL('../images/Iceland.jpg', import.meta.url);
// const lakeJunePicture = new URL('../images/June-Lake.jpg', import.meta.url);
// const valDeSharmePicture = new URL('../images/Val-de-Charmey.jpg', import.meta.url);

// export const initialCards = [
//   {
//     name: 'PEPE CRY',
//     link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzJ5bAbXx0nf2X9q74QXu2Dlk5WWNVmShgw&usqp=CAU',
//   },
//   {
//     name: 'Гора Эльбрус',
//     link: elbrusPicture,
//   },
//   {
//     name: 'Озеро Лейк',
//     link: lakeLouisePicture,
//   },
//   {
//     name: 'Исландия',
//     link: icelandPicture,
//   },
//   {
//     name: 'Озеро Джун',
//     link: lakeJunePicture,
//   },
//   {
//     name: 'Валь-де-Шарме',
//     link: valDeSharmePicture,
//   },
// ];

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
export const buttonAvatarFormPopup = document.querySelector('.profile__avatar-button');

// Popups
export const popupEditUserProfile = document.querySelector('.popup_type_edit');
export const popupAddCardProfile = document.querySelector('.popup_type_add');
export const popupAvatarFormProfile = document.querySelector('.popup_type_avatar');
