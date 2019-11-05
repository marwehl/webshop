const radioButtons = document.querySelectorAll('input[type=radio]')
const radioButtonsArray = Array.from(radioButtons)

const tabIndex =  localStorage.getItem("tabIndex") != 0 
&& localStorage.getItem("tabIndex")


radioButtonsArray.filter(radio => radio.id === tabIndex)


for(let radio of radioButtonsArray) {
  radio.addEventListener('click', () => {
    localStorage.setItem('tabIndex', radio.id)
  }
  )
}
