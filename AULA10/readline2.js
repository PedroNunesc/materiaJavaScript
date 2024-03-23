const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Qual é sua idade?", (idade) => {
    console.log("Sua idade é:", idade);
    rl.close();
});
let idade = 17
if (idade >= 18){
    console.log("Você é maior de idade!")
}else {
    console.log("Você é menor de idade!")
}
