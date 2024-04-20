const listaDeNomes = ["mika","Paulo","Vitor"]

const copiaListaDeNomes = [...listaDeNomes,'Frutas','Verduras']
copiaListaDeNomes[0] = "Vitor"

console.log(copiaListaDeNomes) // ["Vitor","Paulo","Vitor","Frutas","Verduras"]