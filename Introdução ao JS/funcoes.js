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

//Outra maneira de entender função
function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}

const copo = fazerSuco("banana", "maça")
console.log(copo)

//Function scope
let subject = "create video"
function createThink(subject) {
  subject = "study"
  return subject
}

console.log(subject)
console.log(createThink(subject))

//Function hoisting
sayMyName()

function sayMyName() {
  console.log("Gabriel")
}

//Arrow Function
//ao invés de const howOld = function() {} será:
const howOld = (number) => {
  console.log(number)
}

howOld(18)

//Callback function - função como parametro para outra
function myPet(pet) {
  console.log("Antes da função callback")
  pet()
  console.log("Depois da callback")
}

myPet(
  () => {
    console.log("O nome do meu pet é Ayla")
  }
)

//Funções Construtoras
function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}
const gabriel = new Person("Gabriel")
const joao = new Person("João")

console.log(gabriel.walk())
console.log(joao.walk())