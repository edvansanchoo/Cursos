

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aprarecida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");
var tdpeso = document.querySelector(".info-peso");
var peso = tdpeso.textContent;


var tdaltura = document.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdimc = document.querySelector(".info-imc");

var imcLinha = peso / (altura * altura) ;


pesoValido = true;
alturaValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("peso invalido");
    pesoValido = false;
    tdimc.textContent = "Peso invalido.";
}

if(altura <= 0 || altura >= 3.0){
    console.log("Altura invalida");
    alturaValida = false;
    tdimc.textContent = "altura Invalida";
}


if(pesoValido && alturaValida ){
    console.log("peso e altura validos.");
    var tdimc = document.querySelector(".info-imc");
    tdimc.textContent = imcLinha;
}




