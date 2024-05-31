function calcular() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira dois números inteiros válidos.");
        return;
    }

    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;

    var resultado = "<h2>Resultados:</h2>" +
                    "<p>Soma: " + soma + "</p>" +
                    "<p>Subtração: " + subtracao + "</p>" +
                    "<p>Multiplicação: " + multiplicacao + "</p>" +
                    "<p>Divisão: " + divisao + "</p>";

    document.getElementById("resultado").innerHTML = resultado;
}