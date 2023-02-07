const editBtn = document.querySelector(".profile__edit-button");
const closeBtn = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");
const inputName = document.querySelector("#name");
const inputAbout = document.querySelector("#about");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

function togglePopup() {
  popup.classList.toggle("popup_open");
  inputName.value = title.textContent;
  inputAbout.value = subtitle.textContent;
}

editBtn.addEventListener("click", togglePopup);
closeBtn.addEventListener("click", togglePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = inputName.value;
  subtitle.textContent = inputAbout.value;
  togglePopup();
}

popupForm.addEventListener("submit", handleFormSubmit);

// closeBtn.addEventListener("keypress", (evt) => {
//   if (evt.key === "Escape") {
//     popup.classList.remove("popup_open");
//   }
// });
