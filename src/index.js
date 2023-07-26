import './scss/styles.scss'
import Popup from './components/Popup.js'
import Slider from './components/Slider.js'

const regPopup = new Popup(document.querySelector('.popup_type_reg'))
const regButtons = document.querySelectorAll('.reg-button')

regButtons.forEach( item => {
  item.addEventListener('click', regPopup.open)
})
regPopup.setEventListeners()

const teamSlider = new Slider(
  '.team',
  '.carousel__item',
  '.carousel__nav-dot',
)
teamSlider.render()

const battlesSlider = new Slider(
  '.battles',
  '.carousel__item',
  '.carousel__nav-dot',
)
battlesSlider.render()