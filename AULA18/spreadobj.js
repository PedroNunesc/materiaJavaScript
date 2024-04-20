// Usamos para espalhamento!!
const usuário = {
    nome: "prof",
    idade: 25,
    email: "stevao@gmail.com.br",
    cidade: "São Paulo"
}
// Usamos a propriedade {...} nome = 
const novoUsuario = {
    ...usuário,
    nome: "João",
    idade: 28,
    genero: "Masculino"
}



console.log(novoUsuario)