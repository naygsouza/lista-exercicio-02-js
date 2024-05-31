function verificarNota() {
    // Obter o valor da nota digitada pelo usuário
    var nota = document.getElementById("nota").value;

    // Converter a nota para número
    nota = parseFloat(nota);

    // Verificar a condição da nota e exibir o resultado
    if (nota > 6) {
        document.getElementById("resultado").innerText = "Aprovado";
    } else if (nota <= 6 && nota > 4) {
        document.getElementById("resultado").innerText = "Precisa fazer prova substitutiva";
    } else {
        document.getElementById("resultado").innerText = "Reprovado";
    }
}