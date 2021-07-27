// AULA 26
const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const inputWeight = e.target.querySelector('.weight')
  const inputHeight = e.target.querySelector('.height')
  
  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value) 
  
  imc = calcImc(weight, height)
  noteImc(imc)
  setResult(weight, height, imc)
})
