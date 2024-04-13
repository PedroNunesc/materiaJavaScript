let seriesboas = ["Breaking Bad", "Brooklyn Nine-nine"]
seriesboas.includes("Breaking Bad")//true
seriesboas.includes("Cobra Kai")//false
console.log(seriesboas.includes("Cobra Kai"))
console.log(seriesboas.includes("Breaking Bad"))

let numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros) //[1, 2, 3, 4]
numeros.push(5, 6, 7)
console.log(numeros) //[1, 2, 3, 4, 5, 6, 7]

let meuspeixes = ["palhaço", "mandarim", "esturjão"]
meuspeixes.pop()
console.log(meuspeixes) //["palhaço", "mandarim"]

let letras = ['a', 'b', 'c', 'e', 'f', 'g', 'h']
//indices (1)  0    1    2    3    4    5    6
letras.splice(2, 1)
// letras = [a, b, d, e, f, g, h]
//indices =  0  1  2  3  4  5  6
letras.splice(3, 2) //letras = [a, b, d, g, h]
console.log(letras)
console.log(letras.splice(2, 1))
console.log(letras.splice(3, 2))