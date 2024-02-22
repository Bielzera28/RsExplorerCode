//For

for(let i = 10; i > 0; i--) {
  if(i === 5) {
    continue;
  }
  console.log(i)
}

//While

let n = 7000
while(n > 10) {
  console.log(n)
  n /= 2;
  
}

//For Of

let name = "Gabriel"
let names = ["Asafe", "Ariane", "Romildo"]

for(let char of names) {
  console.log(char)

}

