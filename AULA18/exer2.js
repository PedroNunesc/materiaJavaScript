let pessoa = {
    nome: 'Pedro',
    idade: 15,
    generomusical: 'Trap'
}
//console.log(`O nome dessa pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosto muito de ${pessoa.generomusical}.`)

function criaobjeto(pessoa){
    let pessoa2 = {
        ...pessoa,
        comidaspreferidas: ['Queijo','Churrasco','Xis'],
        melhoramigo: {
            nome: 'Joao',
            idade: 18
        }
    }
    console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas preferidas sao ${pessoa2.comidaspreferidas[0]},${pessoa2.comidaspreferidas[1]} e ${pessoa2.comidaspreferidas[2]}. Seu melhor amigo se chama ${pessoa2.nome} e tem ${pessoa2.idade} anos de idade.`)
}

criaobjeto(pessoa)