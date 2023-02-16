// Profile
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
// Container + Template
const elementsList = document.querySelector('.elements__list');
const elementTemplateCard = document.querySelector('#element__template-card').content;
// Forms
const editForm = document.forms.editForm;
const addForm = document.forms.addForm;
// Inputs
const nameInputCard = document.querySelector('.popup__input_name');
const urlInputCard = document.querySelector('.popup__input_url');
// Popup
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const saveBtn = document.querySelector('.popup__save-button');
const closeBtns = document.querySelectorAll('.popup__close-button');
const popupForms = document.querySelectorAll('.popup__form');
const inputName = document.querySelector('#name');
const inputAbout = document.querySelector('#about');

const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/karachaevs.png',
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Elbrus.png',
  },
  {
    name: 'Домбай',
    link: './images/Dombai.png',
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

function createCard(title, url) {
  const cardElement = elementTemplateCard.querySelector('.elements__item').cloneNode(true);
  const deleteBtn = cardElement.querySelector('.elements__delete-button');
  const likeBtn = cardElement.querySelector('.elements__like-button');

  cardElement.querySelector('.elements__title').textContent = title;
  cardElement.querySelector('.elements__image').src = url;

  deleteBtn.addEventListener('click', deleteCard);
  likeBtn.addEventListener('click', toggleLike);

  elementsList.prepend(cardElement);
}

function deleteCard(evt) {
  evt.target.closest('.elements__item').remove();
}

function toggleLike(evt) {
  evt.target.classList.toggle('elements__like-button_active');
}

function openPopup(popup) {
  popup.classList.add('popup_open');
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
}

function openProfiles(evt) {
  if (evt.target === editBtn) {
    inputName.value = title.textContent;
    inputAbout.value = subtitle.textContent;
    openPopup(popupEdit);
  }
  if (evt.target === addBtn) {
    openPopup(popupAdd);
  }
}

function editFormSubmit(evt) {
  evt.preventDefault();
  if (evt.target === editForm) {
    console.log('hit edit');
  }
  title.textContent = inputName.value;
  subtitle.textContent = inputAbout.value;
  closePopup(popupEdit);
}
function addCardSubmit(evt) {
  evt.preventDefault();
  if (evt.target === addForm) {
    console.log('hit add');
  }
  createCard(nameInputCard.value, urlInputCard.value);
  addForm.reset();
  closePopup(popupAdd);
}

initialCards.forEach((item) => {
  createCard(item.name, item.link);
});
editBtn.addEventListener('click', openProfiles);
addBtn.addEventListener('click', openProfiles);
editForm.addEventListener('submit', editFormSubmit);
addForm.addEventListener('submit', addCardSubmit);
closeBtns.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.target.closest('.popup').classList.remove('popup_open');
  });
});
