Algoritmo "semnome"
// Disciplina   : [Linguagem e L?gica de Programa??o]
// Professor   : Antonio Carlos Nicolodi 
// Descri??o   : Aqui voc? descreve o que o programa faz! (fun??o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/09/2022
Var
// Se??o de Declara??es das vari?veis 
   valor_de_fabrica: real
   aliquota_imposto: real
   margem_revenda: real
   valor_final: real

Inicio
// Se??o de Comandos, procedimento, fun??es, operadores, etc... 
escreval ("Este algoritmo calcula o valor final de um ve?culo")
   escreval ("Qual o valor de f?brica?")
   leia(valor_de_fabrica)
   aliquota_imposto <- 0.45
   margem_revenda <- 0.28
   valor_final <- (valor_de_fabrica * aliquota_imposto) + (valor_de_fabrica * margem_revenda) + valor_de_fabrica
   escreval ("A margem de revenda ? 28%, e o imposto  ? de 45%, ambos incidem diretamente sobre o Valor de F?brica, portanto o Valor Final ? de: R$" , valor_final)

Fimalgoritmo