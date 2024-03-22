//esse comando definiu o valor de 'a' e 'b', e depois o 'c' copio o valor do 'a' entao 'c'=10 e depois
//'b'='c' que virou'b'=10 e 'a'='b' que virou 'a'=10. Ficando com 'a','b' e 'c' com valor de 10
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)