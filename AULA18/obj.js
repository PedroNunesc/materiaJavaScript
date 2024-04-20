const professor = {
    nome: 'Vitor'
}
console.log(professor)

const professor1 = {
    nome: 'vitor',
    idade: 17
}
console.log(professor1)

const professor2 = {
    nome: 'vitor',
    idade: 17,
    tarefas:['Dar aula','responder duvidas'],
    contarPiada: function(){
    console.log("é pa vê ou pra comer?")
    }
}
professor2.contarPiada() 

// para executar uma funçao nao é para usar console.log mais sim o nome do objeto ponto o nome
// da variavel como está a cima.

// conta: function(num1,num2){
// console.log(num1 + num2)}
// professor.conta(2,5)
// = 7
//}

