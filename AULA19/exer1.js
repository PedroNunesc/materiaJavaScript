const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// O que vai ser impresso no console? nome: 'Juca', idade: 3, raça: 'SRD'
//                                    nome: 'Juba', idade: 3, raça: 'SRD'
//                                    nome: 'Jubo', idade: 3, raça: 'SRD'

// O que faz a sintaxe dos três pontos antes do nome de um objeto? copia a variavel selecionada