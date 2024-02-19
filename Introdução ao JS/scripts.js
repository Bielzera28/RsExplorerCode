 //Expressões e Operadores
 let number = 1;
 console.log(number) // unário
 console.log(number + 1) // binário
 console.log(false ? "alo" : "nada") //ternário

 //New
 let name1 = new String("Gabriel")
 name1.surName = "Aguiar"
 let age = new Number(23)
 console.log(name1, age)

 //TypeOf e delete
 let data = "1º de Abril"
 console.log(typeof data)

 const person = {
  name: "Gabriel",
  age: 25
 }

 console.log(person)
 console.log(delete person.age)
 console.log(person)

 //Operadores aritméticos
 console.log(10*3) // multiplicação
 console.log(30/3) // divisão
 console.log(10+10) // soma
 console.log(50-10) // subtração
 
 let remainder = 11 % 3 // resto da divisão
 console.log(remainder)

 let increment = 1
 ++increment 
 increment++
 console.log(increment++) //incremento após o retorno no console
 console.log(++increment) //incremento antes do retorno no console

 let decrement = 10
 console.log(--decrement) //decremento antes do retorno no console
 console.log(decrement--) // incremento após o retorno do console
 console.log(decrement)

 console.log(2**3) // exponencial

 //Grouping operator
 let total = (2 + 3) * 5
 console.log(total)