//Prototype

//Type conversion coersion
console.log("9" + 5) //converte 5 em string pra não ter problema = 95
console.log(Number("9") + 5)

//String em números
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

//contando caracteres e digitos
let word = "Paralelepipedo"
console.log(word.length)
let number2 = 1234
console.log(String(number2).length)

//Casas decimais
let number3 = 1221.4141251345135
console.log(number3.toFixed(2).replace(".",","))

//Maiusculas e minusculas
let phrase = "Programar é muito legal"
console.log(phrase.toLowerCase())
console.log(phrase.toUpperCase()) 

//Separando strings
let text = "Eu quero programar"
let myArray = text.split(" ")
console.log(myArray)
let textWithUnderscore = myArray.join("_")
console.log(textWithUnderscore.toLowerCase())

//Encontrando palavras em frases
let hunt = "Eu quero viver!"
console.log(hunt.includes("Amor"))

//Criar array com constructor
let myArray2 = new Array("a","b","c") // cria array com esses itens
console.log(myArray2)

let myArray3 = new Array(10)
console.log(myArray3) // criando array vazia com 10 espaços

//Contar elementos de um array
console.log(["a", "b", "c"].length)
console.log([
  "a",
  {type: "array"},
  function() {return "alo"}
][2]()) // mostra o que tem no espaço 2 e o () executa a função

//String para arrays - cadeia de caracteres em elementos de array
let palavra = "manipulação"
console.log(Array.from(palavra))

//Manipulando Arrays
let techs = ["html", "css", "js"]
techs.push("node.js") // adiciona ao final da array
techs.unshift("react") // adiciona ao inicio da array
// techs.pop()  remove ultimo elemento da array
// techs.shift()  remove primeiro elemento da array
// console.log(techs.slice(1, 3))  pega somente elementos dentro do parenteses
// techs.splice(1,1) remove elemento a partir da posição 1, segunda numero seriam quantos itens serão removidos
let index = techs.indexOf("css") // posição do elemento no array
console.log(index) // retorna posição
techs.splice(index,1) // remove elemento a partir do index (inclusive ele), e quantos elementos mais
console.log(techs)

