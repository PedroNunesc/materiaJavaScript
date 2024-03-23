//Importando o mudulo redline
const readline = require("readline");

//Criando uma instancia de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Solicitando ao usuario que insira sua idade
rl.question("Qual a sua idade?", (idade) => {
    //Exibindo a idade inserida pelo usuario
    console.log("Sua idade é:", idade);
    //Fechando a interface de leitura
    rl.close();
})