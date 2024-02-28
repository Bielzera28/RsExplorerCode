//Jogo da adivinhação
let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)
const match = Number(result) == randomNumber
let attempts = 1;

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente")
  attempts++
}

if (attempts != 1) {
  alert(`Parabens você acertou em ${attempts} tentativas`)
  
} else {
  alert(`Parabens você acertou em 1 tentativa`)
}

