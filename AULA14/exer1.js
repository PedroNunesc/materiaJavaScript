const readlineSyn = require('readline-sync');

const frase = readlineSyn.question("Digite uma frase: ");

let frase2
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length); 
// `"Subi num ônibus em Marrocos"`? 
// SUBI NUM ÔNIBUS EM MIRROCOS  27

