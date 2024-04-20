let carrinho = []
let objeto1 = {
    nome: 'abacaxi',
    disponipilidade: true
}
let objeto2 = {
    nome: 'maça',
    disponipilidade: true
}
let objeto3 = {
    nome: 'banana',
    disponipilidade: true
}
function fruteira(carrinho){
    carrinho.push(objeto1, objeto2, objeto3)
    console.log(carrinho)
}
fruteira(carrinho)
console.log(carrinho)