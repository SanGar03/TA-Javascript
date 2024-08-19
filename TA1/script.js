
const texto = document.querySelector(Get-Name).name;
const cantidad = document.querySelector(Get-Number).numero

const guardar = document.querySelector(guardar)

function repeatString(texto,rep){

    while(rep>0){
        
        console.log(texto);
        rep--;
    }
    }

guardar.onClick = () => {
    repeatString(texto,cantidad)
  };