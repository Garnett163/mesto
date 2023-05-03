export class Section {
  constructor({ renderer }, selectorContainer) {
    // this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  renderItems(data) {
    data.reverse().forEach((item) => {
      this._renderer(item);
    });
  }
  setItem(element) {
    this._container.prepend(element);
  }
}
