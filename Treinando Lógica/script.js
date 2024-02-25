//Calculando media de um estudante
alert("Vamos calcular sua média! ")
let student = prompt("Qual o seu nome?")
let n1 = prompt("Qual a sua nota na primeira prova ?")
let n2 = prompt("Qual a sua nota na segunda prova ?")
let n3 = prompt("Qual a sua nota na terceira prova ?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
let result = average >= 6
average = average.toFixed(1)

if (result) {
  alert("Parabéns " + student + "! Sua média foi " + average)
} else if (average < 3) {
  alert(student + ", você está reprovado!")
} else {
  alert(student + ", estude para sua prova de recuperação! Sua média foi " + average) 
}