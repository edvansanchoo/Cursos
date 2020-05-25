
//Trocando o titulo da pagina;
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aprarecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

// verificando cada item da tabela
for(var i=0; i< pacientes.length; i++){
    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    pesoValido = validaPeso(peso);
    alturaValida = validaAltura(altura);

    // verifivando se o peso e a altura são validos
    if(!pesoValido){
        pesoValido = false;
        tdimc.textContent = "Peso invalido.";
        paciente.classList.add("pacinte-invalido");
    }

    if(!alturaValida){
        alturaValida = false;
        tdimc.textContent = "altura Invalida";
        paciente.classList.add("pacinte-invalido");
    }


    if(pesoValido && alturaValida ){
        var imcLinha = calculaImc(peso, altura) ;
        tdimc.textContent = imcLinha;
    }    
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


