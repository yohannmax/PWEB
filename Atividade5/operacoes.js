const num1 = prompt("Primeiro número")
const num2 = prompt("Segundo número")

const soma = parseFloat(num1) + parseFloat(num2)
const sub = parseFloat(num1) - parseFloat(num2)
const div = parseFloat(num1) / parseFloat(num2)
const resto = parseFloat(num1) % parseFloat(num2)

alert("Soma: " + soma + "\n" + 
	  "Subtração: " + sub + "\n" + 
	  "Divisão: " + div + "\n" + 
	  "Resto Divisão: " + resto)