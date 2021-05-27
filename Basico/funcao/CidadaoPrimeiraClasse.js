// Função em js é First-Class Object
// Função de alta ordem

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array

const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atríbuto de objetos
const obj = {}
obj.falar = function () {return "Opa"}
console.log(obj.falar())

// passar função como param
function run(fun) {
    fun()
}
run(function() { console.log("executando...") })

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }

}
soma(2, 3)(4)