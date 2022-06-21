const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const formElement = document.querySelector('.popup__info-form');

const nameInput = document.querySelector('.popup__info-form-input_type_name');

const jobInput = document.querySelector('.popup__info-form-input_type_info');

const profileName = document.querySelector('.profile__name');

const profileInfo = document.querySelector('.profile__info');

const popUpCloseButton = document.querySelector('.popup__close-button');

const popUp = document.querySelector('.popup');

const editButton = document.querySelector('.profile__edit-button');

const likeButtons = document.querySelectorAll('.card__like-button');

const addButton = document.querySelector('.profile__add-button');

const placeInput = document.querySelector('.popup__info-form-input_type_place-name');

const placeLinkInput = document.querySelector('.popup__info-form-input_type_place-link');

const addForm = document.querySelector('.popup__new-place');

const fullScreen =document.querySelector('.card__fullscreen-button');

const cardTemplate = document.querySelector('#card__template').content;

const cardImageLInk = document.querySelector('.popup__info-form-input_type_place-link');

const cardName = document.querySelector('.popup__info-form-input_type_place-name');

const elementsContainer = document.querySelector('.elements');

const addPlace = document.querySelector('.popup__add-button');

const popupFigure = document.querySelector('.popup__figure');

const fullScreenImage = document.querySelector('.popup__figure-image');

const fullScreenCaption = document.querySelector('.popup__figure-caption');

const popUpContainer = document.querySelector('.popup__container');

function renderInitial(){
initialCards.forEach(function (elm) {
  const cardItem = cardTemplate.cloneNode(true);
  const cardLike = cardItem.querySelector('.card__like-button');
  const cardDelete = cardItem.querySelector('.card__delete-button');
  const cardFullScreenButton = cardItem.querySelector('.card__fullscreen-button');
 
  cardItem.querySelector('.card__image').src= elm.link;
  cardItem.querySelector('.card__text').textContent = elm.name;
  cardLike.addEventListener('click', (evt) =>{
    evt.target.classList.toggle('card__like-button_active')})
  cardDelete.addEventListener('click', (evt) =>{
    evt.target.parentElement.remove()})

  
  cardFullScreenButton.addEventListener('click',(evt)=>{
    openFullScreen()
    fullScreenImage.src = elm.link
    fullScreenCaption.textContent= elm.name
  })  
  elementsContainer.append(cardItem);
});

  

}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  popupClose()
}

function popupClose() {
  popUp.classList.remove('popup_opened');
}

function hideUnActiveContent() {
  popupFigure.style.display = 'none';
  formElement.style.display='none';
  addForm.style.display='none';
}


function openEditForm() {
  hideUnActiveContent()
  popUp.classList.add('popup_opened');
  popUpContainer.classList.remove('popup__container_content-type_figure');
  formElement.style.display='flex'
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}






function openAddForm(){
  hideUnActiveContent()
  popUp.classList.toggle('popup_opened');
  popUpContainer.classList.remove('popup__container_content-type_figure');
  addForm.style.display='flex';
  cardName.value = '';
  cardImageLInk.value='';
}

function addNewCard (evt){
  evt.preventDefault();
  const cardItem = cardTemplate.cloneNode(true);
  cardItem.querySelector('.card__image').src= cardImageLInk.value;
  cardItem.querySelector('.card__text').textContent = cardName.value;

  const cardLike = cardItem.querySelector('.card__like-button');
  const cardDelete = cardItem.querySelector('.card__delete-button');

  cardLike.addEventListener('click', (evt) =>{
    evt.target.classList.toggle('card__like-button_active')})
  cardDelete.addEventListener('click', (evt) =>{
    evt.target.parentElement.remove()})

    const cardFullScreenButton = cardItem.querySelector('.card__fullscreen-button');
    cardFullScreenButton.addEventListener('click',(evt)=>{
      openFullScreen()
      fullScreenImage.src = cardImageLInk.value
      fullScreenCaption.textContent= cardName.value
    })    

  elementsContainer.prepend(cardItem);
  popupClose()
}

function openFullScreen(){
  hideUnActiveContent();
  popUp.classList.toggle('popup_opened');
  popUpContainer.classList.add('popup__container_content-type_figure');
  popupFigure.style.display='flex';
}


formElement.addEventListener('submit', formSubmitHandler);

popUpCloseButton.addEventListener('click', popupClose);

editButton.addEventListener('click', openEditForm);

addButton.addEventListener('click',openAddForm );

document.addEventListener('DOMContentLoaded', renderInitial);

addPlace.addEventListener('click', addNewCard);