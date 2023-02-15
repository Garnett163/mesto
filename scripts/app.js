const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const elementsList = document.querySelector('.elements__list');

// Popup
const popups = document.querySelectorAll('.popup');
const popupEditForm = document.querySelector('.popup_type_edit-button');
const popupAddForm = document.querySelector('.popup_type_add-button');
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

function renderCards() {
  initialCards.forEach((element) => {
    const elementTemplateCard = document.querySelector('#element__template-card').content;
    const cardElement = elementTemplateCard.querySelector('.elements__item').cloneNode(true);
    const likeBtn = cardElement.querySelector('.elements__like-button');
    likeBtn.addEventListener('click', toggleLike);
    const deleteBtn = cardElement.querySelector('.elements__delete-button');
    deleteBtn.addEventListener('click', deleteCard);
    cardElement.querySelector('.elements__title').textContent = element.name;
    cardElement.querySelector('.elements__image').src = element.link;

    elementsList.append(cardElement);
    initialCards.push();
  });
}
renderCards();

function deleteCard(evt) {
  evt.target.closest('.elements__item').remove();
}

function toggleLike(evt) {
  evt.target.classList.toggle('elements__like-button_active');
}
function openPopup(evt) {
  const target = evt.target;
  if (target === editBtn) {
    popupEditForm.classList.add('popup_open');
    inputName.value = title.textContent;
    inputAbout.value = subtitle.textContent;
  } else if (target === addBtn) {
    popupAddForm.classList.add('popup_open');
  }
}
function closePopup() {
  popups.forEach((item) => {
    item.classList.remove('popup_open');
  });
}

closeBtns.forEach((item) => {
  item.addEventListener('click', () => {
    popupEditForm.classList.remove('popup_open');
    popupAddForm.classList.remove('popup_open');
  });
});
editBtn.addEventListener('click', openPopup);
addBtn.addEventListener('click', openPopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  const target = evt.target;
  const editForm = document.forms.editForm;
  const addForm = document.forms.addForm;
  if (target === editForm) {
    console.log('попал edit');
    title.textContent = inputName.value;
    subtitle.textContent = inputAbout.value;
  } else if (target === addForm) {
    console.log('попал add');
  }
  closePopup();
  // closePopupCLONE(popups);
}

popupForms.forEach((item) => {
  item.addEventListener('submit', handleFormSubmit);
});

// function closePopupCLONE(popup) {
//   popup.classList.remove('popup_open');
// }
// closeBtns.forEach((item) => {
//   item.addEventListener('click', function closePopupCLONE(event) {
//     event.target.closest('.popup').classList.remove('popup_open');
//   });
// });
