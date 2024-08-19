function convertToCelsius() {
    const grados = parseInt(document.getElementById('temperatura').value);
    const resultado = (grados * (9/5) + 32).toFixed(1);
    document.getElementById('resultado').innerHTML = resultado;
}

function convertToFahrenheit(){
    const grados = parseInt(document.getElementById('temperatura').value);
    const resultado = ((grados - 32) * (5/9)).toFixed(1);
    document.getElementById('resultado').innerHTML = resultado;
}

document.getElementById('botonCelsius').addEventListener('click',convertToCelsius);
document.getElementById('botonFar').addEventListener('click',convertToFahrenheit);

