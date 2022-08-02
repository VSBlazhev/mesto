export class Card {
   
    constructor(name, link, selector, openFullScreen) {
        this._name = name
        this._link = link
        this._selector = selector
        this._openFullScreen = openFullScreen
    }

    _getTemplate(){
        const cardItem = document.querySelector(this._selector).content.cloneNode(true);
        return cardItem
    }

    generateCard(){
        this._cardElement = this._getTemplate()
        this._like = this._cardElement.querySelector('.card__like-button')
        this._delete = this._cardElement.querySelector('.card__delete-button')
        this._fulscreenButton = this._cardElement.querySelector('.card__fullscreen-button')
        this._cardText = this._cardElement.querySelector('.card__text')
        this._setEventListeners()

        this._cardElement.querySelector('.card__image').src= this._link
        this._cardText.textContent = this._name
        this._cardText.alt = this._name

        return this._cardElement
    }

    _likeCard(){
      this._like.classList.toggle('card__like-button_active')
    }

    _deleteCard(){
      this._delete.closest(".card").remove()
    }

    _setEventListeners(){
        this._cardElement.querySelector('.card__like-button').addEventListener('click', () =>{
            this._likeCard()
           
        });

        this._cardElement.querySelector('.card__delete-button').addEventListener('click', () =>{
            this._deleteCard()
        });

        this._fulscreenButton.addEventListener('click', () =>{
          this._openFullScreen(this._name, this._link)
        })
    }
}
