import { initialCards, configValidation } from './constans.js';
import { FormValidator } from './FormValidator.js';
// import { Card } from './Card.js';

// Profile
const titleProfile = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');
const buttonEditPopup = document.querySelector('.profile__edit-button');
const buttonAddPopup = document.querySelector('.profile__add-button');
// Container + Template
const elementsList = document.querySelector('.elements__list');
const elementTemplateCard = document.querySelector('#element__template-card').content;
// Forms
const formEditProfile = document.forms.editForm;
const formAddProfile = document.forms.addForm;
// Inputs
const nameInputPopupAdd = document.querySelector('.popup__input_name');
const urlInputPopupAdd = document.querySelector('.popup__input_url');

// Popup
const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddProfile = document.querySelector('.popup_type_add');
const popupImageProfile = document.querySelector('.popup_type_image');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupImageItem = document.querySelector('.popup__image');
const submitButtonCreate = document.querySelector('.popup__submit-button_create');
const inputNamePopupEdit = document.querySelector('#inputNameEditProfile');
const inputAboutPopupEdit = document.querySelector('#inputDescriptionEditProfile');

function createCard(title, url) {
  const cardElement = elementTemplateCard.querySelector('.elements__item').cloneNode(true);
  const deleteBtn = cardElement.querySelector('.elements__delete-button');
  const likeBtn = cardElement.querySelector('.elements__like-button');
  const elementsTitle = cardElement.querySelector('.elements__title');
  elementsTitle.textContent = title;
  const elementsImage = cardElement.querySelector('.elements__image');
  elementsImage.src = url;
  elementsImage.alt = title;

  elementsImage.addEventListener('click', () => showImage(title, url));
  deleteBtn.addEventListener('click', deleteCard);
  likeBtn.addEventListener('click', toggleLike);

  return cardElement;
}
function addCard(title, url, container) {
  container.prepend(createCard(title, url));
}

function deleteCard(evt) {
  evt.target.closest('.elements__item').remove();
}

function toggleLike(evt) {
  evt.target.classList.toggle('elements__like-button_active');
}

function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closePopupByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupByEscape);
}
function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_open');
    closePopup(openPopup);
  }
}
function openPopupEditProfile() {
  inputNamePopupEdit.value = titleProfile.textContent;
  inputAboutPopupEdit.value = subtitleProfile.textContent;
  openPopup(popupEditProfile);
}
function openPopupAddProfile() {
  openPopup(popupAddProfile);
}
function submitEditProfileForm(evt) {
  evt.preventDefault();
  titleProfile.textContent = inputNamePopupEdit.value;
  subtitleProfile.textContent = inputAboutPopupEdit.value;
  closePopup(popupEditProfile);
}

function submitAddCardProfile(evt) {
  evt.preventDefault();
  addCard(nameInputPopupAdd.value, urlInputPopupAdd.value, elementsList);
  addForm.reset();
  submitButtonCreate.classList.add('popup__submit-button_disabled');
  submitButtonCreate.setAttribute('disabled', 'disabled');
  closePopup(popupAddProfile);
}
function showImage(title, url) {
  popupImageTitle.textContent = title;
  popupImageItem.src = url;
  popupImageItem.alt = title;

  openPopup(popupImageProfile);
}
initialCards.forEach((item) => {
  addCard(item.name, item.link, elementsList);
});

buttonEditPopup.addEventListener('click', openPopupEditProfile);
buttonAddPopup.addEventListener('click', openPopupAddProfile);
formEditProfile.addEventListener('submit', submitEditProfileForm);
formAddProfile.addEventListener('submit', submitAddCardProfile);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_open')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});

const addFormValidator = new FormValidator(configValidation, popupAddProfile);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(configValidation, popupEditProfile);
editFormValidator.enableValidation();
