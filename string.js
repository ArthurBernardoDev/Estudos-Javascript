// string é uma cadeia de caracteres delimitada por "" '' ``
const nome = "Art3ur"

console.log(nome.charAt(4)) // chatAt() escolhe qual letra da const mostrar
console.log(nome.charAt(7)) // retorna como vazio
console.log(nome.charCodeAt(3)) // retorna valor unicode

console.log(nome.substring(1)) // ignora a primeira letra
console.log(nome.substring(0, 3)) // le da primeira letra ate a terceira

console.log("meu nome é: ".concat(nome).concat("!")) // faz a junção entre meu nome a const e a !
console.log("meu nome é: " + nome + "!") // forma de concatenar usando + 
console.log(nome.replace(3, "h")) // replace muda um numero pela letra (a, b)

console.log("Ana,Maria,Pedro").split(",") // slipt gera um array separado por , passado no parametro (",")
