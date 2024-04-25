function exibirmenu(){
 
    console.log("===== ABRIGOS TEMPORÁRIOS =====")
    console.log("1. Cadastrar abrigo")
    console.log("2. Listar abrigos")
    console.log("3. Procurar abrigo")
    console.log("4. Sair")
    
    }
    
    
    let ABRIGOS = [
    
        {codigo1: "001", nome1: "Casa do Caminho" , endereço1: "Rua do Amanhecer, 123, Centro", telefone1: "(11) 1234-5678", capacidade1: 20, cidade1: "CANOAS"} ,
        {codigo2: "002", nome2: "Abrigo Esperança", endereço2: "Rua da Solidariedade, 321, Bairro", telefone2: "(11) 9876-5432", capacidade2: 30, cidade2: "SÃO LEOPOLDO" } ,
        {codigo3: "003", nome3: "Casa dos Amigos", endereço3: " Av. da Fraternidade, 456, Centro", telefone3: "(11) 5555-4444", capacidade3: 25,cidade3: "NOVO HAMBURGO" } ,
        {codigo4: "004", nome4: "Abrigo do Bem", endereço4: "Rua da Esperança, 789, Bairro", telefone4: "(11) 7777-8888", capacidade4: 35, cidade4: "CANOAS" } ,
        {codigo5: "005", nome5: "Casa dos Anjos", endereço5: "Av. da Paz, 159, Centro", telefone5: "(11) 3333-2222", capacidade5: 15, cidade5: "PORTO ALEGRE" }
    ]
    
    let readlineSync = require('readline-sync')
    
    function cadastro(NovoAbrigo) {
    
        let cadastro1 = readlineSync.question("Nome: ")
        let cadastro2 = readlineSync.question("Endereço: ")
        let cadastro3 = readlineSync.question("Telefone: ")
        let cadastro4 = readlineSync.question("Capacidade de lotação do abrigo: ")
    
    
        let NovosAbrigo = {
            ...NovoAbrigo ,
            novos: [
                  
                {codigo6: "006", nome6: cadastro1, endereço6: cadastro2, telefone6: cadastro3, capacidade6: cadastro4}
            ]
            
        }
    
      
    console.log(NovosAbrigo)
    }
    
    function listagem(){
    
    console.log(" --------------------")
    console.log(" LISTAGEM DE ABRIGOS:")
    console.log("--------------------")
    console.log(" CÓDIGO |         NOME         |              ENDEREÇO              |    TELEFONE    |  CAPACIDADE | CIDADE")
    console.log("---------------------------------------------------------------------------------------------------------")
    console.log(`  ${ABRIGOS[0].codigo1}   |    ${ABRIGOS[0].nome1}   |    ${ABRIGOS[0].endereço1}   | ${ABRIGOS[0].telefone1} |     ${ABRIGOS[0].capacidade1}      | ${ABRIGOS[0].cidade1}`)   
    console.log(`  ${ABRIGOS[1].codigo2}   |    ${ABRIGOS[1].nome2}  | ${ABRIGOS[1].endereço2}  | ${ABRIGOS[1].telefone2} |     ${ABRIGOS[1].capacidade2}      | ${ABRIGOS[1].cidade2}`)
    console.log(`  ${ABRIGOS[2].codigo3}   |    ${ABRIGOS[2].nome3}   | ${ABRIGOS[2].endereço3}  | ${ABRIGOS[2].telefone3} |     ${ABRIGOS[2].capacidade3}      | ${ABRIGOS[2].cidade3}`)
    console.log(`  ${ABRIGOS[3].codigo4}   |    ${ABRIGOS[3].nome4}     |  ${ABRIGOS[3].endereço4}     | ${ABRIGOS[3].telefone4} |     ${ABRIGOS[3].capacidade4}      | ${ABRIGOS[3].cidade4}`)
    console.log(`  ${ABRIGOS[4].codigo5}   |    ${ABRIGOS[4].nome5}    |      ${ABRIGOS[4].endereço5}       | ${ABRIGOS[4].telefone5} |     ${ABRIGOS[4].capacidade5}      |   ${ABRIGOS[4].cidade5}`)
    console.log(`\n`)
    }
    
    function pesquisas(){
    
    let pesquisa = readlineSync.question("Qual cidade você esta? ")
    
            //if(pesquisa === ABRIGOS[0].cidade1 || pesuisa === ABRIGOS[1].cidade2 || pesquisa === ABRIGO[2].cidade3 || pesuisa === ABRIGO[3].cidade4 || pesuisa === ABRIGO[4].cidade5){
        
            if(pesquisa.toUpperCase === ABRIGOS[0].cidade1){ //CANOAS
    
            
        
        console.log("--------------------")
        console.log("LISTAGEM DE ABRIGOS:")
        console.log("--------------------")
        console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE")
        console.log("---------------------------------------------------------------------------------------------------------")
        console.log(` ${ABRIGOS[0].cidade1}`)
        console.log(` ${ABRIGOS[3].cidade4}`)
        console.log(`\n`)
    
            }
    
            else if(pesquisa.toUpperCase  === ABRIGOS[1].cidade2){ //SÃO LEOPOLDO
    
                    
        console.log("--------------------")
        console.log("LISTAGEM DE ABRIGOS:")
        console.log("--------------------")
        console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE")
        console.log("---------------------------------------------------------------------------------------------------------")
        console.log(` ${ABRIGOS[1].cidade2}`)
        console.log(`\n`)
            }
    
            else if(pesquisa.toUpperCase === ABRIGOS[2].cidade3){ //NOVO HAMBURGO
    
                console.log("--------------------")
                console.log("LISTAGEM DE ABRIGOS:")
                console.log("--------------------")
                console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE")
                console.log("---------------------------------------------------------------------------------------------------------")
                console.log(` ${ABRIGOS[2].cidade3}`)
                console.log(`\n`)
    
            }
    
            else if(pesquisa.toUpperCase === ABRIGOS[4].cidade5){ //PORTO ALEGRE
    
                console.log("--------------------")
                console.log("LISTAGEM DE ABRIGOS:")
                console.log("--------------------")
                console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE")
                console.log("---------------------------------------------------------------------------------------------------------")
                console.log(` ${ABRIGOS[4].cidade5}`)
                console.log(`\n`)
            }
    
            else{
                console.log("Não existe abrigo na cidade inserida!")
                console.log(`\n`)
            }
        }
    
    function escolha(opçao){
        switch(opçao){
            case '1':
                cadastro(ABRIGOS)
                break;
    
            case '2':
                listagem()
                break
    
            case '3':
               pesquisas()
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