export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement
    this._handleEscClose = this._handleEscClose.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  _handlePopupOverlayClose(evt) {
    if (evt.target.classList.contains('popup__overlay')) {
      this.close()
    };
  }

  open() {
    this._popupElement.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    this._popupElement.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose)
  }

  setEventListeners() {
    // this._popupElement.queryElement('.popup__close-button')
    // .addEventListener('click', () => {
    //   this.close()
    // })

    // навешиваю слушателя на закрытие попапа по клику на оверлэй
    this._popupElement.addEventListener('mousedown', (evt) => {
      this._handlePopupOverlayClose(evt)
    })
  }
}