function verificarParOuImpar() {
    var numero = document.getElementById("numeroInput").value;

    if (numero % 2 === 0) {
        document.getElementById("resultado").innerText = numero + " é um número par.";
    } else {
        document.getElementById("resultado").innerText = numero + " é um número ímpar.";
    }
}