

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aprarecida Nutricionista";



var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

// verificando cada item da tabela
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

    // verifivando se o peso e a altura são validos
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


titulo.addEventListener("click", function(){
    console.log("eu fui cliclado");
});


var botaoAdicionar = document.querySelector("#adicionar-pacinte");

// ação que sera feita ao clicar no botão
botaoAdicionar.addEventListener("click", function(event){
    // Para evitar que a pagina recarregue ao cliclar no botão
    event.preventDefault();

    // Pegando os valores que são inseridos na pagina
    var form = document.querySelector(".form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
    //Criando uma tabela
    var pacienteTr = document.createElement("tr");
    // Criando colunas da tabela
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // guardando os valores que foram pegados da pagina 
    // dentro das colunas da tabela.
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imcLinha.toFixed(2);

    // Adicionando as colunas na tabela
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    console.log(pacienteTr);
});

