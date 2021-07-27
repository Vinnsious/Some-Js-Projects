calcImc = (weight, height) => {
  const imcResult = weight / (height ** 2)

  return imcResult.toFixed(2)
}

typeImc = () => {
  const typeImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
  return typeImc
}

noteImc = imc => {
  if (imc < 18.5) imcNote = typeImc()[0]
  else if (imc <= 24.99) imcNote = typeImc()[1] 
  else if (imc <= 29.99) imcNote = typeImc()[2]
  else if (imc <= 34.99) imcNote = typeImc()[3]
  else if (imc <= 39.99) imcNote = typeImc()[4]
  else imcNote = typeImc()[5]

  return imcNote
}

createParagraph = () => {
  const p = document.createElement('p')

  return p
}

createResult = () => {
  const result = document.querySelector('.result')
  return result
}

createParagraphValid = (imc) => {  
  const result = createResult()
  const p = createParagraph()

  p.classList.add('valid-result')
  p.innerHTML = `Seu IMC é ${imc} (${imcNote})`
  result.appendChild(p)
}

paragraphInvalidW = () => {
  const result = createResult()
  const p = createParagraph()
  
  p.classList.add('invalid-result')
  p.innerHTML = `Peso inválido!`
  result.appendChild(p)
}

createParagraphInvalidH = () => {
  const result = createResult()
  const p = createParagraph()

  p.classList.add('invalid-result')
  p.innerHTML = `Altura inválida!`
  result.appendChild(p)
}

setResult = (inputW, inputH, imc) => {
  const result = createResult()
  result.innerHTML = ''

  if (isNaN(inputW) || inputW === '' || inputW <= 0) {
    paragraphInvalidW()
  }
  else if (isNaN(inputH) || inputH === '' || inputH <= 0) {
    createParagraphInvalidH()
  }
  else {
    createParagraphValid(imc)
  }
}
