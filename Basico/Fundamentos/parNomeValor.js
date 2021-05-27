const saudacao = "opa" // contexto léxico 1

function exec() {
    const saudacao = "fala" // contexto léxico 2
    return saudacao
}

// Objetos são grupos de pares nome/valor
const cliente = {
    nome: "pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "rua Muito Legal",
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)