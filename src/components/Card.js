export class Card {
  constructor(
    data,
    userId,
    { templateSelector, handleCardClick, handleDeleteConfirm, handleLikeClick }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._owner = data.owner;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteConfirm = handleDeleteConfirm;
    this._handleLikeClick = handleLikeClick;
    this._card = undefined;
  }

  _getTemplate() {
    const cardElement = document
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
    this._title.textContent = this._name;

    this._deleteButton = this._card.querySelector('.elements__delete-button');

    this._likeButton = this._card.querySelector('.elements__like-button');
    if (this._userId !== this._owner._id) {
      this._deleteButton.style.display = 'none';
    }

    this._likeCounter = this._card.querySelector('.elements__likes-counter');

    if (this.checkIsLiked()) {
      this._likeButton.classList.add('elements__like-button_active');
    }
    this._setLikeCounter(this._likes);
    this._setEventListeners();

    return this._card;
  }

  _setLikeCounter(likes) {
    this._likes = likes;
    this._likeCounter.textContent = `${this._likes.length}`;
  }

  checkIsLiked() {
    return this._likes.find((like) => {
      return like._id === this._userId;
    });
  }

  addLike(likes) {
    this._likeButton.classList.add('elements__like-button_active');
    this._setLikeCounter(likes);
  }

  removeLike(likes) {
    this._likeButton.classList.remove('elements__like-button_active');
    this._setLikeCounter(likes);
  }

  removeDOMCard() {
    this._card.remove();
    this._card = null;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteConfirm();
    });
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
