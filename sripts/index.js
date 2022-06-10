let formElement = document.querySelector('.popup__info-form');

let nameInput = document.querySelector('.popup__info-form-input_type_name');

let jobInput = document.querySelector('.popup__info-form-input_type_info');

let profileName = document.querySelector('.profile__name');

let profileInfo = document.querySelector('.profile__info');

let popUpCloseButton = document.querySelector('.popup__close-button');

let popUp = document.querySelector('.popup');

let editButton = document.querySelector('.profile__edit-button');

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
}

function popupClose() {
  popUp.classList.remove('popup_opened');
}

function openEditForm() {
  popUp.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}

formElement.addEventListener('submit', formSubmitHandler);

popUpCloseButton.addEventListener('click', popupClose);

editButton.addEventListener('click', openEditForm);
