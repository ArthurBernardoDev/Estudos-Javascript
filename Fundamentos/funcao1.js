// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7)
imprimirSoma()


//funcao com retorno


function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // como n foi passado o b ele pega o padrao dado na funcao b=0