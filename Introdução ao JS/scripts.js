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