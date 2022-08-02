import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";


// Форма  профиля
const infoFormElement = document.querySelector(".popup__info-form");

const nameInput = document.querySelector(".popup__info-form-input_type_name");

const jobInput = document.querySelector(".popup__info-form-input_type_info");

const profileName = document.querySelector(".profile__name");

const profileInfo = document.querySelector(".profile__info");

const buttonEdit = document.querySelector(".profile__edit-button");

const infoFormPopUp = document.querySelector(".popup_content-type_edit-form");

const infoFormCloseButton = infoFormPopUp.querySelector(".popup__close-button");

// Форма добавления

const addNewPlacePopUp = document.querySelector(".popup_content-type_add-place");

const addNewPlaceCloseButton = addNewPlacePopUp.querySelector(".popup__close-button");

const addButton = document.querySelector(".profile__add-button");

//Фулскрин

const fullScreenPopUp = document.querySelector(".popup_content-type_figure");

const fullScreenPopUpCloseButton = fullScreenPopUp.querySelector(".popup__close-button");

const cardImageLInk = document.querySelector(".popup__info-form-input_type_place-link");

const cardName = document.querySelector(".popup__info-form-input_type_place-name");

const elementsContainer = document.querySelector(".elements");

const fullScreenImage = document.querySelector(".popup__figure-image");

const fullScreenCaption = document.querySelector(".popup__figure-caption");

const allPopUps = document.querySelectorAll(".popup");

const configuration = {
  formSelector: ".popup__form",
  inputSelector: ".popup__info-form-input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_type_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function closeClick() {
  const popUpArr = Array.from(allPopUps);
  popUpArr.forEach(function (elm) {
    elm.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        closePopUp(elm);
      }
    });
  });
}

closeClick();

function closeEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopUp = document.querySelector(".popup_opened");
    closePopUp(openedPopUp);
  }
}

function infoFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopUp(infoFormPopUp);
}

function openEditForm() {
  openPopUp(infoFormPopUp);

  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
  validateEditPopup.checkForm();
}

function openAddForm() {
  openPopUp(addNewPlacePopUp);
  
  cardName.value = "";
  cardImageLInk.value = "";
  validateAddPopup.toggleButtonState();
}

function openFullScreen(name, link){
  fullScreenImage.alt = name;
  fullScreenImage.src = link;
  fullScreenCaption.textContent = name;
  openPopUp(fullScreenPopUp);
}

const validateAddPopup = new FormValidator(configuration, addNewPlacePopUp)
validateAddPopup.enableValidation()

const validateEditPopup = new FormValidator(configuration,infoFormPopUp )
validateEditPopup.enableValidation()

function createCard(name, link, selector, openFullScreen){
  const card = new Card(name, link, selector, openFullScreen )
  return card.generateCard()
}

function addNewCard(evt) {
  evt.preventDefault();
  const cardItem = createCard(cardName.value, cardImageLInk.value, '#card__template', openFullScreen ); 

  elementsContainer.prepend(cardItem); 

  closePopUp(addNewPlacePopUp); 

}

function openPopUp(popUpName) {
  popUpName.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
}

function closePopUp(popUpName) {
  popUpName.classList.remove("popup_opened");
  document.addEventListener("keydown", closeEsc);
}

function renderInitialCards(){
  initialCards.forEach((item) => {
    const cardItem = createCard(item.name,item.link, '#card__template', openFullScreen);
  document.querySelector(".elements").append(cardItem);
}); }

infoFormElement.addEventListener("submit", infoFormSubmitHandler);

infoFormCloseButton.addEventListener("click", () => closePopUp(infoFormPopUp));

buttonEdit.addEventListener("click", openEditForm);

addNewPlaceCloseButton.addEventListener("click", () =>
  closePopUp(addNewPlacePopUp)
); 

fullScreenPopUpCloseButton.addEventListener("click", () =>
  closePopUp(fullScreenPopUp)
);

addButton.addEventListener("click", openAddForm);

addNewPlacePopUp.addEventListener("submit", addNewCard);

document.addEventListener("DOMContentLoaded", renderInitialCards)