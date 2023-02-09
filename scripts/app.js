const editBtn = document.querySelector(".profile__edit-button");
const closeBtn = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");
const inputName = document.querySelector("#name");
const inputAbout = document.querySelector("#about");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

function openPopup() {
  popup.classList.add("popup_open");
  inputName.value = title.textContent;
  inputAbout.value = subtitle.textContent;
}

function closePopup() {
  popup.classList.remove("popup_open");
}

editBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = inputName.value;
  subtitle.textContent = inputAbout.value;
  closePopup();
}

popupForm.addEventListener("submit", handleFormSubmit);
