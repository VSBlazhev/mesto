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

let formElement = document.querySelector('.popup__info-form');

let nameInput = document.querySelector('.popup__info-form-input_type_name');

let jobInput = document.querySelector('.popup__info-form-input_type_info');

let profileName = document.querySelector('.profile__name');

let profileInfo = document.querySelector('.profile__info');

let popUpCloseButton = document.querySelector('.popup__close-button');

let popUp = document.querySelector('.popup');

let editButton = document.querySelector('.profile__edit-button');

let likeButtons = document.querySelectorAll('.card__like-button');

let addButton = document.querySelector('.profile__add-button');

let placeInput = document.querySelector('.popup__info-form-input_type_place-name');

let placeLinkInput = document.querySelector('.popup__info-form-input_type_place-link');

let addForm = document.querySelector('.popup__new-place');

let fullScreen =document.querySelector('.card__fullscreen-button');

let cardTemplate = document.querySelector('#card__template').content;

//let cardItem = cardTemplate.cloneNode(true);

let cardImageLInk = document.querySelector('.popup__info-form-input_type_place-link');

let cardName = document.querySelector('.popup__info-form-input_type_place-name');

let elementsContainer = document.querySelector('.elements')

let addPlace = document.querySelector('.popup__add-button')

//let fullScreenImage = document.querySelector('.popup__figure-image')

//let fullScreenCaption = document.querySelector('.popup__figure-caption')

let popupFigure = document.querySelector('.popup__figure');

const fullScreenImage = document.querySelector('.popup__figure-image')

const fullScreenCaption = document.querySelector('.popup__figure-caption')

//function addCard(){
//cardItem.querySelector('.card__image').src = cardImageLInk.textContent
//cardItem.querySelector('.card__text').textContent = cardName.textContent
//elementsContainer.append(cardItem)}

function renderCard(name, link){
  const cardItem = cardTemplate.cloneNode(true);
  cardItem.querySelector('.card__image').src= link;
  cardItem.querySelector('.card__text').textContent = name;
  elementsContainer.prepend(cardItem);
}



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

function openEditForm() {
  popUp.classList.add('popup_opened');
  formElement.style.display='flex'
  addForm.style.display='none'
  fullScreenImage.style.display='none'
  fullScreenCaption.style.display='none'

  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}




 likeButtons.forEach(function (Element){
  Element.addEventListener('click', function(){Element.classList.toggle('card__like-button_active')})
})

function openAddForm(){
  popUp.classList.toggle('popup_opened');
  formElement.style.display='none'
  fullScreenImage.style.display='none'
  fullScreenCaption.style.display='none'
  addForm.style.display='flex'
  cardName.value = ''
  cardImageLInk.value=''
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
  popUp.classList.toggle('popup_opened');
  formElement.style.display='none'
  addForm.style.display='none'
  //fullScreenImage.style.display='flex'
  //fullScreenCaption.style.display='flex'
popupFigure.style.display='flex'
}


formElement.addEventListener('submit', formSubmitHandler);

popUpCloseButton.addEventListener('click', popupClose);

editButton.addEventListener('click', openEditForm);

addButton.addEventListener('click',openAddForm )

document.addEventListener('DOMContentLoaded', renderInitial);

addPlace.addEventListener('click', addNewCard);