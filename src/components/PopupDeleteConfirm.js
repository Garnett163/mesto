import { Popup } from './Popup.js';

export class PopupDeleteConfirm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleSubmitForm(this._card);
    });
  }

  open(card) {
    super.open();
    this._card = card;
  }
}
