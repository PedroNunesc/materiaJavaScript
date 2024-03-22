const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//bool1 = bool2 = false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
//bool1 && bool2 && bool3 = false
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//bool1 || bool2 = true  !resultado && (bool1 || bool2) = true
console.log("d. ", typeof resultado)
//boolean


