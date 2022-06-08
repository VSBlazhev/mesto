// Находим форму в DOM
let formElement = document.querySelector(".popup__container");

console.log(formElement);

// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM

let nameInput = document.querySelector(".popup__name");
// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__info");
// Воспользуйтесь инструментом .querySelector()

let profileName = document.querySelector(".profile__name");

let profileInfo = document.querySelector(".profile__info");

nameInput.value = profileName.textContent;

jobInput.value = profileInfo.textContent;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

let popUpCloseButton = document.querySelector(".popup__close-button");

let popUp = document.querySelector(".popup");

function popupClose() {
  popUp.classList.remove("popup_opened");
  
}

popUpCloseButton.addEventListener("click", popupClose);

let editButton = document.querySelector(".profile__edit-button");

function openEditForm() {
  popUp.classList.add("popup_opened");
}

editButton.addEventListener("click", openEditForm);
