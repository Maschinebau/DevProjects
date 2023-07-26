export default class Slider {
  constructor(blockSelector, sliderItemSelector, indicatorSelector) {
    this._blockSelector = blockSelector
    this._sliderItemSelector = sliderItemSelector
    this._indicatorSelector = indicatorSelector
  }

  render() {
    this._block = document.querySelector(this._blockSelector)
    this._dots = this._block.querySelectorAll(this._indicatorSelector)
    this._items = this._block.querySelectorAll(this._sliderItemSelector)

    this._dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this._dots.forEach((dot) => dot.classList.remove('carousel__nav-dot_active'))
        this._items.forEach((item) => item.classList.remove('carousel__item-active'))
        
        dot.classList.add('carousel__nav-dot_active')
        this._items[index].classList.add('carousel__item-active')
      })
    })
  }
}