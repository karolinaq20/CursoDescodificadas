function calcularMedia() {
    // Obter os valores dos campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);

    // Calcular a média
    const media = (num1 + num2 + num3 + num4 + num5) / 5;

    // Exibir o resultado
    document.getElementById('resultado').textContent = `A média é: ${media}`;
}
function limparMedia() {
    document.getElementById('resultado').innerHTML = '';
    
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('num4').value = '';
    document.getElementById('num5').value = '';
}