import { accessory, clothes, shoes } from "./data.js";
import { getDayInfo } from "./utils.js";


document.querySelector('.radio-btn').addEventListener('click', function () {
    document.querySelector('.radio-inner').classList.toggle('active')
    document.querySelector('body').classList.toggle('dark-mode')
})

const cardsTemplate = document.getElementById('cards-item')


const cardsClothesContainer = document.querySelector('.cards__clothes')
const cardsShoesContainer = document.querySelector('.cards__shoes')
const cardsAccessoryContainer = document.querySelector('.cards__accessory')

clothes.forEach(el => {
    const element = cardsTemplate.content.cloneNode(true)
    element.querySelector('.cards-item__image').src = el.link
    element.querySelector('.cards-item__title').textContent = el.name
    element.querySelector('.cards-item__date').textContent = getDayInfo(new Date(el.date))
    cardsClothesContainer.appendChild(element)

} )
shoes.forEach(el => {
    const element = cardsTemplate.content.cloneNode(true)
    element.querySelector('.cards-item__image').src = el.link
    element.querySelector('.cards-item__title').textContent = el.name
    element.querySelector('.cards-item__date').textContent = getDayInfo(new Date(el.date))
    cardsShoesContainer.appendChild(element)
})
accessory.forEach(el => {
    const element = cardsTemplate.content.cloneNode(true)
    element.querySelector('.cards-item__image').src = el.link
    element.querySelector('.cards-item__title').textContent = el.name
    element.querySelector('.cards-item__date').textContent = getDayInfo(new Date(el.date))
    cardsAccessoryContainer.appendChild(element)
})

const goTopBtn = document.querySelector('.go-top')
goTopBtn.addEventListener('click', goTop)
window.addEventListener('scroll', trackScroll)
function trackScroll() {
    const offset = window.scrollY
    const coords = document.documentElement.clientHeight
    if (offset > coords) {
        goTopBtn.classList.add('go-top--show')
    } else {
        goTopBtn.classList.remove('go-top--show')
    }
}
function goTop() {
    if (window.scrollY >0) {
        console.log(1)
        window.scrollBy(0, -75)
        setTimeout(goTop, 0)
    }
}
let inputModal = document.querySelector('.count')
let modal = document.querySelector('.modal')
let buy = document.querySelectorAll('.buy')
let modalClose = modal.querySelectorAll('.modal__close')
let buyButton = document.getElementById('buy__button')
let textarea = document.querySelector('.textarea')
buy.forEach(el => el.addEventListener('click', ()=>{
    modal.style.display = 'block'
}))
modalClose.forEach(el => el.addEventListener('click', ()=>{
    modal.style.display = 'none'
}))
buyButton.addEventListener('click', ()=>{
    console.log(textarea.value)
    if (inputModal.value < 1) return false
    let color
    for (let radio of document.querySelectorAll('[name="color"]')) {
       if (radio.checked) {
            color = radio.value
       }
    }
    if (!color) return false

    alert('Заказ оформлен')
})