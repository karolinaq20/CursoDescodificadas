function identificarMes() {
    const mes = parseInt(document.getElementById('mes').value);
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    if (mes >= 1 && mes <= 12) {
        document.getElementById('resultado').textContent = `O mês correspondente é: ${meses[mes - 1]}`;
    } else {
        document.getElementById('resultado').textContent = 'Número inválido. Por favor, informe um número entre 1 e 12.';
    }
}
