let filme = {
    direçao: 'Dennis Dugan',
    nome: 'Gente Grande',
    lançamento: 2010,
    elenco: ['Adlam Sander','Chris Rock','Eric Lamonsoff','Marcus Higan','Rob Hilliard'],
    jaVi: 'true'
}
filme.personagens = ['Feader','Lamonsoff','Higan','Rob']


console.log(filme.direçao)
console.log(filme['nome'])
console.log(filme.lançamento)
console.log(filme['elenco'])
console.log(filme.jaVi)
console.log(`O ator ${filme.elenco[0]} interpreta o personagem ${filme.personagens[0]}`)