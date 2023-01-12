const entrada1 = prompt("informe o peirmeiro valor:")
const entrada2 = prompt("segundo numero: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y 

 alert (
  "resultados:\n" +

 "somandos: " + x + "+" + y + " " + "=" + " " + soma +
  
  "\n diminuindos: " + x + "-" + y + " " + "=" + " " + subtracao +
  
  "\n multiplicandos: " + x + "×" + y + " " + "=" + " "  + multiplicacao +
 
  "\n dividindo: " + x + "÷" + y + " " + "=" + " "  + divisao 
  
)