let objeto = {
    nome: 'Pedro Nunes',
    apelidos: ['sla1','sla2','sla3'] 
}
function mensagem(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}
mensagem(objeto)

let novoObjeto = {
    ...objeto,
    novosapelidos: ['sla4','sla5','sla6']
}
function mensagem1(novoObjeto){
    console.log(`Eu sou ${novoObjeto.nome}, mas pode me chamar de: ${novoObjeto.apelidos[0]}, ${novoObjeto.apelidos[1]}, ${novoObjeto.apelidos[2]}, ${novoObjeto.novosapelidos[0]}, ${novoObjeto.novosapelidos[1]} ou ${novoObjeto.novosapelidos[2]}.`)
}
mensagem1(novoObjeto)