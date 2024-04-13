const nome = "   Pedro Henrique Nunes Carlos"
console.log(nome.length)//conta quantos caracteres tem, incluindo os espaços

console.log(nome)
console.log(nome.trim())//retira os espaços que existem antes e depoius de uma string

let frase = "Hoje comi cenoura, adoro cenoura"
frase.includes("cenoura") //true
frase.includes("batata") //false
console.log(frase.includes("cenoura"))
console.log(frase.includes("batata"))

const novafrase = frase.replaceAll("cenoura","batata")
console.log(novafrase) // nova frase = Hoje eu comi batata, adoro batata.

console.log(nome.toLowerCase(nome))
console.log(nome.toUpperCase(nome))