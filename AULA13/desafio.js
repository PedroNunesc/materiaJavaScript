let personagens = ["Mario", "luigi", "Bowser", "Toad", "Yoshi", "Waluigi", "Wario", "Peach", "Donkey Kong", "Daisy", "Rosalina", "Koopa", "Bowser jr"]
//Math.random()gera um numero aleatorio de 0 a 1
//Math.floor()arredonda pro numero mais proximo
//Math.floor(Math.random()*10)
//console.log(Math.floor(Math.random()*10))

function quemsoueu(array) {
    let aleatorio =Math.floor(Math.random()*array.length);
    return array[aleatorio];
}
let personagen = quemsoueu(personagens)
console.log("Você é", personagen)