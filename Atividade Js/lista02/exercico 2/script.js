function calcularIngredientes() {
    var numPessoas = document.getElementById("numPessoas").value;

    if (numPessoas <= 0 || isNaN(numPessoas)) {
        alert("Por favor, insira um número válido de pessoas.");
        return;
    }

    var ovosPorPessoa = 2;
    var queijoPorPessoa = 50;

    var totalOvos = ovosPorPessoa * numPessoas;
    var totalQueijo = queijoPorPessoa * numPessoas;

    var resultado = "<h2>Ingredientes necessários:</h2>" +
                    "<p>Ovos necessários: " + totalOvos + "</p>" +
                    "<p>Queijo necessário (em gramas): " + totalQueijo + "</p>";

    document.getElementById("resultado").innerHTML = resultado;
}