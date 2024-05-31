function calcular() {
    // Obter os valores inseridos pelo usuário
    var valorVendido = parseFloat(document.getElementById("valorVendido").value);
    var meta = parseFloat(document.getElementById("meta").value);
    var metaMinima = parseFloat(document.getElementById("metaMinima").value);

    // Calcular os percentuais de atingimento
    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;

    // Exibir os resultados
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (valorVendido >= meta) {
        resultado.innerHTML += "Parabéns! Você atingiu a meta!";
    } else if (valorVendido >= metaMinima) {
        resultado.innerHTML += "Você atingiu a meta mínima.";
    } else {
        resultado.innerHTML += "Você não atingiu nenhuma das metas.";
    }
    resultado.innerHTML += "<br>Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%";
    resultado.innerHTML += "<br>Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";
}