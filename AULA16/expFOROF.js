/*const numeros = [1,2,3,4,5]
for (let numero of numeros){
    console.log(numero)
}
*/
let mensagem = ''
let palavras = ["a", "b", "c", "d", "e"]
function imprimirmensagem(palavras) {
    for(let palavra of palavras){
    mensagem = mensagem + palavra + ''
    }console.log(mensagem)
    }
imprimirmensagem(palavras)

