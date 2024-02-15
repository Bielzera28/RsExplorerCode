//Functions
//declaração ou function statement
function createPhrases() {
  console.log("Estudar é bom")
  console.log("Persistência e paciência")
  console.log("Revisar sempre")
}

//executar função/rodar/chamar/invocar
//execute, run, call, invoke

createPhrases()

//Parâmetros e Argumentos
/*const sum = function(number1, number2) { //definindo parâmetros dentro do ()
  console.log(number1 + number2)
}

sum(2,3) // argumentos*/

//Retornando valores dentro da função
const sum = function(number1, number2) {
  total = number1 + number2
  return total
}

let number1 = 35
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)