let comidas = ["Queijo coalho", "Churrasco", "Xis", "Pizza", "Massa 4 queijos"]
console.log(`Essas são minhas comidas favoritas:\n${comidas.join('\n')}`)

let readlineSyn = require("readline-sync");
const comida1 =readlineSyn.question("Qual minha comida favorita?");
comidas[1] = comida1
console.log(comidas)