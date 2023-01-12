const nomeVeiculo1 = prompt ("informe o nome do primeiro veículo: ")

const  nomeVeiculo2 = prompt ("informe o nome do segundo veículo: ") 

const velocidadeVeiculo1 = prompt ("Informe a velocidade do: " + nomeVeiculo1)

const velocidadeVeiculo2 = prompt ("Informe a velocidade do: " + nomeVeiculo2)

const x = parseFloat (velocidadeVeiculo1)

const y = parseFloat (velocidadeVeiculo2)

if ( x > y ) {
  alert ("O veiculo " + nomeVeiculo1 + " é mais rápido.")
} 
else if (x === y) {
  alert("A velocidade dos veículos " + nomeVeiculo1 +  " e " + nomeVeiculo2 + " é igual." )
}
else if (x < y) {
  alert  ("O veículo " + nomeVeiculo2 + " é mais rápido.")
}
