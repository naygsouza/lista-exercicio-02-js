function compararNumeros() {
    // Obtendo os valores dos campos de entrada
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    // Verificando se os valores são números
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
        return;
    }

    // Comparando os números e exibindo o resultado
    if (num1 > num2) {
        document.getElementById("resultado").innerHTML = num1 + " é maior que " + num2 + ".";
    } else if (num1 < num2) {
        document.getElementById("resultado").innerHTML = num1 + " é menor que " + num2 + ".";
    } else {
        document.getElementById("resultado").innerHTML = num1 + " é igual a " + num2 + ".";
    }
}