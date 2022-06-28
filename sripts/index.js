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
]


// Форма  профиля 
const infoFormElement = document.querySelector('.popup__info-form');

const nameInput = document.querySelector('.popup__info-form-input_type_name');

const jobInput = document.querySelector('.popup__info-form-input_type_info');

const profileName = document.querySelector('.profile__name');

const profileInfo = document.querySelector('.profile__info');



const editButton = document.querySelector('.profile__edit-button');

const infoFormPopUp = document.querySelector('.popup_content-type_edit-form')

const infoFormCloseButton = infoFormPopUp.querySelector('.popup__close-button')

// Форма добавления 

const addNewPlacePopUp = document.querySelector('.popup_content-type_add-place')

const addNewPlaceCloseButton = addNewPlacePopUp.querySelector('.popup__close-button')

const likeButtons = document.querySelectorAll('.card__like-button');

const addButton = document.querySelector('.profile__add-button');

const placeInput = document.querySelector('.popup__info-form-input_type_place-name');

const placeLinkInput = document.querySelector('.popup__info-form-input_type_place-link');

const addForm = document.querySelector('.popup__new-place');

const addPlace = addNewPlacePopUp.querySelector('.popup__add-button');


//Фулскрин 

const fullScreenPopUp = document.querySelector('.popup_content-type_figure')

const fullScreenPopUpCloseButton = fullScreenPopUp.querySelector('.popup__close-button')

const fullScreen =document.querySelector('.card__fullscreen-button');

const cardTemplate = document.querySelector('#card__template').content;

const cardImageLInk = document.querySelector('.popup__info-form-input_type_place-link');

const cardName = document.querySelector('.popup__info-form-input_type_place-name');

const elementsContainer = document.querySelector('.elements');

const popupFigure = document.querySelector('.popup__figure');

const fullScreenImage = document.querySelector('.popup__figure-image');

const fullScreenCaption = document.querySelector('.popup__figure-caption');

const popUpContainer = document.querySelector('.popup__container');


function renderInitial(){
initialCards.forEach(function (elm) {
  const cardItem = createCard(elm.name,elm.link)
  elementsContainer.append(cardItem);
});

  

}

function infoFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopUp(infoFormPopUp)
}



function openEditForm() {
  openPopUp(infoFormPopUp)
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}



function openAddForm(){
openPopUp(addNewPlacePopUp)
  cardName.value = '';
  cardImageLInk.value='';
}


function createCard(name, link){
  const cardItem = cardTemplate.cloneNode(true);
   cardItem.querySelector('.card__image').src= link;
   cardItem.querySelector('.card__image').alt= name;
   cardItem.querySelector('.card__text').textContent = name;

  const cardLike = cardItem.querySelector('.card__like-button');
  const cardDelete = cardItem.querySelector('.card__delete-button');

  cardLike.addEventListener('click', (evt) =>{
    evt.target.classList.toggle('card__like-button_active')})
  cardDelete.addEventListener('click', (evt) =>{
    evt.target.closest('.card').remove()})

    const cardFullScreenButton = cardItem.querySelector('.card__fullscreen-button');
    cardFullScreenButton.addEventListener('click',(evt)=>{
      fullScreenImage.alt = name;
      fullScreenImage.src = link;
      fullScreenCaption.textContent= name;
      openPopUp(fullScreenPopUp)
    })    

    return cardItem
}


function addNewCard (evt){
  evt.preventDefault();
 const cardItem = createCard(cardName.value,cardImageLInk.value);
  elementsContainer.prepend(cardItem);
  closePopUp(addNewPlacePopUp);
} 

function openPopUp(popUpName){
  popUpName.classList.add('popup_opened')
}

function closePopUp(popUpName){
  popUpName.classList.remove('popup_opened')
}









infoFormElement.addEventListener('submit', infoFormSubmitHandler);

infoFormCloseButton.addEventListener('click', () => closePopUp(infoFormPopUp));

editButton.addEventListener('click', openEditForm);

addNewPlaceCloseButton.addEventListener('click', () => closePopUp(addNewPlacePopUp));

fullScreenPopUpCloseButton.addEventListener('click', () => closePopUp(fullScreenPopUp));

addButton.addEventListener('click',openAddForm );

document.addEventListener('DOMContentLoaded', renderInitial);

addNewPlacePopUp.addEventListener('submit', addNewCard);