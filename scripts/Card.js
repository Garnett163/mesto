export class Card {
  constructor(data, templateSelector, showImage) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._showImage = showImage;
    this._card = undefined; // (for me) ее можно не объявлять, а точнее не сохранять в нее данные, схожа с _image и _title и т.д
  }

  _getTemplate() {
    const cardElement = elementTemplateCard
      .querySelector(this._templateSelector)
      .content.querySelector('.elements__item')
      .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._card = this._getTemplate();

    this._image = this._card.querySelector('.elements__image');
    this._image.src = this._link;
    this._image.alt = this._name;

    this._title = this._card.querySelector('.elements__title');
    this._title.textContent = this.name;

    this._deleteButton = this._card.querySelector('.elements__delete-button');
    this._likeButton = this._card.querySelector('.elements__like-button');

    this._setEventListeners();

    return this._card;
  }

  _deleteCard() {
    this._card.remove();
  }

  _toggleLike() {
    this._likeButton.classList.toggle('elements__like-button_active');
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._deleteButton();
    });
    this._likeButton.addEventListener('click', () => {
      this._toggleLike();
    });
    this._image.addEventListener('click', () => {
      this._showImage(this._name, this.link);
    });
  }
}
