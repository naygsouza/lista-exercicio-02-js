function calcularTotal() {
    const precoPizza = 12.00;
    const precoRefri = 7.00;
    
    const sabor1 = document.getElementById("sabor1").value;
    const sabor2 = document.getElementById("sabor2").value;
    const sabor3 = document.getElementById("sabor3").value;
    const sabor4 = document.getElementById("sabor4").value;
    const quantidadeRefri = parseInt(document.getElementById("quantidadeRefri").value);

    const totalPizza = precoPizza * 4;
    const totalRefri = precoRefri * quantidadeRefri;
    const totalPagar = totalPizza + totalRefri;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h2>Sabores escolhidos:</h2>
        <p>${sabor1}</p>
        <p>${sabor2}</p>
        <p>${sabor3}</p>
        <p>${sabor4}</p>
        <h2>Total a pagar:</h2>
        <p>Total das pizzas: R$ ${totalPizza.toFixed(2)}</p>
        <p>Total dos refrigerantes: R$ ${totalRefri.toFixed(2)}</p>
        <p>Total a pagar: R$ ${totalPagar.toFixed(2)}</p>
    `;
}