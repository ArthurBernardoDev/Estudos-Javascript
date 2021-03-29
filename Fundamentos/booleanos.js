let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // (!) mostra a operação contraria se é true !isAtivo vira falso !! continua true

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!"")
console.log(null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = False))

console.log("pra finalizar...")
console.log(!!("" || null || 0 || " ")) // || significa ou

let nome =""
console.log(nome || "desconhecido")