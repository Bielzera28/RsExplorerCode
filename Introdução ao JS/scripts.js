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
