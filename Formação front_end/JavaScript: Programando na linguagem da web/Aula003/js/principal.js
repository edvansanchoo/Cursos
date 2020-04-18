

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aprarecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);


for(var i=0; i< pacientes.length; i++){
    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    var imcLinha = peso / (altura * altura) ;
    
    pesoValido = true;
    alturaValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("peso invalido");
        pesoValido = false;
        tdimc.textContent = "Peso invalido.";
        paciente.classList.add("pacinte-invalido");
    }

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura invalida");
        alturaValida = false;
        tdimc.textContent = "altura Invalida";
        paciente.classList.add("pacinte-invalido");
    }


    if(pesoValido && alturaValida ){
        console.log("peso e altura validos.");
        var tdimc = paciente.querySelector(".info-imc");
        tdimc.textContent = imcLinha.toFixed(2);
    }

    
}





