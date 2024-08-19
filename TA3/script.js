function removeFromArray() {
    const array = document.getElementById('array').value;
    const eliminar = document.getElementById('elemento').value;
    const aux = array.split(' ');
    const indice = aux.indexOf(eliminar);
    const resultado = aux.splice(indice,1)
    document.getElementById('resultado').innerHTML = aux;
}

document.getElementById('botonQuitar').addEventListener('click',removeFromArray)