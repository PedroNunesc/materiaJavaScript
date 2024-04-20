const readlineSync = require("readline-sync");
function pergunta(readlineSync){
let pergunta1 = readlineSync.question("Qual seu nome? ")
let pergunta2 = readlineSync.question("Qual sua idade? ")
let pergunta3 = readlineSync.question("Qual sua profissão? ")
dados = {
    nome: pergunta1,
    idade: pergunta2,
    profissão: pergunta3
}
}
pergunta(readlineSync)
console.log(dados)
console.log(typeof(dados))