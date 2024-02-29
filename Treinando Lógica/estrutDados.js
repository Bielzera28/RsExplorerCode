// Estruturando dados com objetos
const patients = [
  {
    name: "Gabriel",
    age: 22,
    weight: 92.1,
    height: 1.73
  },
  {
    name: "Ariane",
    age: 26,
    weight: 72.3,
    height: 1.62
  },
  {
    name: "Asafe",
    age: 6,
    weight: 32.6,
    height: 1.21
  }
]

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(`${patient.name} possui ${patient.age} anos, pesa ${patient.weight} kilos e tem ${patient.height} metros de altura`)
}

alert(patientsNames)
