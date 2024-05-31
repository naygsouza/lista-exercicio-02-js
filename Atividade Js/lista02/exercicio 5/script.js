function verificarIdade() {
    const nome1 = document.getElementById('nome1').value;
    const ano1 = parseInt(document.getElementById('ano1').value);
    const nome2 = document.getElementById('nome2').value;
    const ano2 = parseInt(document.getElementById('ano2').value);
    const nome3 = document.getElementById('nome3').value;
    const ano3 = parseInt(document.getElementById('ano3').value);

    const anoAtual = new Date().getFullYear();

    const idade1 = anoAtual - ano1;
    const idade2 = anoAtual - ano2;
    const idade3 = anoAtual - ano3;

    let maisVelha = "";
    let segundaMaisVelha = "";
    let terceiraMaisVelha = "";

    if (idade1 >= idade2 && idade1 >= idade3) {
        maisVelha = nome1 + " - " + idade1 + " anos";
        if (idade2 >= idade3) {
            segundaMaisVelha = nome2 + " - " + idade2 + " anos";
            terceiraMaisVelha = nome3 + " - " + idade3 + " anos";
        } else {
            segundaMaisVelha = nome3 + " - " + idade3 + " anos";
            terceiraMaisVelha = nome2 + " - " + idade2 + " anos";
        }
    } else if (idade2 >= idade1 && idade2 >= idade3) {
        maisVelha = nome2 + " - " + idade2 + " anos";
        if (idade1 >= idade3) {
            segundaMaisVelha = nome1 + " - " + idade1 + " anos";
            terceiraMaisVelha = nome3 + " - " + idade3 + " anos";
        } else {
            segundaMaisVelha = nome3 + " - " + idade3 + " anos";
            terceiraMaisVelha = nome1 + " - " + idade1 + " anos";
        }
    } else {
        maisVelha = nome3 + " - " + idade3 + " anos";
        if (idade1 >= idade2) {
            segundaMaisVelha = nome1 + " - " + idade1 + " anos";
            terceiraMaisVelha = nome2 + " - " + idade2 + " anos";
        } else {
            segundaMaisVelha = nome2 + " - " + idade2 + " anos";
            terceiraMaisVelha = nome1 + " - " + idade1 + " anos";
        }
    }

    const resultado = "Pessoa mais velha: " + maisVelha + "<br>" +
                      "Segunda pessoa mais velha: " + segundaMaisVelha + "<br>" +
                      "Terceira pessoa mais velha: " + terceiraMaisVelha;

    document.getElementById('resultado').innerHTML = resultado;
}