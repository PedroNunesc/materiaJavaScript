const readlineSync = require("readline-sync");

let nome = readlineSync.question("Escreva uma frase: ")
let frase = "Grêmio é o mair do sul."
console.log(frase.toUpperCase())
let novafrase = frase.replaceAll("o","i")
console.log(novafrase)
console.log(frase.length)