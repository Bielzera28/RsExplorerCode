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