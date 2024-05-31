function dividirTurmas(alunos, numTurmas) {
    let pessoasPorTurma = Math.floor(alunos / numTurmas);
    let pessoasSemTurma = alunos % numTurmas;
    return [pessoasPorTurma, pessoasSemTurma];
}

function calcular() {
    let alunosSala = parseInt(document.getElementById("alunos").value);
    let numTurmas = parseInt(document.getElementById("turmas").value);

    let [pessoasPorTurma, pessoasSemTurma] = dividirTurmas(alunosSala, numTurmas);

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Quantidade de pessoas por turma: ${pessoasPorTurma}</p>
        <p>Pessoas sem turma: ${pessoasSemTurma}</p>
    `;
}