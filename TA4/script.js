function sumar(a,b){
    let resultado = 0;
    if (a > b){
        while (b <= a){
            resultado += b;
            b++;
        }
        return String(resultado);
    } else{
        while (b >= a){
            resultado += a;
            a++;
        }
        return String(resultado);
    }
}



function sumAll() {
    const a = parseInt(document.getElementById('parametroA').value);
    const b = parseInt(document.getElementById('parametroB').value);
    const resultado = sumar(a,b);
    document.getElementById('resultado').innerHTML = resultado;
}

document.getElementById('botonSumar').addEventListener('click',sumAll)