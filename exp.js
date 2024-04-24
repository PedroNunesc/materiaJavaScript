function exibirmenu(){
    console.log('Menu de opçoes')
    console.log('Opção 1')
    console.log('Opção 2')
    console.log('Opção 3')
    console.log('Opção 4: Sair')
}

let readlineSync = require('readline-sync')

function escolha(opçao){
    switch(opçao){
        case '1':
            console.log('Voce escolheu a opção 1')
            break;
        case '2':
            console.log('Voce escolheu a opção 2')
            break
        case '3':
            console.log('Voce escolheu a opção 3')
            break;
        case '4':
            console.log('Encerramento')
            return true;
        default:
            console.log()

    }
    return false
}

function main(){
    let encerrar = false
    while (!encerrar){
        exibirmenu()
        let opçao = readlineSync.question('Digite o número da opção desejada: ')
        encerrar = escolha(opçao)
    }
}
main()