const nomeAluno = prompt("Nome aluno")

const nota1 = prompt("Primeira nota")
const nota2 = prompt("Segunda nota")
const nota3 = prompt("Terceira nota")

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3

alert("O aluno " + nomeAluno + " teve a média " + media)