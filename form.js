const form = document.querySelector('form')
const placeholder = document.querySelector('.placeholder')

form.addEventListener('submit', event => {
event.preventDefault()
const input = form.querySelector('input').value
const regularPrice = 19.95
const currentPrice = regularPrice * 0.9

const completePrice = input => {
  if (input < 3) {
    return Math.round(input * currentPrice * 100)/100
  } else if (input < 5) {
    return Math.round(input * currentPrice * 80)/100
  } else {
    return Math.round(input * currentPrice * 70)/100
  }

  } 
placeholder.innerHTML = `Gesamt: ${completePrice(input)} Euro`
 }
)
