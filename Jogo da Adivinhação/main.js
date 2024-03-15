let randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let attempts = 1;

function handleTryClick(event) {
  event.preventDefault();
  let inputNumber = document.getElementById("inputNumber").value.trim();
  const errorMessage = document.getElementById("mensagemErro");

  if (inputNumber === "" && !Number.isInteger(parseFloat(inputNumber))) { 
    errorMessage.style.display = "block";
    return; 
  } else {
    errorMessage.style.display = "none";
    attempts++;
  }
  
  const userNumber = Number(inputNumber);

  if (userNumber === randomNumber) {
    toggleScreen();
    document.querySelector(".screen2 h2").innerText = `Você acertou em ${attempts} tentativas.`;
  }

  document.getElementById("inputNumber").value = ""

}

function handleResetClick(){
  toggleScreen()
  attempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  document.querySelector(".screen1").classList.toggle("hide")
  document.querySelector(".screen2").classList.toggle("hide")
}

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", function(e){
  if(e.key == "Enter" && document.querySelector(".screen1").classList.contains("hide")){
    handleTryClick()
  } 
 

})