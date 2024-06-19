function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);

    if (idade >= 18) {
        alert('Você não é menor de idade.');
    } else {
        alert('Você é menor de idade.');
    }
}
