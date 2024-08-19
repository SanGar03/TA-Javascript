function repetirString(texto, repeticiones) {
    let resultado = '';
    for (let i = 0; i < repeticiones; i++) {
        resultado += texto + '<br>';
    }
    return resultado;
}

function repetir() {
    const texto = document.getElementById('texto').value;
    const repeticiones = parseInt(document.getElementById('repeticiones').value);
    const resultado = repetirString(texto, repeticiones);
    document.getElementById('resultado').innerHTML = resultado;
}

document.getElementById('botonRepetir').addEventListener('click',repetir)