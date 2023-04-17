import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector, imageItemData) {
    super(popupSelector);
    this._imageItemData = imageItemData;
  }

  openPopup() {
    super.openPopup();

    const imageTitle = this._popup.querySelector('.popup__image-title');
    const imageItem = this._popup.querySelector('.popup__image');

    imageTitle.textContent = this._imageItemData.name;
    imageItem.src = this._imageItemData.link;
    imageItem.alt = this._imageItemData.name;
  }
}
