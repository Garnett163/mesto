export class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._selectorContainer = document.querySelector(selectorContainer);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  setItem(element) {
    this._selectorContainer.prepend(element);
  }
}
