//Exercicio 2
const students = [
  {
    name: "Gabriel",
    note1: 10,
    note2: 7
  },
  {
    name: "Asafe",
    note1: 8,
    note2: 5
  },
  {
    name: "Ariane",
    note1: 9,
    note2: 6
  }
]

function media(note1, note2) {
  return (note1 + note2) / 2
}

for(let student of students) {
  if(media(student.note1, student.note2) > 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${media(student.note1, student.note2)} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso! `)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${media(student.note1, student.note2)} \n Não foi dessa vez, ${student.name}! Tente novamente! `)
  }
}
