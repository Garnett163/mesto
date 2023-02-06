const editBtn = document.querySelector(".profile__edit-button");
const closeBtn = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input-name");
const inputAbout = document.querySelector(".popup__input-about");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const saveBtn = document.querySelector(".popup__save-button");

function togglePopup() {
  popup.classList.toggle("popup_open");
}

editBtn.addEventListener("click", togglePopup);
closeBtn.addEventListener("click", togglePopup);
saveBtn.addEventListener("click", togglePopup);

inputName.value = title.textContent;
inputAbout.value = subtitle.textContent;

function handleFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = inputName.value;
  subtitle.textContent = inputAbout.value;
}

popupForm.addEventListener("submit", handleFormSubmit);

// closeBtn.addEventListener("keypress", (evt) => {
//   if (evt.key === "Escape") {
//     popup.classList.remove("popup_open");
//   }
// });
