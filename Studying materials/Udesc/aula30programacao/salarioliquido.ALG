Algoritmo "semnome"
// Disciplina   : [Linguagem e L?gica de Programa??o]
// Professor   : Antonio Carlos Nicolodi 
// Descri??o   : Aqui voc? descreve o que o programa faz! (fun??o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 30/09/2022
Var
// Se??o de Declara??es das vari?veis 
   salario:  real
   inss: real
   aliquotainss: real
   aliquotairrf: real

Inicio
// Se??o de Comandos, procedimento, fun??es, operadores, etc... 
   escreval("Informe o seu salario: ")
   leia(salario)
   se (salario <= 1212) entao aliquotainss <- 0.075
      senao
           se (salario > 1212) E (salario <= 2427.35) entao aliquotainss <- 0.09
      senao
           se(salario > 2427.35) E (salario <= 3641.03) entao aliquotainss <- 0.12
      senao
           se (salario > 3641) entao aliquotainss <- 0.14
           fimse
           fimse
           fimse
           fimse
      escreval("O seu salario liquido ? de: ", salario)

Fimalgoritmo