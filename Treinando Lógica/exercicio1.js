//Exercicio 1
let number1 = prompt("Escolha o primeiro número:")
let number2 = prompt("Escolha o segundo número:")

alert("A soma dos dois números é " + (Number(number1) + Number(number2)))
alert("A subtração dos dois números é " + (Number(number1) - Number(number2)))
alert("A multiplicação dos dois números é " + (Number(number1) * Number(number2)))
alert("A divisão dos dois números é " + (Number(number1) / Number(number2)))
alert("O resto da divisão dos dois números é " + (Number(number1) % Number(number2)))

let rest = number1 % number2 
if(rest == 0) {
  alert("A soma dos dois números é par!")
} else {
  alert("A soma dos dois números é ímpar!")
}

if(number1 == number2) {
  alert("Os dois números são iguais!")
} else {
  alert("Os dois números são diferentes!")
}