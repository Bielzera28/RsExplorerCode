//Atribuições conjuntas
let height, age, isHuman
height = "1,73m"
age = 18
isHuman = true

console.log(age, isHuman, height)

//Concatenação de interpolação de variáveis
console.log("o rapaz possui " + height + " de altura e " + age + " anos de idade")

//Interpolando valores com template literals
console.log(`o rapaz possui ${age} anos de idade e ${height} de altura`)

//Object
const person = {
  name: "João",
  age: 18,
  weight: 90.5,
  isAdmin: true
}

console.log(person.name)

//Arrays
const animals = [
  "Lion",
  "Monkey",
  {
    name: "Cat",
    age: 2
  },
  "Whale"
]

console.log(animals[3])
console.log(animals[2].name) //Objeto dentro da array 

// EXERCICIOS

// 1 - Declare uma váriavel de nome weight
let weight;

// 2 - Que tipo de dado é a variável acima?
console.log(typeof weight)

// 3 - Declarare uma variável e atribua valores para cada um dos dados:
// name (string) , age (number) , weight (number), isSubscribed (boolean)
let name = "Gabriel"
age = "16"
weight = 94.5
let isSubscribed = true

// 4 - A variável student abaixo é de que tipo de dado?
//let student =  {};
//console.log (typeof student)

// 4.1 - atribua as mesmas propriedades e valores do exercicio 3
let student =  {
  name: "Gabriel",
  age: "16",
  weight: 92.6,
  isSubscribed: true
};

//4.2 - Mostre no console a seguinte mensagem:
//<name> de idade <age> pesa <weight> kg

console.log(`${student.name} de idade ${student.age} anos, pesa ${student.weight} kgs`)

//5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio

let students = []

//6 - Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copie e cole , use o objeto criado e insira ele na array)

students = [
  student
]

console.log(students)

//7 - Coloque no console o valor da posição zero do Array acima

console.log(students[0])

//8 - Crie um novo student e coloque na posição 1 do array students

const john = {
  name: "John",
  age: 20,
  weight: 96.7,
  isSubscribed: false
}

students = [
  student,
  john
]

// students[1] = john (Caso tivesse mais itens na array, colocaria o john na posição 1)
console.log(students[1])

//9 - sem rodar o código, responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
// console.log(a)
// var a = 1

//Undefined , pois o hoisting faz com que o "a" tenha um valor , porém ele foi definido após o console.log
console.log(a)
var a = 1
