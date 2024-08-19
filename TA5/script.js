function bisiesto(year){
    // Si es divisible entre 400, entonces es divisible entre 4
    if((year % 4 === 0)){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return String(true);
            }
            return String(false);
        }
        return String(true);
    }
    return String(false);
}



function leapYears() {
    const year = parseInt(document.getElementById('year').value);
    const resultado = bisiesto(year);
    document.getElementById('resultado').innerHTML = resultado;
}

document.getElementById('botonCheck').addEventListener('click',leapYears)