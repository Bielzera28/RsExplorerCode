//Controle de fluxo

//If e Else
let temperature = 37.4
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
  console.log("Febre alta")
} else if(mediumTemperature) {
  console.log("Febre moderada")
} else {
  console.log("Saudável")
}

//Switch
function calculate(number1, operator, number2) {
  let result

  switch(operator) {
    case "+":
      result = number1 + number2
      break
    case "-":
      result = number1 - number2
      break
    case "*":
      result = number1 * number2
      break
    case "/":
      result = number1 / number2
      break
    default:
      console.log("Não implementado")
      break
  }
  return result
}

console.log(calculate(4, "*", 8))
