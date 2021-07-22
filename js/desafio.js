
var inputValorHora = document.querySelector("#valor-hora")
var inputHorasProjeto = document.querySelector("#horas-projeto")
var resultado = document.querySelector("#resposta")

//console.log(resultado) teste realizado no console do navegador para verificar execução

function calcular(){
    var valor = inputValorHora.valueAsNumber
    var horas = inputHorasProjeto.valueAsNumber
    var valorProjeto = valor * horas
    var valorDuasCasas = valorProjeto.toFixed(2)

    resultado.textContent = "R$ " + valorDuasCasas
}
