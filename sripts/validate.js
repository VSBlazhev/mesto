
const showError = (formElement,inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
inputElement.classList.add(config.inputErrorClass)
errorElement.textContent = errorMessage
errorElement.classList.add(config.errorClass)
}

const hideError = (formElement,inputElement, config) =>{
const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
inputElement.classList.remove(config.inputErrorClass)
errorElement.textContent = ''
errorElement.classList.remove(config.errorClass)
}

const checkInputValidity = (formElement, inputElement, config) =>{
  if (!inputElement.validity.valid){
    showError(formElement,inputElement, inputElement.validationMessage, config)
  } else {hideError(formElement,inputElement, config) }
}

const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid
  })
}


const toggleButtonState = (inputList, buttonElement, config) =>{
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass)
    buttonElement.setAttribute('disabled', 'disabled')
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass)
    buttonElement.removeAttribute('disabled')
  }
}

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  
  toggleButtonState(inputList, buttonElement, config)
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config)
    });
  });
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement,config)
  });
};

const checkForm = (config, popup) =>{
  const formElement = popup.querySelector(config.formSelector)
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config)
}


enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__info-form-input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 

 