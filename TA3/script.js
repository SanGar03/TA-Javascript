function removeFromArray() {
    const array = document.getElementById('texto').value;
    const eliminar = document.getElementById('texto1').value;
    const aux = array.split('');
    const indice = aux.indexOf(eliminar);
    const resultado = aux.splice(indice,1)
    document.getElementById('aux').innerHTML = resultado;
}

document.getElementById('botonQuitar').addEventListener('click',removeFromArray)