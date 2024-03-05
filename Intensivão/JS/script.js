// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

console.log("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let number1 = 10
let number2 = 20

console.log(number1 + number2)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let value = {
  name: "Gabriel",
  age: 25
}

if (typeof value.age === 'number') {
  console.log("É um número")
} else {
  console.log("Não é um número")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let student = {
  name: "Gabriel",
  age: 25
}

if (typeof value.age === 'string') {
  console.log("É uma string")
} else {
  console.log("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let booleano = true

if (typeof booleano === 'boolean') {
  console.log("É um booleano")
} else {
  console.log("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

console.log(number2 - number1)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

console.log(number1 * number2)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

console.log(number2 / number1)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let number3 = 7
let rest = number3 % 2

if(rest == 0) {
  console.log("É um número par")
} else {
  console.log("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let number4 = 7
let rest2 = number4 % 2

if(rest2 != 0) {
  console.log("É um número ímpar")
} else {
  console.log("Não é um número ímpar")
}