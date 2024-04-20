function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// O que vai ser impresso no console? false undefined

// Explique o valor impresso no console. Você sabe por que isso aconteceu? pq altura nao esta definido