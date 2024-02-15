//Var
var clima = "Quente"
console.log(clima)

clima = "Frio"
console.log(clima)

//Let
let adjetivo = "Bonito"
console.log(adjetivo)

adjetivo = "Feio"
console.log(adjetivo)

//Const
const moeda = "Real"
console.log(moeda)

//moeda = "Peso"
//console.log(moeda) -> Gera erro por que valor não pode ser alterado

//TypeOf

let aleatorio = ""
console.log(typeof aleatorio)

let numero = 1
console.log(typeof numero)

let booleano = true
console.log(typeof booleano)

//Scope e var
console.log(x) // undefined por conta do hoisting - existe em algum lugar a váriavel X
var x = 0
console.log(x)

//scope let
let y = 1
{
  y = 2
  console.log(y)
}
console.log(y) // caso haja a troca do valor da váriavel em outro escopo, 
//por conta do hoisting o valor será alterado no escopo local que foi definido a variavel inicialmente

//Nomeando variaveis
let myName = "Gabriel" //camelCase
let my_Age = 22 //snake_Case
//escrever variavel em inglês