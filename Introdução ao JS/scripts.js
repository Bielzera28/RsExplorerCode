//For

for(let i = 10; i > 0; i--) {
  if(i === 5) {
    continue;
  }
  console.log(i)
}

//While - sem parada definida

let n = 7000
while(n > 10) {
  console.log(n)
  n /= 2;
  
}

//For Of - String e Array

let name = "Gabriel"
let names = ["Asafe", "Ariane", "Romildo"]

for(let char of names) {
  console.log(char)

}

//For In - Objetos

let person = {
  name: "John",
  age: 20,
  weight: 90.2
}

for(let property in person) {

  console.log(person[property])
}