let objeto1 = {
    nome: 'Pedro',
    idade: 15,
    profissao: 'Desempregado'
}
let objeto2 = {
    nome: 'Nunes',
    idade: 51,
    profissao: 'Vadio'
}
function minhaFuncao(objeto1) {
    let resultado = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length, objeto2.nome, objeto2.nome.length, objeto2.idade, objeto1.profissao, objeto2.profissao.length]
    return resultado
  }
console.log(minhaFuncao(objeto1))