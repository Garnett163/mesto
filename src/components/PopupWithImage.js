import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._imageItemData = imageItemData;
    this._imageTitle = this._popup.querySelector('.popup__image-title');
    this._imageItem = this._popup.querySelector('.popup__image');
  }

  open(name, link) {
    super.open();

    this._imageTitle.textContent = name;
    this._imageItem.src = link;
    this._imageItem.alt = name;
  }
}
