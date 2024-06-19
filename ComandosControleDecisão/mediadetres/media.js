function calcularMedia() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const media = (num1 + num2 + num3) / 3;

    document.getElementById('resultado').textContent = `A média aritmética é: ${media}`;
}
    
    function limparMedia() {
        document.getElementById('resultado').innerHTML = '';
        
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('num3').value = '';
}
