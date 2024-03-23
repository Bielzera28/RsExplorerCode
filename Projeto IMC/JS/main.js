import { Modal } from "./modal.js";

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = function(event) {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if(showAlertError) {
    console.log("mostrar o alerta de erro")
    return 
  }

  const result = imc(weight, height)
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  Modal.open()
}

function imc(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function notNumber(value) {
  return isNaN(value) || value == ""
}
