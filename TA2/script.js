function reverseString() {
    const texto = document.getElementById('texto').value;
    const resultado = texto.split('').reverse().join('');
    document.getElementById('resultado').innerHTML = resultado;
}

document.getElementById('botonInvertir').addEventListener('click',reverseString)