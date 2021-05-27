const nome ="Rebeca"
const concatenacao = "Olá " + nome + "!" // forma "padrão de concatenação"

const template = `Olá ${nome}!` // Forma mais facil usando `${}`

console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Definindo uma função (=>) touppercase coloca todas as letras MAIUSCULAS

console.log(`Ei... ${up("Cuidado")}!`)