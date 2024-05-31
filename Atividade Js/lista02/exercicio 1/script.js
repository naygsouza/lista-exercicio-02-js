function calcular() {
    var dolarAtual = document.getElementById("dolarInput").value;

    if (dolarAtual <= 0) {
        alert("Por favor, insira uma cotação válida.");
        return;
    }

    var aumentos = [0.01, 0.02, 0.05, 0.10];
    var resultados = "<h2>Resultados:</h2>";

    aumentos.forEach(function(aumento) {
        var novoValor = parseFloat(dolarAtual) * (1 + aumento);
        resultados += "<p>Se subir " + (aumento * 100) + "%, o valor será: $" + novoValor.toFixed(2) + "</p>";
    });

    document.getElementById("resultado").innerHTML = resultados;
}